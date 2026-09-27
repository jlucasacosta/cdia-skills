---
name: plan
description: Paso 2 del Método CDIA (comunidad CDIA, cdia.pro). Convierte un SPEC.md aprobado en un PLAN.md por fases chicas, cada una con cómo se ve terminada. Se usa cuando ya hay un SPEC.md aprobado y todavía no hay plan, cuando la persona pide planificar cómo construirlo, o cuando escribe /cdia:plan.
argument-hint: "[opcional: qué parte planificar]"
---

# Plan por fases · Método CDIA

Pedido adicional de la persona (puede venir vacío):

<pedido>
$ARGUMENTS
</pedido>

Empezá tu primer mensaje con la línea `Método CDIA · Paso 2: Plan`.

Quien usa el Método CDIA suele no saber programar: explicá cada decisión técnica en simple, con el caso de la persona.

## Por qué este paso

Un plan divide el trabajo en pedazos chicos que se construyen, se prueban y se guardan por separado. Un bloque grande no se puede probar hasta el final y, si falla, nadie sabe dónde. En este paso no se escribe código de la app: se decide el orden y qué significa "terminado" en cada parte.

## Antes de empezar

- Leé `SPEC.md`, `CLAUDE.md` y `DECISIONES.md`. Si no hay SPEC.md aprobado, decilo y proponé `/cdia:brainstorming`.
- Si el SPEC cubre varias partes independientes que deberían ser proyectos separados, proponé planificar solo la primera.
- Leé el proyecto: si ya tiene código, el plan sigue lo que ya existe.

## 1. Decisiones técnicas

Si el SPEC no las resuelve, decidí con la persona lo necesario para construir: con qué se hace la web (por ejemplo Next.js o Astro), dónde se publica (Vercel, Railway), dónde se guardan los datos y cómo inician sesión los usuarios (Supabase), qué servicios pagos hacen falta. Una pregunta por vez con AskUserQuestion, **tu recomendación primero**, cada opción explicada en una frase con lo que implica para la persona (costo, dificultad, qué se puede hacer después). Lo que sea técnico y no cambie nada para la persona, decidilo vos y anotalo. Registrá cada decisión en `DECISIONES.md`.

## 2. Armar las fases

Guardá `PLAN.md` en la raíz con la plantilla de `references/plan-plantilla.md`. Criterios:

- **Cada fase entra en una sesión** y termina en algo que la persona puede ver o usar. Las tareas de configuración (instalar, crear la base de datos, variables) van dentro de la fase que las necesita, no en una fase aparte.
- **Primero algo que funcione de punta a punta**, aunque sea simple (una pantalla que guarda y muestra un dato real), después lo demás y al final lo lindo. Así cada fase se apoya en algo que ya anda.
- **Cada fase dice qué requisitos del SPEC cumple** (R1, R3…) y **cómo se ve terminada**: los recorridos concretos que la persona va a poder hacer. Esto es lo que después prueba /cdia:probar.
- **Dependencias**: si una fase necesita otra, decilo ("necesita la fase 2").
- **Lo que tiene que hacer la persona a mano** (crear una cuenta, pegar una clave, comprar un dominio) va marcado con 🙋 en la fase que lo necesita, con el momento exacto.
- **Seguridad desde el diseño**: en la fase que crea tablas, anotá que llevan RLS, permisos (grants) y qué claves son públicas o secretas.
- **Decisiones, no código**: el plan dice qué archivos y pantallas se crean, qué nombres, qué datos y qué valores del SPEC usar; no escribe el código. Si el plan queda más largo que el SPEC, está escribiendo el programa en vez de planificarlo.

## 3. Autochequeo

Releé el SPEC y el plan juntos y corregí en el momento:

1. **Cobertura**: cada requisito R del SPEC aparece en alguna fase. Si falta uno, agregalo.
2. **Tamaño**: ninguna fase es demasiado grande para una sesión. Si lo es, dividila.
3. **Terminado verificable**: cada "cómo se ve terminada" se puede comprobar usando la app, no leyendo código.
4. **Nada vacío**: sin "a definir", "manejar errores" o "agregar validaciones" sin decir cuáles.
5. **Lo que puede salir mal**: en la sección "Ojo con" anotá los 3-5 casos que el SPEC no menciona pero le pueden pasar a un usuario real (dato vacío, doble clic, celular sin conexión, dos personas a la vez) y en qué fase se cubren.

## 4. Cierre

- Mostrá un resumen: cuántas fases, qué se ve al final de cada una y qué va a tener que hacer la persona a mano.
- Ofrecé una segunda opinión: "¿Querés que un revisor con la cabeza limpia lea el plan contra el SPEC antes de empezar?". Si dice que sí, usá un subagente que lea SPEC.md y PLAN.md y reporte solo faltantes, fases demasiado grandes y riesgos de seguridad; aplicá lo que corresponda.
- Pedí el OK: "¿El plan refleja lo que querés?".
- Con el OK, si el proyecto tiene git, hacé commit del PLAN.md. Recomendá sesión nueva por fase y cerrá con: `Siguiente: /cdia:fase` (si todavía no existe la base del proyecto, `/cdia:preparar` primero).
