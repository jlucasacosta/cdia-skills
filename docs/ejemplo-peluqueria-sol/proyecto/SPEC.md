# Peluquería Sol · Turnos · SPEC

> Método CDIA · comunidad CDIA (cdia.pro) · aprobado el 2026-09-27 (prueba automática: las decisiones se tomaron con la recomendación de Claude como respuesta)

## Objetivo
Que los clientes de la Peluquería Sol puedan reservar un turno eligiendo servicio, día y hora, y que la dueña vea su agenda ordenada, sin papel ni llamadas.

## Qué se entendió
- Lo que pidió la persona: una web de turnos donde los clientes reservan servicio, día y hora y la dueña ve la agenda. Datos guardados en el navegador (localStorage), sin servicios externos ni GitHub, solo git local.
- Lo que se supuso y confirmó:
  - Atiende una sola persona: nunca hay dos turnos que se pisen.
  - Los datos viven en un solo navegador de un solo aparato. Esta versión sirve para usarla en un mismo dispositivo (por ejemplo, una tablet en el mostrador) o como demostración; las reservas hechas desde el celular de un cliente **no** le llegan a la dueña.
  - El acceso de la dueña con PIN evita entradas por error, pero no es seguridad real.

## Usuarios
| Quién | Qué puede hacer |
|---|---|
| Cliente | Elige servicio, día y hora libres, carga nombre y teléfono y reserva su turno. |
| Dueña | Entra con PIN, ve la agenda del día que elija y cancela turnos. |

## Reglas del negocio
- Servicios y duración: Corte (30 min), Brushing (30 min), Corte + brushing (60 min), Color (90 min), Mechas (120 min).
- Días de atención: martes a sábado. Domingo y lunes, cerrado.
- Horario: 9:00 a 18:00. Los turnos empiezan cada 30 minutos (9:00, 9:30, …) y deben terminar a las 18:00 o antes.
- Se puede reservar desde hoy hasta 30 días adelante. No se ofrecen horarios que ya pasaron.
- Un horario está libre si el servicio entero entra sin pisarse con ningún turno ya reservado.
- PIN de la dueña: `1234` (fijo en esta versión).

## Requisitos
Cada uno se convierte en una prueba en el paso 4 (/cdia:probar).

- **R1** · Cuando un cliente abre la web, la app muestra el nombre "Peluquería Sol" y la lista de servicios con su duración.
- **R2** · Cuando un cliente elige un servicio, la app le muestra los días que se pueden reservar (de hoy a 30 días adelante), sin domingos ni lunes.
- **R3** · Cuando un cliente elige un día, la app muestra solo los horarios de inicio donde el servicio elegido entra completo antes de las 18:00 sin pisar otro turno.
- **R4** · Cuando el día elegido es hoy, la app no muestra horarios que ya pasaron.
- **R5** · Cuando un día no tiene ningún horario libre para el servicio elegido, la app muestra "No hay horarios libres este día" y deja elegir otro día.
- **R6** · Cuando un cliente confirma con nombre y teléfono cargados, la app guarda el turno y muestra una confirmación con servicio, día, hora y nombre.
- **R7** · Cuando un cliente intenta confirmar con el nombre o el teléfono vacíos, la app no guarda nada y marca el campo que falta.
- **R8** · Cuando un cliente escribe un teléfono con menos de 8 números, la app no guarda nada y avisa "Revisá el teléfono".
- **R9** · Cuando un horario se ocupó entre que el cliente lo eligió y confirmó (por ejemplo, desde otra pestaña), la app no guarda el turno, avisa que se ocupó y vuelve a mostrar los horarios libres de ese día.
- **R10** · Cuando se recarga la página o se cierra y se vuelve a abrir el navegador, los turnos guardados siguen estando.
- **R11** · Cuando alguien entra a "Soy la dueña" y escribe un PIN incorrecto, la app muestra "PIN incorrecto" y no muestra la agenda.
- **R12** · Cuando la dueña escribe el PIN correcto, la app muestra la agenda de hoy con los turnos ordenados por hora, cada uno con hora de inicio y fin, servicio, nombre y teléfono.
- **R13** · Cuando la dueña elige otro día (con flechas de día anterior/siguiente o con un calendario), la app muestra solo los turnos de ese día.
- **R14** · Cuando el día elegido no tiene turnos, la agenda muestra "No hay turnos este día".
- **R15** · Cuando la dueña toca "Cancelar" en un turno y confirma, la app borra el turno de la agenda y ese horario vuelve a aparecer libre para los clientes.
- **R16** · Cuando la dueña toca "Cancelar" y después elige "No", el turno queda como estaba.
- **R17** · Cuando la dueña toca "Salir", la app vuelve a la pantalla de reservas y para ver la agenda otra vez pide el PIN.
- **R18** · Cuando el navegador no permite guardar datos (localStorage bloqueado o lleno), la app muestra "No se pudo guardar el turno. Avisá en el local." y no muestra una confirmación falsa.
- **R19** · Cuando la web se abre en un celular, todo se puede usar sin hacer zoom ni desplazarse de costado.

## Pantallas
- **Reservar (inicio):** nombre de la peluquería arriba y cuatro pasos en orden en la misma página: 1) servicio, 2) día, 3) horario, 4) nombre y teléfono + botón "Confirmar turno". Abajo, un enlace discreto "Soy la dueña".
- **Confirmación:** resumen del turno (servicio, día, hora, nombre) y botón "Reservar otro turno".
- **Ingreso de la dueña:** campo de PIN y botón "Entrar".
- **Agenda:** día elegido arriba con flechas ← → y un selector de fecha; debajo, la lista de turnos del día ordenados por hora, cada uno con botón "Cancelar". Botón "Salir".

## Estilo
Cálido y luminoso, en línea con "Sol": fondo claro, un color principal amarillo/dorado para botones, textos oscuros y fáciles de leer, botones grandes pensados primero para celular.

## Datos y quién los ve
| Dato | Dónde se guarda | Quién lo puede ver |
|---|---|---|
| Turno: servicio, día, hora de inicio, nombre y teléfono del cliente | localStorage del navegador del aparato donde se reservó | La dueña desde la agenda. Aviso: cualquiera con acceso a ese aparato y conocimientos técnicos también puede leerlos. |
| Lista de servicios, horarios y PIN | Escritos en el código de la web | Cualquiera que abra el código |

## Conexiones
Ninguna. No se usan servicios externos, ni mails, ni WhatsApp, ni GitHub. El historial se guarda solo con git local.

## Cuando algo sale mal
- Horario ocupado al confirmar: se avisa y se muestran los horarios libres (R9).
- Datos faltantes o teléfono inválido: no se guarda y se marca el campo (R7, R8).
- El navegador no deja guardar: se avisa y no se muestra una confirmación falsa (R18).
- Si se borran los datos del navegador, se pierden todos los turnos. Es una limitación conocida de esta versión.

## Tecnología y publicación
Una página web estática: archivos HTML, CSS y JavaScript sin frameworks ni instalaciones. Se abre con doble clic en `index.html`. No se publica en internet en esta versión.

## Fuera de alcance (v1)
- Reservas desde el celular de cada cliente que le lleguen a la dueña (necesita una base de datos en internet).
- Seguridad real para la agenda (login verdadero).
- Mails, WhatsApp o recordatorios.
- Que el cliente cancele o cambie su turno desde la web (llama al local).
- Varias peluqueras o sillas al mismo tiempo.
- Editar servicios, precios, horarios, feriados o el PIN desde la web.
- Pagos online.
