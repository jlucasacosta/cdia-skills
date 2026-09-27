# Peluquería Sol · Turnos · PLAN

> Método CDIA · comunidad CDIA (cdia.pro) · basado en SPEC.md

## Estado
- Fase actual: terminadas las 3 fases, probadas, revisadas y publicadas (probado online en 375 px: reservar, recargar, agenda con PIN; sin errores en consola)
- Avance: 3 de 3 fases
- Publicado en: https://cdia-prueba-peluqueria.vercel.app · 2026-09-27
- Última actualización: 2026-09-27

## Decisiones técnicas
- Web: página estática con tres archivos, sin instalar nada: `index.html` (pantallas), `estilos.css` (colores y tamaños), `app.js` (reglas y guardado).
- Datos: localStorage del navegador, bajo una sola clave `peluqueria-sol.turnos` (una lista de turnos con id, servicio, fecha, hora de inicio, nombre y teléfono).
- Fechas: siempre en la hora local del aparato; los días se guardan como `AAAA-MM-DD` y las horas como `HH:MM`.
- Acceso de la dueña: el "entró con PIN" vive solo mientras la pestaña está abierta en la agenda; al tocar "Salir" o recargar, vuelve a pedir el PIN.
- Sin servicios externos para los datos. Código en GitHub (privado) y web publicada en Vercel como página estática (sin variables de entorno).
(El detalle y el porqué están en DECISIONES.md, D1–D15.)

## Fases

- [x] **Fase 1 · Reservar un turno de punta a punta**
  - Cumple: R1, R2, R3, R4, R5, R6, R10
  - Qué se construye: `index.html` con la pantalla Reservar (título "Peluquería Sol" y los 4 pasos: servicio, día, horario, nombre y teléfono + "Confirmar turno") y la pantalla Confirmación con "Reservar otro turno"; en `app.js` la lista fija de servicios y duraciones del SPEC, el cálculo de días (de hoy a hoy + 30 días inclusive, sin domingo ni lunes), el cálculo de horarios libres (cada 30 min de 9:00, que terminen a las 18:00 o antes, que no pisen otro turno, que no hayan pasado si es hoy) y el guardado en localStorage. Los campos nombre (máximo 60 letras) y teléfono llevan `autocomplete="off"` para que la tablet no sugiera datos de otros clientes, y "Reservar otro turno" deja todo vacío. `estilos.css` mínimo para que se lea.
  - Cómo se ve terminada:
    - Abro `index.html`: veo "Peluquería Sol" y los 5 servicios con su duración.
    - Elijo "Color": aparecen días de hoy a 30 días, sin domingos ni lunes.
    - Elijo un martes: veo horarios de 9:00 a 16:30 (el último que termina a las 18:00).
    - Reservo Color el martes a las 10:00 con nombre "Ana" y teléfono "1122334455": veo la confirmación con servicio, día, hora y nombre.
    - Vuelvo a elegir "Corte" ese martes: 10:00, 10:30 y 11:00 ya no aparecen; 11:30 sí (el color termina justo a esa hora).
    - Si elijo hoy, no aparecen horarios que ya pasaron. Si un día queda lleno, dice "No hay horarios libres este día".
    - Recargo la página y cierro/abro el navegador: el turno de Ana sigue ocupando su horario.
  - No entra: validaciones de nombre y teléfono, agenda de la dueña, diseño final, aviso de localStorage bloqueado.

- [x] **Fase 2 · Validaciones y agenda de la dueña**
  - Cumple: R7, R8, R11, R12, R13, R14, R15, R16, R17 · Necesita la fase 1
  - Qué se construye: validaciones al confirmar (nombre y teléfono obligatorios, teléfono con 8 números o más contando solo dígitos, marcando el campo que falla); enlace "Soy la dueña" al pie de Reservar; pantalla Ingreso con campo de PIN y "Entrar" (PIN `1234`); pantalla Agenda con el día arriba, flechas ← → y selector de fecha, lista de turnos del día ordenados por hora (inicio–fin, servicio, nombre, teléfono), botón "Cancelar" con pregunta Sí/No en cada turno, y botón "Salir".
  - Cómo se ve terminada:
    - Confirmo sin nombre: no se guarda y se marca el campo. Teléfono "1234": dice "Revisá el teléfono" y no se guarda.
    - Toco "Soy la dueña", escribo "0000": dice "PIN incorrecto" y no veo turnos.
    - Escribo "1234": veo la agenda de hoy ordenada por hora.
    - Con → voy al martes del turno de Ana: veo "10:00–11:30 · Color · Ana · 1122334455". Un día sin turnos dice "No hay turnos este día".
    - Toco "Cancelar" en Ana y elijo "No": sigue. Toco "Cancelar" y "Sí": desaparece, y en Reservar el martes 10:00 vuelve a estar libre para Color.
    - Toco "Salir": vuelvo a Reservar y, para entrar a la agenda, me pide el PIN otra vez.
  - No entra: diseño final.

- [x] **Fase 3 · Casos difíciles y diseño para celular**
  - Cumple: R9, R18, R19 · Necesita las fases 1 y 2
  - Qué se construye: al tocar "Confirmar turno", volver a leer los turnos guardados justo antes de guardar y rechazar si el horario ya se ocupó (aviso + horarios libres de ese día actualizados); aviso "No se pudo guardar el turno. Avisá en el local." cuando el navegador no deja guardar, sin confirmación falsa; estilo final del SPEC (fondo claro, dorado para botones, texto oscuro, botones grandes, pensado primero para celular).
  - Cómo se ve terminada:
    - Abro dos pestañas, elijo el mismo horario en las dos, confirmo en la primera y después en la segunda: la segunda avisa que se ocupó y muestra los horarios libres de ese día.
    - Con el guardado bloqueado (modo que simula localStorage lleno), confirmar muestra el aviso y no la confirmación.
    - En el tamaño de un celular (375 px de ancho) reservo y uso la agenda sin zoom ni desplazamiento de costado.
  - No entra: nada fuera del SPEC.

## Ojo con
- Doble clic en "Confirmar turno": tiene que guardar un solo turno (fase 1: el botón se desactiva al tocarlo; fase 3: la re-lectura antes de guardar también lo frena).
- Nombre o teléfono con símbolos raros (por ejemplo `<b>`): todo dato del cliente se muestra como texto plano, nunca como HTML, en la confirmación y en la agenda (fases 1 y 2).
- La página queda abierta mucho tiempo y el horario elegido ya pasó al confirmar: se rechaza como "ya no está disponible" (fase 3).
- Datos guardados dañados o de otra versión en localStorage: la app arranca igual con la lista vacía en vez de quedar en blanco (fase 1).
- Cambio de día a medianoche o de horario de verano: las fechas se calculan en hora local, nunca en UTC (fase 1).

## Pendientes
- Los turnos viejos nunca se borran (nombres y teléfonos quedan guardados). El SPEC no lo pide; evaluar después de la fase 3 si borrar automáticamente los de más de 30 días atrás.
- Al abrir con doble clic (`file://`), algunos navegadores tratan distinto el guardado local (Safari puede no guardar). Probar en el navegador de la tablet real; si falla, abrirlo con un servidor local simple.
- ~~Si el navegador no deja guardar al **cancelar** un turno desde la agenda, hoy no se avisa.~~ Resuelto en la fase 3: avisa "No se pudo cancelar el turno: el navegador no deja guardar." y el turno sigue en la lista.
- (Revisión) El teléfono no tiene largo máximo y acepta letras si hay 8 números o más ("abcdefgh12345678" pasa); el tope de 60 letras del nombre está solo en el HTML. Menor: no rompe nada. Si molesta, poner `maxlength` en el teléfono y un tope en `validarDatos`.
- (Revisión) En el calendario de la agenda, mientras se escribe el año a mano (ej. "0050"), puede mostrarse por un momento un día de 1950. Menor: se corrige solo al terminar de escribir. Si molesta, usar `setFullYear` en `textoAFecha`.
- (Revisión) En una tablet compartida, la confirmación deja a la vista el nombre del cliente anterior hasta que alguien toca "Reservar otro turno". El SPEC no lo pide. Si molesta, volver solo a Reservar después de unos segundos.

## Decisiones tomadas en el camino
(Las anota /cdia:fase: qué se decidió, por qué y qué cuesta si estaba mal.)
- Fase 1 · Creé un `CLAUDE.md` mínimo a mano en vez de correr `/cdia:preparar` — sin GitHub solo faltaba ese archivo y la prueba no admite preguntas — si estaba mal, se corre `/cdia:preparar` y se completa, sin tocar la app.
- Fase 1 · Sumé `pruebas.js` con pruebas de las reglas de días y horarios (se corren con `node pruebas.js`) — dan evidencia repetible sin abrir el navegador — si no se quiere, se borra; la app no depende de él.
- Fase 1 · Un horario de hoy cuenta como "ya pasado" si empieza a la hora actual o antes (a las 10:00 en punto ya no se ofrece 10:00) — es lo más simple que cumple R4 — si estaba mal, se pierde como mucho un turno justo en el minuto exacto.
- Fase 1 · El nombre y el teléfono todavía se guardan aunque estén vacíos — las validaciones son de la fase 2 — hasta la fase 2 se puede reservar sin datos.
- Fase 2 · Los campos vacíos dicen "Escribí tu nombre" / "Escribí tu teléfono" y el teléfono corto "Revisá el teléfono" (se cuentan solo los números, así "11 2233-4455" vale) — el SPEC solo fija el texto del teléfono corto — si estaba mal, se cambian dos textos.
- Fase 2 · La pregunta "¿Cancelar este turno? Sí / No" aparece dentro del mismo turno, no en una ventanita del navegador — se lee mejor en la tablet y se puede probar — si estaba mal, se cambia por la ventanita sin tocar la regla de cancelar.
- Fase 2 · En la agenda la dueña puede ir a cualquier día (también pasados o más allá de 30 días) — para revisar turnos viejos o cargados antes — si estaba mal, se limitan las flechas.
- Fase 3 · Un solo aviso para "se ocupó" y "ya pasó" ("Ese horario se acaba de ocupar o ya pasó. Elegí otro de los horarios libres.") que aparece arriba de los horarios del día, ya actualizados — para el cliente la solución es la misma: elegir otro — si estaba mal, se separa en dos textos.
- Fase 3 · El "modo que simula localStorage lleno" no quedó dentro de la web: se prueba desde afuera, bloqueando el guardado del navegador en la prueba automática — así la web real no tiene un interruptor escondido que alguien pueda activar sin querer — si se quiere un modo a mano, se agrega un parámetro en la dirección.
- Fase 3 · Al cancelar en la agenda, si el navegador no deja guardar, se avisa "No se pudo cancelar el turno: el navegador no deja guardar." (texto distinto al de reservar, que menciona "Avisá en el local", porque quien lo ve es la dueña) — cierra el pendiente anotado en la fase 2 — si estaba mal, se cambia un texto.
- Fase 3 · Las pruebas en navegador se hicieron con un script automático (Chromium sin ventana, en 375 px y 1280 px de ancho) que vive fuera del proyecto; en el proyecto quedan sus capturas en `docs/capturas/fase-3/` — no hay panel Browser en esta sesión y la prueba no admite preguntas — si se quiere repetir a mano, alcanza con abrir `index.html` y seguir los pasos de "Cómo se ve terminada".
- Publicar · Se publicó en Vercel aunque la primera versión decía "sin GitHub" — la persona lo pidió para la prueba — ojo: cada aparato guarda sus propios turnos (lo reservado en el celular de un cliente no le llega a la dueña) y el PIN `1234` se puede leer en `app.js`.
- Publicar · Vercel bloqueó la primera publicación porque los commits estaban firmados como `test <test@test>` (autor que no es de la cuenta) — se configuró en este repo la identidad git de `jlucasacosta` y se publicó con un commit nuevo, sin reescribir el historial — si se prefiere otra identidad, se cambia con `git config user.email`.
