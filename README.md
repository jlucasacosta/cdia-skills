# CDIA · el plugin de la comunidad CDIA para Claude Code

Todas las skills de la comunidad **CDIA** para construir con **Claude Code**, en español y pensadas para quien no programa, en un solo plugin: **CDIA**. Cada skill nueva que suma la comunidad te llega sola.

[cdia.pro](https://www.cdia.pro) · [banco de skills](https://www.cdia.pro/recursos/skills/banco) · [guía: Cómo construir con Claude Code](https://www.cdia.pro/recursos/construir-con-claude-code.html)

## Instalar

En Claude Code (app de escritorio, pestaña Code), escribí estos dos comandos en la caja de texto, de a uno:

```
/plugin marketplace add jlucasacosta/cdia-skills
```

```
/plugin install cdia@cdia-skills
```

Si te pregunta dónde instalarlo, elegí para tu usuario. Después, para que las skills nuevas y las mejoras te lleguen solas, pegale esto a Claude:

```
Acabo de instalar el plugin CDIA de la comunidad CDIA. Quiero que
las mejoras me lleguen solas.

En mi archivo ~/.claude/settings.json, dentro de
"extraKnownMarketplaces", buscá el marketplace cdia-skills y
agregale "autoUpdate": true. Si no está, agregalo con source
github y repo jlucasacosta/cdia-skills. No borres ni cambies nada
más del archivo.

Después confirmame que quedó bien y decime qué skills trae el
plugin CDIA.
```

Abrí una sesión nueva y escribí `/cdia` para ver todas las skills. Desde la terminal también se puede: `claude plugin marketplace add jlucasacosta/cdia-skills` y `claude plugin install cdia@cdia-skills --scope user`.

## Skills

### /cdia:mejorar-prompt

Escribís tu pedido como te sale. Claude lo convierte en un buen prompt siguiendo las buenas prácticas de Anthropic para los modelos actuales, lo ejecuta y te muestra cómo quedó el prompt, para que aprendas a pedir mejor. Si el pedido se puede entender de varias formas, primero te hace entre 1 y 3 preguntas.

```
/cdia:mejorar-prompt hacé que el formulario de turnos mande un WhatsApp
```

Su respuesta empieza así:

```
Prompt mejorado · mejorar-prompt, skill de la comunidad CDIA (cdia.pro)

Cuando alguien reserva un turno en el formulario de @src/pages/reservar.astro,
mandale un WhatsApp de confirmación con el servicio, el día y la hora…

Qué agregué: dónde está el formulario, qué dice el mensaje y cómo se ve terminado.
```

### /cdia:modo-automatico

Prende o apaga la versión automática de mejorar-prompt: actúa en cada mensaje, sin escribir ningún comando. Si tu pedido es claro, Claude lo hace directo. Si le falta algo, lo completa y empieza su respuesta con `Entendí (mejorar-prompt · comunidad CDIA): …`. Los comandos que empiezan con `/` y las respuestas cortas ("sí", "dale") pasan sin cambios. Viene apagado.

```
/cdia:modo-automatico prender
```

```
/cdia:modo-automatico apagar
```

Necesita Node.js instalado. El interruptor es el archivo `~/.cdia/modo-automatico.txt` (`on` / `off`).

## Actualizaciones

Con `"autoUpdate": true`, Claude Code busca las mejoras al arrancar y las instala solo. Para actualizar a mano: `claude plugin marketplace update cdia-skills` y `claude plugin update cdia@cdia-skills`.

## Fuentes

Las reglas de mejorar-prompt salen de la guía oficial de Anthropic y de la documentación de Claude Code: [buenas-practicas.md](plugins/cdia/skills/mejorar-prompt/references/buenas-practicas.md).

## Sumá tu skill

¿Armaste una skill que le sirve a otros? Compartila con la comunidad CDIA: abrí un Pull Request con una carpeta nueva dentro de `plugins/cdia/skills/`. Cada skill dice que es de la comunidad CDIA y enlaza a cdia.pro.

## Licencia

MIT · Comunidad CDIA
