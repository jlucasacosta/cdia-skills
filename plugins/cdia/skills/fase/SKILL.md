---
name: fase
description: Paso 3 del Método CDIA (comunidad CDIA, cdia.pro). Construye solo la próxima fase sin tildar del PLAN.md, la prueba con evidencia, la guarda en GitHub y frena. Se usa cuando hay un PLAN.md con fases pendientes y la persona quiere seguir construyendo ("seguí", "hacé la próxima fase", "continuemos"), o cuando escribe /cdia:fase.
argument-hint: "[opcional: número de fase]"
---

# Implementar una fase · Método CDIA

Pedido de la persona (puede venir vacío):

<pedido>
$ARGUMENTS
</pedido>

Empezá tu primer mensaje con la línea `Método CDIA · Paso 3: Fase <número> · <nombre>`.

Quien usa el Método CDIA suele no saber programar: contale en simple qué estás haciendo y por qué, sin jerga.

## Por qué así

Una fase por sesión porque la ventana de contexto se llena y, llena, se trabaja peor. Cada fase termina en un commit: un punto de guardado al que siempre se puede volver. Y ninguna fase se da por terminada sin evidencia de que funciona.

## 1. Tomar la fase

- Leé `CLAUDE.md`, `SPEC.md`, `PLAN.md` y `DECISIONES.md`. Si no hay PLAN.md, decilo y proponé `/cdia:plan`.
- La fase es la primera sin tildar, salvo que la persona pida otra. Si depende de una fase sin terminar, avisá.
- Si el pedido de la persona es algo que no está en el plan, no lo mezcles con la fase: proponé anotarlo en "Pendientes" o, si es grande, pasarlo por `/cdia:brainstorming`.
- Revisá `git status`. Si hay cambios sin guardar de antes, preguntá qué hacer con ellos antes de empezar.
- Contá en tres líneas qué vas a construir y cómo se va a ver terminado.
- Si la fase tiene pasos 🙋 (algo que tiene que hacer la persona), pedíselos primero, de a uno, con instrucciones exactas de dónde hacer clic o qué copiar. Las claves se pegan en el archivo `.env` o en el panel del servicio; en el chat no.

## 2. Construir

- Hacé solo lo que dice la fase, siguiendo las decisiones del plan y del SPEC. Si el plan y el SPEC chocan, manda el SPEC.
- Si encontrás algo que habría que cambiar fuera de esta fase, anotalo en "Pendientes" del PLAN.md y seguí.
- Si el plan tiene un error o falta una decisión chica, decidí vos lo más simple que cumpla el SPEC, seguí, y anotalo en "Decisiones tomadas en el camino" con el formato: `Fase N · <qué decidiste> — <por qué> — <qué cuesta si estaba mal>`.
- Frená y preguntá solo ante: algo que borra datos o no se puede deshacer, algo de seguridad (claves, permisos, datos de clientes), algo que cuesta plata, o un plan tan roto que cualquier camino sería adivinar.
- Si algo falla y no es obvio por qué, seguí el proceso de `/cdia:arreglar`: causa de fondo antes de tocar nada.
- Tablas nuevas en Supabase: siempre con RLS, políticas que tengan sentido y los permisos (grants) que necesita la web.

## 3. Comprobar con evidencia

La fase no está terminada hasta que tengas pruebas de que cumple su "cómo se ve terminada":

- Si tiene pantalla, abrila en el panel Browser y hacé cada recorrido de la fase como lo haría un usuario, en ancho de computadora y de celular. Sacá capturas.
- Si guarda datos, comprobá que el dato quedó guardado donde debía.
- Si el proyecto tiene tests, corrélos y leé el resultado.
- "Debería andar" no es evidencia. Si algo no se pudo comprobar, decilo como pendiente, no como hecho.

## 4. Guardar y cerrar

1. Tildá la fase en PLAN.md y actualizá el bloque **Estado** (fase actual, avance, fecha).
2. Commit con un mensaje claro en español y push, si el proyecto tiene GitHub.
3. Reportá con uno de estos estados:
   - **HECHO** · con la evidencia (capturas, qué probaste).
   - **HECHO CON DUDAS** · funciona, pero algo te preocupa; decí qué.
   - **NECESITO ALGO** · falta una decisión o un dato de la persona.
   - **BLOQUEADO** · no se puede seguir; explicá por qué y qué opciones hay.
4. Si tomaste decisiones en el camino, listalas en "Decisiones que tomé", cada una con qué cuesta si estaba mal. Si hay pendientes nuevos, nombralos.
5. Frená. Recomendá sesión nueva (Ctrl+N) para la próxima fase y cerrá con el próximo paso:
   - quedan fases: `Siguiente: /cdia:fase`
   - era la última: `Siguiente: /cdia:probar` (prueba completa) y después `/cdia:revisar`.
