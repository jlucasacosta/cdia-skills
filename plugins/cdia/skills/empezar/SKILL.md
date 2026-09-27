---
name: empezar
description: Punto de entrada del Método CDIA (comunidad CDIA, cdia.pro). Mira la carpeta y el pedido, dice en qué paso está el proyecto y cuál es el próximo, y elige cuánto proceso hace falta según el tamaño del pedido. Se usa al arrancar o retomar un proyecto, cuando la persona pregunta "¿qué sigo?", "¿dónde quedamos?" o "¿por dónde empiezo?", o cuando escribe /cdia:empezar.
argument-hint: "[opcional: lo que querés hacer hoy]"
---

# Empezar · Método CDIA

Lo que la persona quiere hacer (puede venir vacío):

<pedido>
$ARGUMENTS
</pedido>

Empezá tu primer mensaje con la línea `Método CDIA · Empezar`.

Esta skill no construye nada: mira, explica y deriva al paso que corresponde. No cambies archivos.

## 1. Mirar el proyecto

Revisá, sin modificar nada:

- ¿La carpeta está vacía o tiene un proyecto? ¿Hay git y repositorio en GitHub (`git remote -v`)?
- ¿Existen `CLAUDE.md`, `SPEC.md`, `PLAN.md`, `DECISIONES.md`?
- En PLAN.md: fases tildadas y sin tildar, bloque **Estado**, "Pendientes".
- `git status` y los últimos commits: ¿hay cambios sin guardar? ¿cuándo fue el último trabajo?
- ¿Está publicado? (bloque Estado del PLAN.md, `vercel.json`, `.vercel/`, `railway.json`, variables en `.env.example`).

## 2. Mostrar el tablero

Un resumen corto y claro:

```
Proyecto: <nombre o "carpeta nueva">
Paso actual: <0 Preparar · 1 Brainstorming · 2 Plan · 3 Fases (N de M) · 4 Probar · 5 Revisar · 6 Publicar · 7 Mantener>
Hecho: <lo terminado, en una línea>
Falta: <lo que queda, en una línea>
Atención: <cambios sin guardar, pendientes, algo roto — si hay>
```

Si el proyecto no usa el Método CDIA (tiene código pero no SPEC ni PLAN), explicá qué hace el proyecto en simple (qué es, qué partes tiene, dónde se publica) y proponé armar el SPEC a partir de lo que ya existe.

## 3. Elegir el camino

Si la persona trajo un pedido, clasificalo y decilo en una línea para que pueda corregirte:

| Tamaño | Ejemplos | Camino |
|---|---|---|
| **Cambio chico** | un texto, un color, un botón, arreglar algo puntual | Hacerlo directo con un buen pedido (`/cdia:mejorar-prompt`), probarlo y guardarlo. Si es un error: `/cdia:arreglar`. |
| **Función nueva** | una sección, un formulario que guarda datos, una conexión con otro servicio | `/cdia:brainstorming` (diseño corto o SPEC según lo que toque) → `/cdia:plan` → `/cdia:fase` |
| **Proyecto nuevo** | una web o app desde cero | `/cdia:preparar` → `/cdia:brainstorming` → `/cdia:plan` → `/cdia:fase` |

Si dudás entre dos, elegí el más completo.

Si no trajo pedido, el próximo paso sale del tablero: carpeta vacía → `/cdia:preparar`; sin SPEC → `/cdia:brainstorming`; SPEC sin PLAN → `/cdia:plan`; fases pendientes → `/cdia:fase`; fases terminadas sin probar → `/cdia:probar`; probado sin revisar → `/cdia:revisar`; revisado → `/cdia:publicar`; publicado → `/cdia:mantener`.

## 4. Cierre

Terminá con una sola línea: `Siguiente: /cdia:<paso>` y, si ayuda, una frase de por qué. Si la persona prefiere, podés arrancar ese paso en esta misma sesión.
