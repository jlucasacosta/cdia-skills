---
name: revisar
description: Paso 5 del Método CDIA (comunidad CDIA, cdia.pro). Revisa lo construido con ojos nuevos: un revisor con la cabeza limpia compara el trabajo contra el SPEC.md y el PLAN.md y hace el chequeo de seguridad (claves, RLS, permisos de tablas, variables). Se usa antes de publicar, después de terminar fases, cuando la persona pide revisar o controlar la seguridad, o cuando escribe /cdia:revisar.
argument-hint: "[opcional: qué revisar]"
---

# Revisar · Método CDIA

Pedido de la persona (puede venir vacío):

<pedido>
$ARGUMENTS
</pedido>

Empezá tu primer mensaje con la línea `Método CDIA · Paso 5: Revisar`.

## Por qué este paso

Quien escribe algo no ve sus propios errores. Un revisor que no participó del trabajo lo lee sin apego y encuentra lo que se escapó: requisitos que faltan, cosas de más y, sobre todo, datos o claves expuestos antes de que la app salga a internet.

## 1. Preparar

- Identificá qué se revisa: por defecto, todo lo hecho desde la última revisión o desde el inicio del plan (`git log`, fases tildadas en PLAN.md). Si no hay git, lo que está en la carpeta.
- Juntá las rutas: `SPEC.md`, `PLAN.md`, `DECISIONES.md`, las decisiones tomadas en el camino y qué commits o archivos cambiaron.

## 2. Mandar al revisor

Usá un subagente (herramienta Agent, tipo general-purpose, con el modelo más capaz disponible) con las instrucciones de `references/revisor.md`, pasándole las rutas del paso 1 y el checklist de `references/seguridad.md`. El revisor solo lee: no cambia archivos.

Si no hay herramienta de subagentes, hacé la revisión vos siguiendo `references/revisor.md` como una pasada aparte, y avisale a la persona que una revisión hecha por quien escribió el código es más débil.

## 3. Ordenar lo que encontró

Las etiquetas del revisor son una sugerencia; el criterio es qué le pasaría a una persona real si esto sale así:

- **Crítico**: datos o claves expuestos, algo que se rompe en el uso normal, se pierde información. Se arregla antes de publicar.
- **Importante**: un requisito del SPEC que no se cumple o un caso común que falla. Se arregla antes de publicar.
- **Menor**: detalles que no afectan el uso. Van a "Pendientes" del PLAN.md; la persona decide.

No persigas cada sugerencia: arreglar todo lo menor complica el proyecto de más. Lo que decidas no arreglar, anotalo con el porqué.

## 4. Mostrar y arreglar

- Mostrale a la persona el resultado en simple, de lo más grave a lo menos grave, cada punto con qué riesgo tiene explicado para alguien que no programa.
- Preguntá qué se arregla (AskUserQuestion; recomendación: críticos e importantes).
- Arreglá cada uno buscando la causa, comprobá que quedó resuelto (en el panel Browser, en la base de datos o con los Advisors de Supabase) y hacé commit.

## Cierre

Veredicto en una línea: **Listo para publicar** o **Todavía no: falta <x>**.

- Listo: `Siguiente: /cdia:publicar` (lo tenés que escribir vos: publicar nunca arranca solo).
- Falta: arreglar y volver a `/cdia:revisar`.
