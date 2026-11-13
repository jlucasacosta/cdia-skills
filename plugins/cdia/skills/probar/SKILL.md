---
name: probar
description: Método CDIA (comunidad CDIA, cdia.pro). Chequea el estado de un sistema contra su SPEC.md, usando cada requisito como lo haría un cliente, y reporta qué funciona, qué falla y qué hay de más. Se usa al terminar de construir, antes de publicar, cuando la persona pregunta si funciona o cómo está el sistema, o cuando escribe /cdia:probar.
argument-hint: "[opcional: qué probar, o la dirección online]"
---

# Probar · Método CDIA

Pedido de la persona (puede venir vacío):

<pedido>
$ARGUMENTS
</pedido>

Empezá tu primer mensaje con la línea `Método CDIA · Probar · modo recomendado: Auto o Accept edits`.

Probar es usar el sistema como un cliente y mirar el resultado, no leer el código. No arregles nada durante la prueba: primero la lista completa.

1. **Lista.** Cada requisito de "Entra" del `SPEC.md` es una prueba, con datos correctos y con el error más común de ese requisito (un campo vacío, un dato mal escrito). No sumes pruebas de cosas que el SPEC no pide.
2. **Dónde.** En la compu, con el panel Browser. Si es la versión publicada y hace falta la sesión de la persona, con Claude in Chrome; ahí no cargues pagos reales, no borres datos y no cambies configuraciones.
3. **Probar.** Cada recorrido en ancho de computadora y de celular, mirando también la consola del navegador. Si guarda o manda datos, comprobá que llegaron. Guardá una captura de lo importante en `docs/capturas/`. Si usás un script de pruebas, esperá a que termine antes de responder.
4. **De más.** Recorré lo construido y listá lo que no responde a ningún requisito: secciones, pantallas, opciones, archivos.
5. **Reporte.** Una tabla con requisito, resultado (✅ funciona · ❌ falla · ⚠️ funciona pero confunde) y qué pasó. Debajo, la lista "De más". Preguntá qué se arregla y qué se saca; cada falla sigue el proceso de `/cdia:arreglar`.

## Cierre

- Todo en ✅ y nada de más: `Siguiente: /cdia:publicar` (lo escribe la persona: publicar nunca arranca solo).
- Si no: arreglar y volver a probar solo esos recorridos.
