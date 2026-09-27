---
name: modo-automatico
description: Skill de la comunidad CDIA (cdia.pro). Prende o apaga el modo automático de mejorar-prompt, que mejora cada pedido internamente antes de ejecutarlo sin tener que escribir /cdia:mejorar-prompt. Se usa cuando la persona escribe /cdia:modo-automatico seguido de prender o apagar.
argument-hint: "[prender | apagar | estado]"
disable-model-invocation: true
allowed-tools: Read, Write
license: MIT
metadata:
  autor: Comunidad CDIA
  web: https://www.cdia.pro/recursos/skills/banco
---

# modo-automatico · skill de la comunidad CDIA

La persona quiere manejar el modo automático de mejorar-prompt. Lo que pidió:

<pedido>
$ARGUMENTS
</pedido>

El modo automático lo controla un archivo de texto: `~/.cdia/modo-automatico.txt` (dentro de la carpeta de usuario). Si el archivo dice `on`, está prendido; si dice `off` o no existe, está apagado. Un hook del plugin CDIA lo lee en cada mensaje.

- **prender** (o "activar", "on", "sí"): escribí `on` en `~/.cdia/modo-automatico.txt` con la herramienta Write (crea la carpeta si falta). Contá en simple qué cambia: desde el próximo mensaje, si un pedido es claro Claude lo hace directo; si le falta algo, lo completa y empieza su respuesta con una línea "Entendí (mejorar-prompt · comunidad CDIA): …". Los comandos con `/` y las respuestas cortas pasan sin cambios. Aclarale que necesita Node.js instalado.
- **apagar** (o "desactivar", "off", "no"): escribí `off` en `~/.cdia/modo-automatico.txt`. Confirmá que desde el próximo mensaje Claude vuelve a trabajar con el pedido tal cual, y que `/cdia:mejorar-prompt` sigue disponible para usarlo a mano.
- **estado**, o si el pedido está vacío: fijate si el archivo existe y dice `on`, y decí en una línea si está prendido o apagado y cómo cambiarlo.

Respondé en el idioma de la persona, en dos o tres líneas.
