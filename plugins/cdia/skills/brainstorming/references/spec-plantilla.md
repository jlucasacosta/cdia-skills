# Plantilla de SPEC.md · Método CDIA

Escribilo en lenguaje simple, para que lo entienda el dueño del negocio. Sacá las secciones que no apliquen; no dejes ninguna con "a definir".

```markdown
# <Nombre del proyecto> · SPEC

> Método CDIA · comunidad CDIA (cdia.pro) · aprobado el AAAA-MM-DD

## Objetivo
<Qué problema resuelve y para quién, en una o dos frases.>

## Qué se entendió
- Lo que pidió la persona: <…>
- Lo que se supuso y confirmó: <…>

## Usuarios
| Quién | Qué puede hacer |
|---|---|
| Cliente | Elige servicio, día y hora y reserva su turno. |
| Dueña | Ve la agenda del día y cancela turnos. |

## Requisitos
Cada uno se convierte en una prueba en el paso 4 (/cdia:probar).

- **R1** · Cuando un cliente elige servicio, día y hora libres y confirma, la app guarda el turno y le muestra la confirmación.
- **R2** · Cuando un cliente elige un horario que se acaba de ocupar, la app le avisa y le ofrece los horarios libres.
- **R3** · Cuando la dueña entra a la agenda, la app muestra solo los turnos del día elegido, ordenados por hora.

## Pantallas
- Inicio: …
- Reservar: …

## Datos y quién los ve
| Dato | Dónde se guarda | Quién lo puede ver |
|---|---|---|
| Nombre y teléfono del cliente | Base de datos (Supabase) | Solo la dueña |

## Conexiones
- WhatsApp para la confirmación: <servicio, si es pago, quién lo contrata>.

## Cuando algo sale mal
- Si falla el envío del WhatsApp, el turno igual queda guardado y la dueña lo ve marcado.

## Tecnología y publicación
<Se completa en el plan si todavía no se decidió.>

## Fuera de alcance (v1)
- Pagos online.
- Programa de puntos.
```

## Cómo escribir buenos requisitos

- Uno por comportamiento, empezando por "Cuando…" (qué pasa) y siguiendo con "la app…" (qué hace).
- Que se pueda comprobar mirando la pantalla: "muestra la confirmación", no "funciona bien".
- Incluí los casos que salen mal (horario ocupado, dato vacío, sin conexión), no solo el camino feliz.
- Si un requisito no cabe en una línea, probablemente son dos.
