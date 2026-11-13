# Barbería Don Mateo · SPEC

> Método CDIA · comunidad CDIA (cdia.pro) · aprobado el 2026-11-13

## Objetivo
Una web de una sola página para Barbería Don Mateo que muestra los servicios con precios y deja que los clientes agenden turno en el calendario que el negocio ya tiene en GoHighLevel.

## Entra
Solo esto se construye. Cada punto se prueba al final.

- **R1** · Cuando alguien abre la web, ve el nombre "Barbería Don Mateo" y un botón "Agendar turno", en negro y dorado.
- **R2** · La web muestra la lista de servicios, cada uno con su nombre y su precio, con los datos que pase el negocio.
- **R3** · Al tocar "Agendar turno", el cliente llega al calendario de GoHighLevel del negocio y elige día y hora ahí.
- **R4** · El link del calendario está en un solo lugar del proyecto, para cambiarlo sin tocar el resto.
- **R5** · La web muestra dirección (Constituyente 1840), horarios (martes a sábado de 10 a 20), un botón de WhatsApp (098 765 432) y un enlace a Instagram (@barberiadonmateo).
- **R6** · La web se ve bien en el celular y en la compu, sin fotos ni logo.

## No entra
Se dejó afuera a propósito. No se construye aunque parezca fácil o útil.

- Fotos, galería y logo (el negocio no los tiene todavía).
- Un sistema de turnos propio: los turnos viven en el calendario de GoHighLevel.
- Avisos o recordatorios de turno: los manda GoHighLevel.
- Pagos online, login de clientes, panel de administración.
- Mapa, reseñas, blog, secciones extra ("quiénes somos", equipo, etc.).
- Varios idiomas y estadísticas.

## Cómo se hace
- Una página estática (HTML y CSS, sin base de datos ni servidor), porque no hay nada que guardar: es lo más simple que alcanza. Stack usado: GitHub y Vercel, nada más.
- El botón "Agendar turno" lleva al calendario que el negocio ya tiene en GoHighLevel; no se reconstruye nada de turnos.
- 🙋 Pasar la lista de servicios con sus precios (Fase 1, antes de construir; sin esa lista no se inventa ninguno).
- 🙋 Pasar el link del calendario de GoHighLevel cuando lo tengas. Mientras tanto queda un link de prueba, fácil de cambiar (Fase 1).
- Archivos: `index.html` (contenido) y `styles.css` (colores y diseño). El link del calendario es el `href` del botón "Agendar turno", marcado con un comentario en `index.html`. Hoy es un link de prueba (`https://example.com/calendario-de-prueba`).
- Decisión chica: el WhatsApp apunta a `wa.me/59898765432` (se asumió Uruguay, +598, con el 0 inicial quitado) y Instagram a `instagram.com/barberiadonmateo`.
- Publicado en: todavía no

## Fases
- [x] **Fase 1 · Landing con turnos** · cumple R1 a R6 · terminada cuando en la compu se ve la página en negro y dorado con servicios, datos de contacto y el botón "Agendar turno" abriendo el link configurado.

## Ideas para después
(Lo que aparezca en el camino y no esté en "Entra". Se anota acá y no se construye.)
- Mostrar la duración de cada servicio (30, 30, 45 y 30 minutos). El negocio la pasó, pero R2 pide solo nombre y precio.
