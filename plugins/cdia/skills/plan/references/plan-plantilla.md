# Plantilla de PLAN.md · Método CDIA

El bloque **Estado** de arriba es el tablero del proyecto: lo actualiza /cdia:fase al terminar cada fase y lo lee /cdia:empezar. Mantené el formato de las casillas (`- [ ]` / `- [x]`), porque el plugin las cuenta.

```markdown
# <Nombre del proyecto> · PLAN

> Método CDIA · comunidad CDIA (cdia.pro) · basado en SPEC.md

## Estado
- Fase actual: 1 · <nombre>
- Avance: 0 de 5 fases
- Publicado en: todavía no
- Última actualización: AAAA-MM-DD

## Decisiones técnicas
- Web: Astro, publicada en Vercel.
- Datos y usuarios: Supabase (proyecto "peluqueria-sol").
- WhatsApp: <servicio>, lo contrata la dueña.
(El detalle y el porqué están en DECISIONES.md.)

## Fases

- [ ] **Fase 1 · Reservar un turno de punta a punta**
  - Cumple: R1
  - Qué se construye: página Reservar con servicio, día y hora; tabla `turnos` en Supabase con RLS y permisos; guardar y mostrar confirmación.
  - 🙋 Antes de empezar: crear el proyecto en Supabase y pegar su URL y clave publishable cuando Claude la pida.
  - Cómo se ve terminada: reservo el martes 10:00 desde el celular, veo la confirmación y el turno aparece en la tabla.
  - No entra: diseño final, WhatsApp.

- [ ] **Fase 2 · Horarios ocupados**
  - Cumple: R2 · Necesita la fase 1
  - Qué se construye: …
  - Cómo se ve terminada: …

## Ojo con
- Doble clic en "Reservar": no tiene que crear dos turnos (fase 1).
- Dos personas eligen el mismo horario a la vez: gana la primera (fase 2).

## Pendientes
(Lo que aparezca durante el trabajo y no sea de la fase actual.)

## Decisiones tomadas en el camino
(Las anota /cdia:fase: qué se decidió, por qué y qué cuesta si estaba mal.)
```
