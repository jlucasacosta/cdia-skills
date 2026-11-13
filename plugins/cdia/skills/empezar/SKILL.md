---
name: empezar
description: Punto de entrada del Método CDIA (comunidad CDIA, cdia.pro). Mira la carpeta y el pedido, dice en qué paso está el proyecto y cuál es el próximo. Se usa al arrancar o retomar un proyecto, cuando la persona pregunta "¿qué sigo?", "¿dónde quedamos?" o "¿por dónde empiezo?", o cuando escribe /cdia:empezar.
argument-hint: "[opcional: lo que querés hacer hoy]"
---

# Empezar · Método CDIA

Lo que la persona quiere hacer (puede venir vacío):

<pedido>
$ARGUMENTS
</pedido>

Empezá tu primer mensaje con la línea `Método CDIA · Empezar`.

Esta skill mira, explica y deriva al paso que corresponde. No cambia archivos.

## 1. Mirar

Sin modificar nada: ¿la carpeta está vacía o tiene un proyecto? ¿Hay `SPEC.md`, con qué fases tildadas y qué dice "Publicado en"? ¿Qué muestran `git status` y los últimos commits?

## 2. Tablero

```
Proyecto: <nombre o "carpeta nueva">
Paso actual: <Brainstorming · Fases (N de M) · Probar · Publicar · Mantener>
Hecho: <lo terminado, en una línea>
Falta: <lo que queda, en una línea>
Atención: <cambios sin guardar, algo roto — si hay>
```

Si hay código pero no SPEC.md, explicá en simple qué hace el proyecto y proponé escribir el SPEC con lo que ya existe, sin sumarle nada.

## 3. Próximo paso

Si la persona trajo un pedido, decí en una línea cómo lo clasificás, para que pueda corregirte:

| Pedido | Camino |
|---|---|
| Un sistema nuevo, o una sección o función nueva | `/cdia:brainstorming` → `/cdia:fase` |
| Un cambio chico (un texto, un color, un botón) | `/cdia:brainstorming`, que lo resuelve en el momento sin SPEC |
| Algo no funciona | `/cdia:arreglar` |
| ¿Funciona? ¿Cómo está? | `/cdia:probar` |
| Revisar algo ya publicado | `/cdia:mantener` |

Si dudás entre dos tamaños, elegí el más chico: si aparece complejidad, se sube.

Sin pedido, el próximo paso sale del tablero: sin SPEC → `/cdia:brainstorming`; fases pendientes → `/cdia:fase`; fases terminadas → `/cdia:probar`; probado → `/cdia:publicar`; publicado → `/cdia:mantener`.

## Cierre

Una sola línea: `Siguiente: /cdia:<paso> <el pedido de la persona, si trajo uno>`, así el paso siguiente arranca sabiendo qué quiere aunque sea en una sesión nueva.
