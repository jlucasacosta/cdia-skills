# cdia-skills · skills de la comunidad CDIA

Skills y plugins para construir con **Claude Code**, en español, pensados para quien no programa. Los mantiene la comunidad **CDIA**: [cdia.pro](https://www.cdia.pro) · [banco de skills](https://www.cdia.pro/recursos/skills/banco).

## mejorar-prompt

Escribís tu pedido como te sale. Claude lo convierte en un buen prompt, siguiendo las buenas prácticas de Anthropic para los modelos actuales, te lo muestra y lo ejecuta en el mismo turno. Si el pedido se puede entender de varias formas, antes te hace entre 1 y 3 preguntas.

```
/mejorar-prompt hacé que el formulario de turnos mande un WhatsApp
```

Claude responde con:

```
Prompt mejorado · mejorar-prompt, skill de la comunidad CDIA (cdia.pro)

Cuando alguien reserva un turno en el formulario de @src/components/Reserva.astro,
mandale un WhatsApp de confirmación con el servicio, el día y la hora…

Qué agregué: dónde está el formulario, qué dice el mensaje y cómo se ve terminado.
```

…y después lo hace.

### Instalar

Pegale esto a Claude Code:

```
Instalá la skill mejorar-prompt de la comunidad CDIA para todos mis proyectos:
npx skills add jlucasacosta/cdia-skills -s mejorar-prompt -g -a claude-code -y
Cuando termine, confirmame que quedó instalada.
```

Después se usa con `/mejorar-prompt` seguido de tu pedido.

## mejorar-prompt-auto (opcional)

Es la versión automática: se instala una vez y actúa en cada mensaje, sin escribir `/mejorar-prompt`. Si tu pedido es claro, Claude lo hace directo. Si le falta algo, lo completa y empieza su respuesta con una línea que dice `Entendí (mejorar-prompt · comunidad CDIA): …`. Los comandos que empiezan con `/` y las respuestas cortas ("sí", "dale") pasan sin cambios.

Escribí estos dos comandos en Claude Code, de a uno:

```
/plugin marketplace add jlucasacosta/cdia-skills
```

```
/plugin install mejorar-prompt-auto@cdia-skills
```

Necesita Node.js instalado. Para apagarlo: **+ → Plugins → Manage plugins**, o `/plugin disable mejorar-prompt-auto@cdia-skills`.

## Fuentes

Las reglas salen de la guía oficial de Anthropic y de la documentación de Claude Code: [skills/mejorar-prompt/references/buenas-practicas.md](skills/mejorar-prompt/references/buenas-practicas.md).

Para aprender el método completo, está la guía de CDIA: [Cómo construir con Claude Code](https://www.cdia.pro/recursos/construir-con-claude-code.html).

## Licencia

MIT · Comunidad CDIA
