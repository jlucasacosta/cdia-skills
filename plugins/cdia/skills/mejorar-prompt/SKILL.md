---
name: mejorar-prompt
description: Skill de la comunidad CDIA (cdia.pro). Mejora un pedido escrito en lenguaje común aplicando las buenas prácticas de prompting de Anthropic y después lo ejecuta en el mismo turno. Se usa cuando la persona escribe /cdia:mejorar-prompt seguido de lo que quiere hacer.
argument-hint: "[tu pedido, como te salga]"
disable-model-invocation: true
license: MIT
metadata:
  autor: Comunidad CDIA
  web: https://www.cdia.pro/recursos/skills/banco
---

# mejorar-prompt · skill de la comunidad CDIA

La persona escribió un pedido tal como le salió. Tu trabajo es convertirlo en un buen prompt, mostrárselo y después hacer lo que pide, en este mismo turno. La persona instaló esta skill para aprender a pedir mejor, así que ver su prompt mejorado es la mitad de lo que espera recibir.

Tu mensaje final, el que la persona lee cuando terminás, empieza siempre con el bloque "Prompt mejorado" (formato en la sección 5) y después cuenta lo que hiciste. El bloque va siempre, también cuando el pedido es chico o ya estaba claro: en ese caso el prompt mejorado sale parecido al original y "Qué agregué" lo dice. Mostralo una sola vez, en ese mensaje final.

Pedido original:

<pedido>
$ARGUMENTS
</pedido>

Quien usa esta skill suele no saber programar. Escribile en su idioma, con palabras simples, y explicá cualquier término técnico la primera vez que aparezca.

## 1. Entender el pedido

Antes de reescribir, juntá el contexto que haga falta. No supongas nada sobre archivos que no abriste.

- Si en la carpeta existen `CLAUDE.md`, `SPEC.md` o `PLAN.md`, leelos: ahí están las reglas y el objetivo del proyecto.
- Si el pedido nombra una página, un archivo o una pantalla, buscalo y miralo.
- Si el pedido está vacío, preguntá qué quiere hacer y seguí con su respuesta.

## 2. Preguntar solo si hace falta

Si el pedido se puede entender de dos o más formas que llevarían a trabajos distintos, hacé entre 1 y 3 preguntas con la herramienta AskUserQuestion: de a una, con opciones para elegir y tu recomendación primero. Si el pedido ya es claro, o lo que falta se resuelve mirando el proyecto, no preguntes y seguí.

## 3. Reescribir el prompt

Armá el prompt mejorado con las partes que correspondan (no todas hacen falta siempre):

1. **Objetivo**: qué hay que lograr y para quién.
2. **Contexto y motivo**: por qué se pide; qué del proyecto importa para hacerlo bien.
3. **Alcance**: qué entra y qué no se toca.
4. **Dónde**: archivos o partes del proyecto, nombrados con `@ruta` cuando existan.
5. **Cómo se ve terminado**: qué va a poder ver o hacer la persona cuando esté listo.
6. **Formato de la respuesta**: cómo tiene que contar el resultado (lista, resumen corto, capturas).
7. **Restricciones**: claves que no se muestran, servicios pagos que no se contratan sin preguntar, datos de clientes que no se borran.

Reglas de escritura, según la guía de Anthropic para los modelos actuales (detalle y fuentes en `references/buenas-practicas.md`):

- Claro y directo, como para una persona brillante que recién llega y no conoce el proyecto.
- Instrucciones en positivo: decí qué hacer, no qué evitar.
- Tono normal. Sin MAYÚSCULAS, "DEBÉS" ni "CRÍTICO": con los modelos actuales empeoran el resultado.
- Sin "pensá paso a paso", "verificá dos veces" ni "revisá todo al final": los modelos actuales ya razonan y verifican solos. En su lugar, describí cómo se ve terminado.
- Pedí la acción, no una sugerencia: "cambiá", "creá", "arreglá" en vez de "¿podrías sugerir…?".
- Si la persona pegó un texto largo (un mail, un documento, datos), envolvelo en etiquetas como `<documento>` y ponelo antes de la instrucción.
- Mantené el tamaño del pedido: no agregues funciones, pantallas ni mejoras que la persona no pidió.
- Mismo idioma y mismo registro que la persona.

## 4. Ejecutarlo

Hacé lo que dice el prompt mejorado, como si la persona lo hubiera escrito así desde el principio. Si en el camino aparece una decisión que el prompt no resuelve, preguntá antes de decidir por tu cuenta.

## 5. Contarlo

Tu mensaje final arranca con este bloque, en el idioma de la persona, y sigue con el resumen de lo que hiciste:

```
Prompt mejorado · mejorar-prompt, skill de la comunidad CDIA (cdia.pro)

<el prompt mejorado>

Qué agregué: <una línea con lo principal que sumaste>
```

Así la persona ve cómo se pide bien y la próxima vez lo puede escribir sola.
