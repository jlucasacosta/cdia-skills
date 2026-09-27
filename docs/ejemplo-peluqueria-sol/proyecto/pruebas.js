// Pruebas de las reglas de turnos. Se corren con: node pruebas.js
const assert = require('assert');
const {
  diasReservables, horariosLibres, leerTurnos, validarDatos, turnosDelDia, sinTurno, sumarDias,
  sigueLibre, guardarTurnos,
} = require('./app.js');

let fallas = 0;
function prueba(nombre, fn) {
  try {
    fn();
    console.log('OK   ' + nombre);
  } catch (e) {
    fallas++;
    console.log('FALLA ' + nombre + '\n      ' + e.message);
  }
}

// Domingo 27/9/2026 a las 12:00 (hora local)
const domingo = new Date(2026, 8, 27, 12, 0);
const martes = '2026-09-29';
const ana = { id: 'a', servicio: 'color', fecha: martes, hora: '10:00', nombre: 'Ana', telefono: '1122334455' };

prueba('R2 · días de hoy a 30 días, sin domingos ni lunes', () => {
  const dias = diasReservables(domingo);
  assert.strictEqual(dias[0], '2026-09-29'); // domingo hoy y lunes 28 se saltean
  assert.strictEqual(dias[dias.length - 1], '2026-10-27'); // hoy + 30 = martes 27/10
  for (const d of dias) {
    const [a, m, dd] = d.split('-').map(Number);
    const dia = new Date(a, m - 1, dd).getDay();
    assert.ok(dia !== 0 && dia !== 1, d + ' es domingo o lunes');
  }
  assert.strictEqual(dias.length, 21); // 31 días - 5 domingos - 5 lunes
});

prueba('R3 · Color un martes vacío: de 9:00 a 16:30', () => {
  const h = horariosLibres('color', martes, [], domingo);
  assert.strictEqual(h[0], '09:00');
  assert.strictEqual(h[h.length - 1], '16:30');
  assert.strictEqual(h.length, 16);
});

prueba('R3 · Mechas termina a las 18:00 como máximo: último 16:00', () => {
  const h = horariosLibres('mechas', martes, [], domingo);
  assert.strictEqual(h[h.length - 1], '16:00');
});

prueba('R3 · Con Color de Ana a las 10:00, Corte no ofrece 10:00, 10:30 ni 11:00; sí 9:30 y 11:30', () => {
  const h = horariosLibres('corte', martes, [ana], domingo);
  for (const x of ['10:00', '10:30', '11:00']) assert.ok(!h.includes(x), x + ' aparece');
  assert.ok(h.includes('09:30') && h.includes('11:30'));
});

prueba('R3 · Con Color de Ana a las 10:00, Color no ofrece 9:00 (se pisaría)', () => {
  const h = horariosLibres('color', martes, [ana], domingo);
  assert.ok(!h.includes('09:00') && !h.includes('09:30'));
  assert.ok(h.includes('11:30'));
});

prueba('R4 · Hoy a las 10:15 no se ofrecen horarios que ya pasaron', () => {
  const martesMañana = new Date(2026, 8, 29, 10, 15);
  const h = horariosLibres('corte', martes, [], martesMañana);
  assert.strictEqual(h[0], '10:30');
});

prueba('R4 · Hoy a las 18:00 no queda ningún horario', () => {
  const h = horariosLibres('corte', martes, [], new Date(2026, 8, 29, 18, 0));
  assert.deepStrictEqual(h, []);
});

prueba('R5 · Día lleno: sin horarios libres', () => {
  const lleno = [];
  for (let m = 9 * 60; m < 18 * 60; m += 30) {
    lleno.push({ ...ana, id: 'x' + m, servicio: 'corte', hora: String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0') });
  }
  assert.deepStrictEqual(horariosLibres('corte', martes, lleno, domingo), []);
});

prueba('Turnos de otro día no molestan', () => {
  const h = horariosLibres('corte', '2026-09-30', [ana], domingo);
  assert.strictEqual(h.length, 18);
});

prueba('Datos dañados en localStorage: arranca con la lista vacía', () => {
  const guardado = {};
  global.localStorage = { getItem: (k) => guardado[k] ?? null, setItem: (k, v) => { guardado[k] = v; } };
  guardado['peluqueria-sol.turnos'] = '{esto no es json';
  assert.deepStrictEqual(leerTurnos(), []);
  guardado['peluqueria-sol.turnos'] = '{"otra":"version"}';
  assert.deepStrictEqual(leerTurnos(), []);
  guardado['peluqueria-sol.turnos'] = JSON.stringify([ana, { basura: 1 }]);
  assert.deepStrictEqual(leerTurnos(), [ana]);
});

prueba('R7 · Nombre o teléfono vacíos (o solo espacios) dan error', () => {
  const e = validarDatos('   ', '');
  assert.ok(e.nombre && e.telefono);
  assert.strictEqual(validarDatos('Ana', '').nombre, null);
});

prueba('R8 · Teléfono con menos de 8 números: "Revisá el teléfono"', () => {
  assert.strictEqual(validarDatos('Ana', '1234').telefono, 'Revisá el teléfono');
  assert.strictEqual(validarDatos('Ana', '11-22 33').telefono, 'Revisá el teléfono'); // 6 dígitos
  assert.strictEqual(validarDatos('Ana', '11 2233-4455').telefono, null);
  assert.strictEqual(validarDatos('Ana', '12345678').telefono, null);
});

prueba('R12 · Agenda del día ordenada por hora, con hora de fin', () => {
  const beto = { ...ana, id: 'b', servicio: 'corte', hora: '09:00', nombre: 'Beto' };
  const otroDia = { ...ana, id: 'c', fecha: '2026-09-30' };
  const lista = turnosDelDia(martes, [ana, otroDia, beto]);
  assert.deepStrictEqual(lista.map((t) => t.nombre), ['Beto', 'Ana']);
  assert.strictEqual(lista[1].fin, '11:30');
  assert.strictEqual(lista[1].servicioNombre, 'Color');
});

prueba('R14 · Día sin turnos: lista vacía', () => {
  assert.deepStrictEqual(turnosDelDia('2026-10-01', [ana]), []);
});

prueba('R15 · Cancelar libera el horario para los clientes', () => {
  const quedan = sinTurno([ana], 'a');
  assert.deepStrictEqual(quedan, []);
  assert.ok(horariosLibres('color', martes, quedan, domingo).includes('10:00'));
});

prueba('R13 · Flechas de día cruzan meses en hora local', () => {
  assert.strictEqual(sumarDias('2026-09-30', 1), '2026-10-01');
  assert.strictEqual(sumarDias('2026-10-01', -1), '2026-09-30');
});

prueba('R9 · Horario ocupado desde otra pestaña: ya no sigue libre', () => {
  const beto = { ...ana, id: 'b', servicio: 'corte', hora: '10:30', nombre: 'Beto' };
  assert.ok(sigueLibre(beto, [], domingo));
  assert.ok(!sigueLibre(beto, [ana], domingo)); // Ana (Color 10:00–11:30) se guardó antes
  assert.ok(sigueLibre({ ...beto, hora: '11:30' }, [ana], domingo));
});

prueba('Página abierta mucho tiempo: un horario que ya pasó no sigue libre', () => {
  const beto = { ...ana, id: 'b', servicio: 'corte', hora: '10:00' };
  assert.ok(!sigueLibre(beto, [], new Date(2026, 8, 29, 10, 5)));
  assert.ok(!sigueLibre(beto, [], new Date(2026, 8, 30, 8, 0))); // ya es el día siguiente
});

prueba('R18 · Navegador que no deja guardar: guardarTurnos avisa con false', () => {
  global.localStorage = { getItem: () => null, setItem: () => { throw new Error('QuotaExceededError'); } };
  assert.strictEqual(guardarTurnos([ana]), false);
  const guardado = {};
  global.localStorage = { getItem: (k) => guardado[k] ?? null, setItem: (k, v) => { guardado[k] = v; } };
  assert.strictEqual(guardarTurnos([ana]), true);
  assert.deepStrictEqual(leerTurnos(), [ana]);
});

console.log(fallas ? '\n' + fallas + ' prueba(s) fallaron' : '\nTodas las pruebas pasaron');
process.exit(fallas ? 1 : 0);
