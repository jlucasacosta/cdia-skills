# Peluquería Sol · Decisiones

> Método CDIA · 2026-09-27 · prueba automática: cada decisión es la recomendación de Claude, tomada como respuesta de la persona.

| # | Qué se decidió | Por qué | Qué se descartó |
|---|---|---|---|
| D1 | Guardar los turnos en localStorage del navegador | Pedido explícito: sin servicios externos | Base de datos en internet (Supabase). Queda para la v2 si se quiere reservar desde cualquier celular |
| D2 | Asumir uso en un solo aparato (tablet en el mostrador o demo) | localStorage no comparte datos entre aparatos | Prometer reservas remotas que no funcionarían |
| D3 | Página estática HTML + CSS + JavaScript, sin frameworks | Costo cero, se abre con doble clic y alcanza para el tamaño | React/Vite: suman instalación y complejidad sin beneficio en esta versión |
| D4 | Una sola persona atiende: no hay turnos superpuestos | Peluquería chica; es la regla más simple | Varias sillas o peluqueras |
| D5 | Servicios fijos con duración (30 a 120 min) y turnos que empiezan cada 30 min | Refleja que un color no dura lo mismo que un corte | Turnos de duración única (se pisarían los servicios largos) |
| D6 | Martes a sábado de 9:00 a 18:00, hasta 30 días adelante | Horario típico de una peluquería de barrio | Configurar horarios y feriados desde la web |
| D7 | Nombre y teléfono obligatorios (mínimo 8 números) | La dueña necesita poder avisar cambios | Email, cuenta de cliente |
| D8 | PIN fijo `1234` para ver la agenda | Evita entradas por error; es lo único posible sin servidor | Login real (necesita servidor). Queda claro que no es seguridad real |
| D9 | Solo la dueña cancela; el cliente llama al local | Evita que cualquiera borre turnos ajenos sin login | Cancelación por el cliente |
| D10 | Sin mails ni WhatsApp | Pedido explícito: sin servicios externos | Confirmaciones y recordatorios automáticos |
| D11 | Sin mockup visual | La prueba no admite respuestas; las pantallas quedan descritas en el SPEC | Mockup HTML en docs/mockups/ |
| D12 | Solo git local, sin GitHub | Pedido explícito | Repositorio remoto |
| D13 | Tres archivos (`index.html`, `estilos.css`, `app.js`) y una sola clave de localStorage `peluqueria-sol.turnos`; fechas en hora local | Simple de abrir y de revisar; la hora local evita turnos corridos de día | Un archivo por pantalla; guardar en UTC |
| D14 | Plan de 3 fases: reservar → agenda → casos difíciles y diseño | Pedido explícito (máximo 3); cada fase deja algo usable | 4-5 fases más chicas |
| D15 | El ingreso con PIN dura solo mientras la agenda está abierta; al salir o recargar lo pide de nuevo | Cumple R17 y evita que la agenda quede abierta en la tablet | Recordar el ingreso en el navegador |
