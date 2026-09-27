// Peluquería Sol · Turnos
// Reglas del negocio (SPEC.md) y pantalla de reservas.

const SERVICIOS = [
  { id: 'corte', nombre: 'Corte', duracion: 30 },
  { id: 'brushing', nombre: 'Brushing', duracion: 30 },
  { id: 'corte-brushing', nombre: 'Corte + brushing', duracion: 60 },
  { id: 'color', nombre: 'Color', duracion: 90 },
  { id: 'mechas', nombre: 'Mechas', duracion: 120 },
];

const CLAVE = 'peluqueria-sol.turnos';
const APERTURA = 9 * 60;   // 9:00 en minutos
const CIERRE = 18 * 60;    // 18:00 en minutos
const INTERVALO = 30;      // los turnos empiezan cada 30 minutos
const DIAS_ADELANTE = 30;
const DIAS_CERRADO = [0, 1]; // domingo y lunes
const PIN = '1234'; // evita entradas por error; no es seguridad real (SPEC)

const NOMBRES_DIA = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
const NOMBRES_MES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio',
  'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

// ---------- Fechas y horas (siempre en hora local) ----------

function dosCifras(n) {
  return String(n).padStart(2, '0');
}

// Date -> 'AAAA-MM-DD'
function fechaATexto(fecha) {
  return fecha.getFullYear() + '-' + dosCifras(fecha.getMonth() + 1) + '-' + dosCifras(fecha.getDate());
}

// 'AAAA-MM-DD' -> Date a las 0:00 locales
function textoAFecha(texto) {
  const [a, m, d] = texto.split('-').map(Number);
  return new Date(a, m - 1, d);
}

// 'HH:MM' -> minutos desde las 0:00
function horaAMinutos(hora) {
  const [h, m] = hora.split(':').map(Number);
  return h * 60 + m;
}

// minutos desde las 0:00 -> 'HH:MM'
function minutosAHora(minutos) {
  return dosCifras(Math.floor(minutos / 60)) + ':' + dosCifras(minutos % 60);
}

function buscarServicio(id) {
  return SERVICIOS.find((s) => s.id === id);
}

// ---------- Reglas del negocio ----------

// Días reservables: de hoy a hoy + 30 inclusive, sin domingos ni lunes.
function diasReservables(ahora) {
  const dias = [];
  for (let i = 0; i <= DIAS_ADELANTE; i++) {
    const dia = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate() + i);
    if (!DIAS_CERRADO.includes(dia.getDay())) dias.push(fechaATexto(dia));
  }
  return dias;
}

// Horarios de inicio donde el servicio entra completo, sin pisar otro turno
// y (si es hoy) sin haber pasado.
function horariosLibres(servicioId, fecha, turnos, ahora) {
  const servicio = buscarServicio(servicioId);
  if (!servicio) return [];

  const ocupados = turnos
    .filter((t) => t.fecha === fecha && buscarServicio(t.servicio))
    .map((t) => {
      const inicio = horaAMinutos(t.hora);
      return { inicio, fin: inicio + buscarServicio(t.servicio).duracion };
    });

  const esHoy = fecha === fechaATexto(ahora);
  const minutosAhora = ahora.getHours() * 60 + ahora.getMinutes();

  const libres = [];
  for (let inicio = APERTURA; inicio + servicio.duracion <= CIERRE; inicio += INTERVALO) {
    const fin = inicio + servicio.duracion;
    if (esHoy && inicio <= minutosAhora) continue;
    const pisa = ocupados.some((o) => inicio < o.fin && o.inicio < fin);
    if (!pisa) libres.push(minutosAHora(inicio));
  }
  return libres;
}

// Errores de los datos del cliente: { nombre, telefono }, cada uno null si está bien.
// El teléfono necesita 8 números o más (se cuentan solo los dígitos).
function validarDatos(nombre, telefono) {
  const errores = { nombre: null, telefono: null };
  if (!nombre.trim()) errores.nombre = 'Escribí tu nombre';
  if (!telefono.trim()) errores.telefono = 'Escribí tu teléfono';
  else if (telefono.replace(/\D/g, '').length < 8) errores.telefono = 'Revisá el teléfono';
  return errores;
}

// Turnos de un día ordenados por hora, con hora de fin calculada.
function turnosDelDia(fecha, turnos) {
  return turnos
    .filter((t) => t.fecha === fecha)
    .sort((a, b) => horaAMinutos(a.hora) - horaAMinutos(b.hora))
    .map((t) => {
      const servicio = buscarServicio(t.servicio);
      return { ...t, fin: minutosAHora(horaAMinutos(t.hora) + servicio.duracion), servicioNombre: servicio.nombre };
    });
}

function sinTurno(turnos, id) {
  return turnos.filter((t) => t.id !== id);
}

// ¿Se puede reservar este turno con los turnos guardados ahora mismo?
// Sirve para no pisar un horario que se ocupó desde otra pestaña o que ya pasó.
function sigueLibre(turno, turnos, ahora) {
  return diasReservables(ahora).includes(turno.fecha)
    && horariosLibres(turno.servicio, turno.fecha, turnos, ahora).includes(turno.hora);
}

// 'AAAA-MM-DD' + n días -> 'AAAA-MM-DD' (hora local)
function sumarDias(fecha, n) {
  const d = textoAFecha(fecha);
  return fechaATexto(new Date(d.getFullYear(), d.getMonth(), d.getDate() + n));
}

// ---------- Guardado ----------

function turnoValido(t) {
  return t && typeof t === 'object'
    && typeof t.id === 'string'
    && buscarServicio(t.servicio)
    && /^\d{4}-\d{2}-\d{2}$/.test(t.fecha)
    && /^\d{2}:\d{2}$/.test(t.hora)
    && typeof t.nombre === 'string'
    && typeof t.telefono === 'string';
}

// Si los datos guardados están dañados o son de otra versión, arranca con la lista vacía.
function leerTurnos() {
  try {
    const lista = JSON.parse(localStorage.getItem(CLAVE) || '[]');
    return Array.isArray(lista) ? lista.filter(turnoValido) : [];
  } catch (e) {
    return [];
  }
}

// Devuelve false si el navegador no deja guardar (bloqueado o lleno).
function guardarTurnos(turnos) {
  try {
    localStorage.setItem(CLAVE, JSON.stringify(turnos));
    return true;
  } catch (e) {
    return false;
  }
}

function nuevoId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

// ---------- Textos para mostrar ----------

function textoDiaLargo(fecha) {
  const d = textoAFecha(fecha);
  return NOMBRES_DIA[d.getDay()] + ' ' + d.getDate() + ' de ' + NOMBRES_MES[d.getMonth()];
}

function textoDiaCorto(fecha) {
  const d = textoAFecha(fecha);
  return NOMBRES_DIA[d.getDay()].slice(0, 3) + ' ' + d.getDate() + '/' + (d.getMonth() + 1);
}

// ---------- Pantalla ----------

function iniciar() {
  const $ = (id) => document.getElementById(id);
  const eleccion = { servicio: null, fecha: null, hora: null };

  function boton(texto, elegido, alTocar) {
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = texto;
    if (elegido) b.classList.add('elegido');
    b.addEventListener('click', alTocar);
    return b;
  }

  function mostrarServicios() {
    $('lista-servicios').replaceChildren(...SERVICIOS.map((s) =>
      boton(s.nombre + ' · ' + s.duracion + ' min', s.id === eleccion.servicio, () => {
        eleccion.servicio = s.id;
        eleccion.hora = null;
        mostrarTodo();
      })));
  }

  function mostrarDias() {
    $('paso-dia').hidden = !eleccion.servicio;
    if (!eleccion.servicio) return;
    $('lista-dias').replaceChildren(...diasReservables(new Date()).map((f) =>
      boton(textoDiaCorto(f), f === eleccion.fecha, () => {
        eleccion.fecha = f;
        eleccion.hora = null;
        mostrarTodo();
      })));
  }

  function mostrarHorarios() {
    const visible = Boolean(eleccion.servicio && eleccion.fecha);
    $('paso-horario').hidden = !visible;
    if (!visible) return;
    const libres = horariosLibres(eleccion.servicio, eleccion.fecha, leerTurnos(), new Date());
    if (!libres.includes(eleccion.hora)) eleccion.hora = null;
    $('lista-horarios').replaceChildren(...libres.map((h) =>
      boton(h, h === eleccion.hora, () => {
        eleccion.hora = h;
        mostrarTodo();
      })));
    $('sin-horarios').hidden = libres.length > 0;
  }

  function mostrarDatos() {
    $('paso-datos').hidden = !eleccion.hora;
    $('boton-confirmar').disabled = !eleccion.hora;
  }

  // Muestra un aviso (o lo esconde si el texto viene vacío). Siempre como texto.
  function avisar(id, texto) {
    $(id).textContent = texto || '';
    $(id).hidden = !texto;
  }

  function mostrarTodo() {
    avisar('aviso-horario', null);
    avisar('aviso-guardado', null);
    // Si el día elegido ya no es reservable (por ejemplo, pasó la medianoche), se descarta.
    if (eleccion.fecha && !diasReservables(new Date()).includes(eleccion.fecha)) {
      eleccion.fecha = null;
      eleccion.hora = null;
    }
    mostrarServicios();
    mostrarDias();
    mostrarHorarios();
    mostrarDatos();
  }

  function mostrarPantalla(id) {
    for (const p of ['pantalla-reservar', 'pantalla-confirmacion', 'pantalla-ingreso', 'pantalla-agenda']) {
      $(p).hidden = p !== id;
    }
  }

  function marcarCampo(campo, error) {
    $(campo).setAttribute('aria-invalid', error ? 'true' : 'false');
    $('error-' + campo).textContent = error || '';
    $('error-' + campo).hidden = !error;
  }

  for (const campo of ['nombre', 'telefono']) {
    $(campo).addEventListener('input', () => marcarCampo(campo, null));
  }

  $('paso-datos').addEventListener('submit', (evento) => {
    evento.preventDefault();
    if (!eleccion.hora) return;

    const errores = validarDatos($('nombre').value, $('telefono').value);
    marcarCampo('nombre', errores.nombre);
    marcarCampo('telefono', errores.telefono);
    if (errores.nombre || errores.telefono) {
      $(errores.nombre ? 'nombre' : 'telefono').focus();
      return;
    }

    $('boton-confirmar').disabled = true; // evita guardar dos veces con doble clic

    const turno = {
      id: nuevoId(),
      servicio: eleccion.servicio,
      fecha: eleccion.fecha,
      hora: eleccion.hora,
      nombre: $('nombre').value.trim(),
      telefono: $('telefono').value.trim(),
    };

    // Se vuelve a leer lo guardado justo antes de guardar: otra pestaña pudo ocupar el horario.
    const turnos = leerTurnos();
    if (!sigueLibre(turno, turnos, new Date())) {
      eleccion.hora = null;
      mostrarTodo();
      avisar('aviso-horario', 'Ese horario se acaba de ocupar o ya pasó. Elegí otro de los horarios libres.');
      $('paso-horario').scrollIntoView({ block: 'start' });
      return;
    }
    if (!guardarTurnos([...turnos, turno])) {
      avisar('aviso-guardado', 'No se pudo guardar el turno. Avisá en el local.');
      $('boton-confirmar').disabled = false;
      return;
    }

    $('conf-servicio').textContent = buscarServicio(turno.servicio).nombre;
    $('conf-dia').textContent = textoDiaLargo(turno.fecha);
    $('conf-hora').textContent = turno.hora;
    $('conf-nombre').textContent = turno.nombre;
    mostrarPantalla('pantalla-confirmacion');
  });

  $('boton-otro').addEventListener('click', () => {
    eleccion.servicio = null;
    eleccion.fecha = null;
    eleccion.hora = null;
    $('paso-datos').reset();
    marcarCampo('nombre', null);
    marcarCampo('telefono', null);
    mostrarTodo();
    mostrarPantalla('pantalla-reservar');
    window.scrollTo(0, 0);
  });

  // ---------- Dueña: ingreso con PIN y agenda ----------
  // El ingreso vive solo en memoria: al salir o recargar se pide el PIN otra vez.

  let agendaFecha = null;
  let aCancelar = null; // id del turno que está preguntando "¿Cancelar?"

  function volverAReservar() {
    agendaFecha = null;
    aCancelar = null;
    $('pin').value = '';
    marcarCampo('pin', null);
    mostrarTodo();
    mostrarPantalla('pantalla-reservar');
    window.scrollTo(0, 0);
  }

  $('enlace-duena').addEventListener('click', () => {
    $('pin').value = '';
    marcarCampo('pin', null);
    mostrarPantalla('pantalla-ingreso');
    $('pin').focus();
  });

  $('boton-volver').addEventListener('click', volverAReservar);
  $('pin').addEventListener('input', () => marcarCampo('pin', null));

  $('form-pin').addEventListener('submit', (evento) => {
    evento.preventDefault();
    if ($('pin').value !== PIN) {
      marcarCampo('pin', 'PIN incorrecto');
      $('pin').select();
      return;
    }
    $('pin').value = '';
    agendaFecha = fechaATexto(new Date());
    mostrarAgenda();
    mostrarPantalla('pantalla-agenda');
  });

  function mostrarAgenda() {
    avisar('aviso-agenda', null);
    $('agenda-dia').textContent = textoDiaLargo(agendaFecha);
    $('agenda-fecha').value = agendaFecha;
    const lista = turnosDelDia(agendaFecha, leerTurnos());
    $('lista-agenda').replaceChildren(...lista.map(itemAgenda));
    $('sin-turnos').hidden = lista.length > 0;
  }

  function itemAgenda(t) {
    const li = document.createElement('li');
    const datos = document.createElement('div');
    datos.textContent = t.hora + '–' + t.fin + ' · ' + t.servicioNombre + ' · ' + t.nombre + ' · ' + t.telefono;
    const acciones = document.createElement('div');
    acciones.className = 'acciones';
    if (aCancelar === t.id) {
      const pregunta = document.createElement('span');
      pregunta.textContent = '¿Cancelar este turno?';
      acciones.append(
        pregunta,
        boton('Sí', false, () => {
          const guardado = guardarTurnos(sinTurno(leerTurnos(), t.id));
          aCancelar = null;
          mostrarAgenda();
          if (!guardado) avisar('aviso-agenda', 'No se pudo cancelar el turno: el navegador no deja guardar.');
        }),
        boton('No', false, () => {
          aCancelar = null;
          mostrarAgenda();
        }));
    } else {
      acciones.append(boton('Cancelar', false, () => {
        aCancelar = t.id;
        mostrarAgenda();
      }));
    }
    li.append(datos, acciones);
    return li;
  }

  function cambiarDia(fecha) {
    agendaFecha = fecha;
    aCancelar = null;
    mostrarAgenda();
  }

  $('dia-anterior').addEventListener('click', () => cambiarDia(sumarDias(agendaFecha, -1)));
  $('dia-siguiente').addEventListener('click', () => cambiarDia(sumarDias(agendaFecha, 1)));
  $('agenda-fecha').addEventListener('change', () => {
    if (/^\d{4}-\d{2}-\d{2}$/.test($('agenda-fecha').value)) cambiarDia($('agenda-fecha').value);
  });
  $('boton-salir').addEventListener('click', volverAReservar);

  mostrarTodo();
}

if (typeof document !== 'undefined') iniciar();

// Para las pruebas con Node (pruebas.js). En el navegador no hace nada.
if (typeof module !== 'undefined') {
  module.exports = {
    SERVICIOS, diasReservables, horariosLibres, fechaATexto, leerTurnos,
    validarDatos, turnosDelDia, sinTurno, sumarDias, sigueLibre, guardarTurnos,
  };
}
