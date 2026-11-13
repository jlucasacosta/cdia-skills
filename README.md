# CDIA · el plugin de la comunidad CDIA para Claude Code

El **Método CDIA** para armar sistemas chicos con **Claude Code** y vendérselos a un negocio, en español y pensado para quien no programa. La regla que manda: se construye lo justo y necesario para vender, nunca más de lo que se delimitó. Todas las skills de la comunidad **CDIA** en un solo plugin que se actualiza solo.

[cdia.pro](https://www.cdia.pro) · [banco de skills](https://www.cdia.pro/recursos/skills/banco) · [guía: Cómo construir con Claude Code](https://www.cdia.pro/recursos/construir-con-claude-code.html)

## El Método CDIA

| Comando | Paso | Qué hace |
|---|---|---|
| `/cdia:empezar` | Entrada | Mira tu proyecto, te dice en qué paso estás y cuál sigue. |
| `/cdia:brainstorming` | 1 | Delimita: te hace las preguntas que cambian qué se construye y escribe el `SPEC.md` con lo que entra, lo que no entra y las fases. |
| `/cdia:fase` | 2 | Construye solo la próxima fase, comprueba que funciona, la guarda y frena. |
| `/cdia:probar` | 3 | Chequea el sistema como un cliente, requisito por requisito, y te dice qué funciona, qué falla y qué hay de más. |
| `/cdia:publicar` | 4 | Chequeo de seguridad y publicación en GitHub, Vercel, Supabase y Railway. Solo corre cuando lo escribís vos. |
| `/cdia:mantener` | 5 | Control de salud del sistema publicado, sin tocar nada. |
| `/cdia:arreglar` | — | Encuentra la causa de un error antes de tocar nada y lo arregla con el cambio más chico y con prueba. |
| `/cdia:no-entendi` | — | Te vuelve a explicar lo último en simple, con una analogía. |
| `/cdia:mejorar-prompt` | — | Para aprender a pedir: mejora tu pedido con las buenas prácticas de Anthropic, lo ejecuta y te muestra cómo quedó. |

No hace falta acordarse de todos: con decir "quiero armar una app de turnos" o "¿qué sigo?", Claude usa el paso que corresponde y te avisa con una línea `Método CDIA · <paso>`. Cada paso termina diciéndote el siguiente. Además, al abrir una sesión en un proyecto con `SPEC.md`, Claude ya sabe en qué fase estás.

El límite se fija en el brainstorming: lo que queda en "Entra" se construye, lo que queda en "No entra" no, y lo que aparece en el camino se anota en "Ideas para después" sin construirlo.

El stack es siempre el mismo y el método lo elige sin preguntar: GitHub, Vercel, Supabase, Railway (lo que corre 24/7), GoHighLevel (conectado por webhooks), OpenAI o el SDK de Anthropic para agentes y mensajes, y Hostinger para los dominios, cada uno con su MCP o su CLI. De esa lista se usa solo lo que el sistema pedido necesita. Si querés otra herramienta, pedila de forma explícita.

**Ejemplo:** [Barbería Don Mateo](docs/ejemplo-barberia-don-mateo/): una web con los servicios y el botón para agendar turno, paso por paso, con el SPEC, el código y las capturas.

Los archivos que deja en tu proyecto: `SPEC.md` (qué entra, qué no, cómo se hace y las fases con su estado) y `CLAUDE.md` (pocas líneas con las reglas). Los proyectos empezados con la versión anterior siguen funcionando: `/cdia:fase` lee las fases del `PLAN.md`.

### Qué modo de Claude Code usar en cada paso

El modo se elige en el selector que está debajo de la caja de texto (Ctrl+Shift+M). Cada paso te recuerda el suyo en su primera línea.

| Paso | Modo | Por qué |
|---|---|---|
| `/cdia:brainstorming` | **Plan** | Claude pregunta y propone sin poder tocar archivos. Cuando aprobás el plan, guarda el SPEC.md y frena. |
| `/cdia:fase`, `/cdia:probar`, `/cdia:arreglar` | **Auto**, o **Accept edits** si Auto no te aparece | Claude edita y comprueba sin pedirte permiso por cada archivo. |
| `/cdia:publicar` | **Manual** | Claude te pide permiso antes de cada comando que sale de tu compu. |
| `/cdia:mantener` | **Plan** | Solo mira, no cambia nada. |

Dejá el esfuerzo (effort) en medio: en alto o más, Claude tiende a sumar cosas que nadie pidió.

## Qué escribir según lo que te pasa

| Si te pasa esto | Escribís | Qué hace |
|---|---|---|
| Arrancás un sistema de cero | `/cdia:brainstorming una landing para un estudio de pilates con un formulario para pedir una clase de prueba` | Te pregunta lo justo, escribe el SPEC.md con lo que entra y lo que no, y después construís con `/cdia:fase`. |
| Querés sumarle una sección o función | `/cdia:brainstorming una sección con las instructoras` | Suma al SPEC solo el requisito y la fase nuevos; después `/cdia:fase`. |
| Un cambio chico | `/cdia:brainstorming cambiá el horario de cierre a las 19:00` | Te dice qué va a tocar, lo hace y te muestra que funciona, sin SPEC. |
| Algo se rompió | `/cdia:arreglar toqué Reservar y apareció la pantalla en blanco` | Busca la causa antes de tocar nada, cambia solo lo que la causa y te muestra la prueba. |
| Querés saber cómo está el sistema | `/cdia:probar` | Lo usa como un cliente y te dice qué funciona, qué falla y qué hay de más. |
| Volvés a un proyecto después de semanas | `/cdia:empezar` | Te muestra el tablero: qué está hecho, qué falta y el próximo paso. |
| Un sistema publicado que querés vigilar | `/cdia:mantener` | Control de salud sin tocar nada. |
| Claude dijo algo que no entendiste | `/cdia:no-entendi qué es RLS` | Te lo explica con una analogía y con lo que significa para tu proyecto. |

## Instalar

En Claude Code (app de escritorio, pestaña Code), escribí estos dos comandos en la caja de texto, de a uno:

```
/plugin marketplace add jlucasacosta/cdia-skills
```

```
/plugin install cdia@cdia-skills
```

Si te pregunta dónde instalarlo, elegí para tu usuario. Después, para que las mejoras te lleguen solas, pegale esto a Claude:

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

Abrí una sesión nueva y escribí `/cdia:empezar`. Desde la terminal también se puede: `claude plugin marketplace add jlucasacosta/cdia-skills` y `claude plugin install cdia@cdia-skills --scope user`.

Si también usás Superpowers u otro plugin de método, desactivalo en los proyectos donde uses el Método CDIA: dos métodos a la vez se mezclan.

## mejorar-prompt

`/cdia:mejorar-prompt hacé que el formulario de turnos mande un WhatsApp` → Claude reescribe el pedido con objetivo, alcance y cómo se ve terminado, lo ejecuta y su respuesta arranca con `Prompt mejorado · mejorar-prompt, skill de la comunidad CDIA (cdia.pro)`. Sirve para aprender a pedir; no es un paso del método.

El modo automático de mejorar-prompt (`/cdia:modo-automatico`) se sacó en noviembre de 2026: los modelos actuales ya completan un pedido flojo o preguntan, y su nombre se confundía con el modo Auto de Claude Code.

## Actualizaciones

Con `"autoUpdate": true`, Claude Code busca las mejoras al arrancar y las instala solo. A mano: `claude plugin marketplace update cdia-skills` y `claude plugin update cdia@cdia-skills`.

## Créditos

- El Método CDIA está basado en [Superpowers](https://github.com/obra/superpowers) de Jesse Vincent (MIT, © 2025 Jesse Vincent), adaptado al español, a quienes no programan y a las prácticas de Anthropic de 2026. La versión de noviembre de 2026 lo redujo a lo necesario para los modelos actuales (de 13 skills a 9).
- Ideas de [skills de Matt Pocock](https://github.com/mattpocock/skills) (entrevista con respuesta recomendada, re-explicar simple), [spec-kit](https://github.com/github/spec-kit), [Kiro](https://kiro.dev) (requisitos que se prueban) y [OpenSpec](https://github.com/Fission-AI/OpenSpec).
- Reglas de prompting y seguridad: documentación oficial de Anthropic, Claude Code, Supabase y Vercel ([fuentes](plugins/cdia/skills/mejorar-prompt/references/buenas-practicas.md)).

## Sumá tu skill

¿Armaste una skill que le sirve a otros? Compartila con la comunidad CDIA: abrí un Pull Request con una carpeta nueva dentro de `plugins/cdia/skills/`. Cada skill dice que es de la comunidad CDIA y enlaza a cdia.pro.

## Licencia

MIT · Comunidad CDIA. Incluye trabajo derivado de Superpowers (MIT, © 2025 Jesse Vincent).
