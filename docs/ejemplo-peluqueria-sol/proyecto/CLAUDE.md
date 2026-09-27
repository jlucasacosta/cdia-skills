# Peluquería Sol · Turnos

> Método CDIA · comunidad CDIA (cdia.pro)

## Qué es
Web de turnos para la Peluquería Sol. Diseño en `SPEC.md`, fases en `PLAN.md`, decisiones en `DECISIONES.md`.

## Reglas del proyecto
- Página estática: `index.html`, `estilos.css`, `app.js`. Sin frameworks ni instalaciones. Se abre con doble clic en `index.html`.
- Datos solo en localStorage, clave `peluqueria-sol.turnos`. Sin servicios externos.
- Código en GitHub (repo privado `jlucasacosta/cdia-prueba-peluqueria`); cada push a `main` se publica solo en Vercel (proyecto `cdia-prueba-peluqueria`). `.vercelignore` deja afuera los documentos internos.
- Fechas siempre en hora local (`AAAA-MM-DD`, `HH:MM`), nunca en UTC.
- Todo dato del cliente se muestra como texto (`textContent`), nunca como HTML.
- Pruebas de lógica: `node pruebas.js`.
- Commits en español, uno por fase.
