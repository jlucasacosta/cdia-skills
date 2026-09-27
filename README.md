# cdia-skills · skills de la comunidad CDIA

Skills y plugins para construir con **Claude Code**, en español, pensados para quien no programa. Los mantiene la comunidad **CDIA**: [cdia.pro](https://www.cdia.pro) · [banco de skills](https://www.cdia.pro/recursos/skills/banco).

Se instalan como plugin: cada mejora que suma la comunidad te llega sola.

## Instalar

Pegale esto a Claude Code (app de escritorio, pestaña Code):

```
Instalá el plugin cdia de la comunidad CDIA para todos mis proyectos:
1. Agregá el marketplace con: claude plugin marketplace add jlucasacosta/cdia-skills
2. Instalá el plugin con: claude plugin install cdia@cdia-skills --scope user
3. En mi ~/.claude/settings.json agregá, sin borrar nada de lo que ya tiene,
   el marketplace cdia-skills dentro de "extraKnownMarketplaces" con source
   github, repo jlucasacosta/cdia-skills y "autoUpdate": true, para que las
   mejoras me lleguen solas.
Cuando termine, confirmame que quedó instalado y decime cómo se usa.
```

Después, abrí una sesión nueva para que aparezca.

## /cdia:mejorar-prompt

Escribís tu pedido como te sale. Claude lo convierte en un buen prompt siguiendo las buenas prácticas de Anthropic para los modelos actuales, lo ejecuta y al final te muestra cómo quedó el prompt, para que aprendas a pedir mejor. Si el pedido se puede entender de varias formas, primero te hace entre 1 y 3 preguntas.

```
/cdia:mejorar-prompt hacé que el formulario de turnos mande un WhatsApp
```

Su respuesta empieza así:

```
Prompt mejorado · mejorar-prompt, skill de la comunidad CDIA (cdia.pro)

Cuando alguien reserva un turno en el formulario de @src/components/Reserva.astro,
mandale un WhatsApp de confirmación con el servicio, el día y la hora…

Qué agregué: dónde está el formulario, qué dice el mensaje y cómo se ve terminado.
```

## mejorar-prompt-auto (opcional)

Es la versión automática: actúa en cada mensaje, sin escribir ningún comando. Si tu pedido es claro, Claude lo hace directo. Si le falta algo, lo completa y empieza su respuesta con `Entendí (mejorar-prompt · comunidad CDIA): …`. Los comandos que empiezan con `/` y las respuestas cortas ("sí", "dale") pasan sin cambios.

Con el marketplace ya agregado:

```
Instalá el plugin mejorar-prompt-auto de la comunidad CDIA:
claude plugin install mejorar-prompt-auto@cdia-skills --scope user
```

Necesita Node.js instalado. Se apaga desde **+ → Plugins → Manage plugins**.

## Actualizaciones

Con `"autoUpdate": true`, Claude Code busca las mejoras al arrancar y las instala solo. Para actualizar a mano: `claude plugin marketplace update cdia-skills`.

## Fuentes

Las reglas salen de la guía oficial de Anthropic y de la documentación de Claude Code: [buenas-practicas.md](plugins/cdia/skills/mejorar-prompt/references/buenas-practicas.md).

El método completo está en la guía de CDIA: [Cómo construir con Claude Code](https://www.cdia.pro/recursos/construir-con-claude-code.html).

## Sumá tu skill

¿Armaste una skill que le sirve a otros? Compartila con la comunidad CDIA: abrí un Pull Request en este repo con una carpeta nueva dentro de `plugins/cdia/skills/`.

## Licencia

MIT · Comunidad CDIA
