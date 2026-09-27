# Mockups para decidir viendo · Método CDIA

Un mockup es un dibujo rápido de una pantalla, sin funcionalidad. Sirve para decidir cosas que se entienden mejor viéndolas que leyéndolas.

## Cuándo usarlo

La prueba: ¿la persona lo entendería mejor viéndolo? Usalo para cómo se organiza una pantalla, dos o tres estilos posibles o el recorrido de un usuario de pantalla en pantalla. No lo uses para decisiones de texto (qué datos se guardan, quién puede ver qué).

## Cómo armarlo

1. Un archivo HTML autocontenido en `docs/mockups/<nombre-claro>.html` (por ejemplo `reservar-opciones.html`). Si ajustás uno, guardalo con otro nombre (`reservar-opciones-v2.html`) para no perder el anterior.
2. Entre 2 y 4 opciones lado a lado, cada una con una letra grande (A, B, C) y un título corto. Contenido realista del caso de la persona (su negocio, sus servicios), no "lorem ipsum".
3. Que se vea bien en el ancho del panel y en celular.
4. Abrilo en el panel Browser de Claude Code para que la persona lo vea.
5. Preguntá con AskUserQuestion cuál prefiere, con tu recomendación primero.

## Después

Anotá en `DECISIONES.md` qué opción se eligió. Los mockups son descartables: quedan en `docs/mockups/` como referencia, no son el código de la app.
