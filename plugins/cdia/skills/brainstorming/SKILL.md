---
name: brainstorming
description: Paso 1 del Método CDIA (comunidad CDIA, cdia.pro). Convierte una idea en un diseño acordado antes de construir, entrevistando a la persona de a una pregunta y escribiendo el SPEC.md. Se usa cuando alguien quiere crear algo nuevo (una web, una app, un sistema, una función nueva o un cambio grande) y todavía no hay un diseño aprobado, o cuando escribe /cdia:brainstorming.
argument-hint: "[tu idea, como te salga]"
---

# Brainstorming · Método CDIA

Idea de la persona (puede venir vacía):

<idea>
$ARGUMENTS
</idea>

Empezá tu primer mensaje con la línea `Método CDIA · Paso 1: Brainstorming`, para que la persona sepa qué está pasando.

Quien usa el Método CDIA suele no saber programar. Hablá en su idioma y con palabras simples, explicá cada término técnico la primera vez que aparece y usá el caso concreto de la persona en los ejemplos.

## Por qué este paso

Un error en el diseño se arregla en un minuto; el mismo error en el código cuesta horas. Por eso en este paso no se escribe código, no se instala nada y no se crean proyectos en servicios externos: primero se acuerda qué se construye. Leer el proyecto para entenderlo sí está permitido.

## 1. Elegí el camino según el tamaño

Antes de la primera pregunta, clasificá el pedido y decilo en una línea, para que la persona pueda corregirte ("esto parece un cambio acotado, así que te propongo un diseño corto acá mismo en vez de un SPEC completo"):

- **Prueba rápida**: "¿se puede…?", "probemos si…". Contá en 2-3 frases qué vas a probar, esperá un OK, averigualo lo más barato posible y respondé con una recomendación. Lo que armes para probar queda marcado como descartable.
- **Cambio acotado**: algo chico sobre un proyecto que ya existe y cuyo funcionamiento se puede leer en la carpeta (un botón, un campo nuevo, un texto, una página simple). Hacé las preguntas que importan, presentá un diseño corto en el chat y esperá un sí. No hace falta SPEC.md ni plan.
- **Proyecto o función grande**: un proyecto nuevo, una sección nueva, algo que cambia cómo se conectan las partes. Seguí el proceso completo de abajo.

Si dudás entre dos caminos, elegí el más completo. Si a mitad de camino aparece complejidad escondida, avisá y pasá al camino más completo; nunca al revés.

## 2. Proceso completo

Creá una tarea por cada paso y completalos en orden.

1. **Mirar el contexto.** Leé la carpeta: `CLAUDE.md`, `SPEC.md` y `PLAN.md` si existen, archivos principales, últimos commits. Si la idea abarca varias cosas independientes (una plataforma con agenda, pagos, chat y reportes), decilo enseguida y proponé dividirla en partes; se diseña primero la primera.
2. **Entender la intención.** Averiguá para qué lo quiere, para quién es y cómo se ve el éxito. Escribí en pocas líneas lo que entendiste, separando lo que dijo de lo que suponés, y pedí que te corrija.
3. **Entrevistar.** Usá la herramienta AskUserQuestion: una pregunta por vez, con opciones y **tu recomendación primero, con el porqué en una frase**, así la persona puede aceptarla con un clic. Cada pregunta se apoya en las respuestas anteriores: preguntá solo lo que ya se puede decidir. Lo que se puede averiguar mirando el proyecto o la documentación, averigualo vos; a la persona le preguntás decisiones, no datos técnicos. Cubrí: usuarios y qué hace cada uno, datos que se guardan y quién puede verlos, conexiones con otros servicios (pagos, mails, WhatsApp), cómo se ve, qué pasa cuando algo sale mal, qué queda fuera de esta versión. Si una respuesta tiene un problema o hay una forma más simple, decilo.
4. **Mostrar cuando ayuda verlo.** Si una decisión se entiende mejor viéndola (cómo se organiza una pantalla, dos estilos posibles), armá un mockup HTML simple en `docs/mockups/` y abrilo en el panel Browser. Ver `references/mockups.md`. Si nada es visual, no hace falta.
5. **Proponer 2-3 enfoques.** Con ventajas, desventajas y costo (servicios pagos, tiempo). Empezá por el que recomendás y explicá por qué. Sacá de cada enfoque todo lo que no hace falta para esta versión.
6. **Presentar el diseño por partes.** Cada parte del tamaño que necesite (de dos frases a un par de párrafos): qué hace cada tipo de usuario, pantallas, datos, conexiones, qué pasa cuando algo falla. Después de cada parte, preguntá si va bien.
7. **Escribir `SPEC.md`** en la raíz del proyecto con la plantilla de `references/spec-plantilla.md`. Los requisitos van numerados (R1, R2…) y escritos como "Cuando…, la app…", porque cada uno se va a convertir en una prueba en el paso 4. Registrá las decisiones importantes en `DECISIONES.md` (qué se decidió, por qué, qué se descartó). Si el proyecto tiene git, hacé commit.
8. **Autochequeo.** Releé el SPEC.md y corregí en el momento: partes vacías o "a definir", contradicciones, requisitos que se pueden entender de dos formas (elegí una y dejala explícita), alcance demasiado grande para un solo plan.
9. **Pedir el OK de la persona.** "Escribí el SPEC.md. Leelo y decime si querés cambiar algo antes de armar el plan." Si pide cambios, hacelos y volvé al autochequeo.

## 3. Cómo termina

- **Proyecto o función grande:** con el SPEC.md aprobado, el siguiente paso es el plan. Recomendá abrir una sesión nueva (Ctrl+N) para que el plan arranque con la cabeza limpia, y cerrá con: `Siguiente: /cdia:plan`.
- **Cambio acotado:** con el diseño aprobado, hacelo directamente y probalo; al terminar sugerí `/cdia:revisar` si tocó datos o claves.
- **Prueba rápida:** cerrá con la recomendación y, si conviene construirlo, `Siguiente: /cdia:brainstorming` como proyecto.

Un "sí" aprueba lo que se mostró en ese momento. Aprobar la idea no aprueba el SPEC que todavía no existe, y aprobar el SPEC no es permiso para construir: el paso que sigue es el plan.
