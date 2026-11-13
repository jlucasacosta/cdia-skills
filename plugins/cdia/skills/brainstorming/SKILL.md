---
name: brainstorming
description: Método CDIA (comunidad CDIA, cdia.pro). Delimita qué se construye y qué no antes de escribir código, con una entrevista corta y un SPEC.md que dice lo que entra, lo que no entra y las fases. Se usa cuando alguien quiere crear un sistema nuevo o sumarle una sección o función a uno que ya existe, o cuando escribe /cdia:brainstorming.
argument-hint: "[tu idea, como te salga]"
---

# Brainstorming · Método CDIA

Idea de la persona (puede venir vacía):

<idea>
$ARGUMENTS
</idea>

Empezá tu primer mensaje con la línea `Método CDIA · Brainstorming · modo recomendado: Plan`.

## Para qué es este paso

La persona arma un sistema chico para vendérselo a un negocio (una landing, un agente, un gestor de turnos, un CRM simple) y casi nunca sabe programar. Gana cuando entrega rápido algo que el negocio usa. Todo lo que se construya de más lo tiene que explicar, mantener y arreglar ella, sin que nadie se lo haya pagado. Por eso acá se fija el límite, qué entra y qué no, y los demás pasos construyen solo lo que quedó en "Entra".

En este paso no se escribe código ni se crean cuentas o proyectos en servicios. El modo Plan de Claude Code lo asegura, porque ahí Claude no puede cambiar archivos: en ese modo, el plan que presentás es el contenido del SPEC y, cuando la persona lo aprueba, guardás el SPEC.md y frenás. Hablá simple, con el caso de la persona, y explicá cada término técnico la primera vez que aparece.

## Según el tamaño

- **Cambio chico** sobre algo que ya existe (un texto, un color, un campo, un botón): contá en corto qué vas a tocar y qué no, esperá el sí, hacelo y mostrá que funciona. Sin SPEC.
- **Sección o función nueva** en un sistema que ya tiene SPEC.md: seguí los pasos de abajo en corto y sumá al SPEC solo los requisitos y la fase nuevos.
- **Sistema nuevo**: los pasos de abajo.

## Pasos

1. **Mirar.** Leé lo que haya en la carpeta (SPEC.md, CLAUDE.md, el código). Si el pedido junta varios sistemas independientes, decilo y delimitá solo el primero.
2. **Decir lo que entendiste.** En pocas líneas: lo que la persona pidió y, aparte, lo que estás suponiendo. Pedí que te corrija.
3. **Preguntar solo lo que cambia qué se construye.** Con AskUserQuestion, de a una, con tu recomendación primero y el porqué en una frase. La recomendación es la opción más chica que le sirve al negocio. Lo que se puede averiguar mirando el proyecto o la documentación, averigualo vos. Si el sistema le muestra contenido al público (una landing, una web), preguntá antes de escribir el SPEC qué contenido real tiene ya el negocio (textos, datos, fotos): se muestra ese, sin inventar contenido ni reservar lugar para lo que no hay. No ofrezcas secciones, pantallas ni funciones que la persona no nombró; si creés que sin algo el sistema no se puede vender, preguntalo una vez y, si no lo confirma, va a "No entra".
4. **Elegir cómo se hace.** Una sola forma, la más simple que cumple, armada con el stack de `references/stack.md`. Ese es el stack con el que se trabaja siempre: no preguntes con qué herramientas ni ofrezcas otras (Netlify, Formspree, otro proveedor), salvo que la persona pida una de forma explícita. Del stack entra solo lo que un requisito exige: cada servicio suma cuentas, claves y cosas que pueden fallar. Preguntá qué tiene ya armado el negocio en GoHighLevel (formularios, calendario, avisos, WhatsApp): lo que existe se conecta, no se vuelve a construir.
5. **Escribir `SPEC.md`** en la raíz con la plantilla de `references/spec-plantilla.md`. Tiene que leerse en una o dos pantallas.
6. **Pedir el OK.** Mostrá "Entra", "No entra" y las fases y preguntá si es eso. Un sí aprueba ese SPEC y nada más: anotá la fecha de aprobación en su encabezado.

Si la carpeta no tiene git, inicializalo con un `.gitignore` que deje afuera `.env*` y `node_modules`, y creá un `CLAUDE.md` de pocas líneas: qué es el proyecto y para quién, que `SPEC.md` dice qué entra y qué no, y que las claves van en `.env` y nunca en el chat. Hacé commit del SPEC.

## Cierre

Con el SPEC aprobado, recomendá abrir una sesión nueva (Ctrl+N) para construir con la cabeza limpia y cerrá con: `Siguiente: /cdia:fase`
