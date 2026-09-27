# CDIA · el plugin de la comunidad CDIA para Claude Code

El **Método CDIA** completo para construir webs y sistemas con **Claude Code**, en español y pensado para quien no programa: de la idea al proyecto online, paso por paso, con las prácticas que recomienda Anthropic. Todas las skills de la comunidad **CDIA** en un solo plugin que se actualiza solo.

[cdia.pro](https://www.cdia.pro) · [banco de skills](https://www.cdia.pro/recursos/skills/banco) · [guía: Cómo construir con Claude Code](https://www.cdia.pro/recursos/construir-con-claude-code.html)

## El Método CDIA

| Comando | Paso | Qué hace |
|---|---|---|
| `/cdia:empezar` | Entrada | Mira tu proyecto, te dice en qué paso estás y cuál sigue. Si traés un pedido, elige cuánto proceso hace falta según el tamaño. |
| `/cdia:preparar` | 0 | Git, repositorio privado en GitHub, CLAUDE.md con las reglas del proyecto y las claves protegidas. |
| `/cdia:brainstorming` | 1 | Te entrevista de a una pregunta (con su recomendación), te muestra mockups si ayuda y escribe el `SPEC.md` con requisitos que después se prueban. |
| `/cdia:plan` | 2 | Convierte el SPEC en un `PLAN.md` por fases chicas, cada una con "cómo se ve terminada". |
| `/cdia:fase` | 3 | Construye solo la próxima fase, la prueba con evidencia, la guarda en GitHub y frena. |
| `/cdia:probar` | 4 | Prueba la app como un cliente, requisito por requisito, con capturas. |
| `/cdia:revisar` | 5 | Un revisor con la cabeza limpia compara todo contra el SPEC y hace el chequeo de seguridad (claves, RLS, permisos, variables). |
| `/cdia:publicar` | 6 | Puerta de seguridad y publicación en GitHub, Vercel, Supabase y Railway. Solo corre cuando lo escribís vos. |
| `/cdia:mantener` | 7 | Control de salud del proyecto publicado y mantenimiento del CLAUDE.md. |
| `/cdia:arreglar` | — | Encuentra la causa de un error antes de tocar nada y lo arregla con prueba. |
| `/cdia:no-entendi` | — | Te vuelve a explicar lo último en simple, con una analogía. |
| `/cdia:mejorar-prompt` | — | Mejora tu pedido con las buenas prácticas de Anthropic, lo ejecuta y te muestra cómo quedó. |
| `/cdia:modo-automatico` | — | Prende o apaga mejorar-prompt para todos tus mensajes. |

No hace falta acordarse de todos: con decir "quiero armar una app de turnos" o "¿qué sigo?", Claude usa el paso que corresponde y te avisa con una línea `Método CDIA · Paso N`. Cada paso termina diciéndote el siguiente. Además, al abrir una sesión en un proyecto con `PLAN.md`, Claude ya sabe en qué fase estás.

**Ejemplo real:** [Peluquería Sol, de la idea a la web publicada](docs/ejemplo-peluqueria-sol/), paso por paso, con capturas y los archivos que dejó cada paso.

Los archivos que deja en tu proyecto: `SPEC.md` (qué se construye), `PLAN.md` (en qué orden, con el estado), `DECISIONES.md` (por qué) y `CLAUDE.md` (las reglas).

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

## mejorar-prompt y el modo automático

`/cdia:mejorar-prompt hacé que el formulario de turnos mande un WhatsApp` → Claude reescribe el pedido con objetivo, alcance y cómo se ve terminado, lo ejecuta y su respuesta arranca con `Prompt mejorado · mejorar-prompt, skill de la comunidad CDIA (cdia.pro)`.

`/cdia:modo-automatico prender` lo aplica a todos tus mensajes (necesita Node.js). `apagar` lo apaga; viene apagado.

## Actualizaciones

Con `"autoUpdate": true`, Claude Code busca las mejoras al arrancar y las instala solo. A mano: `claude plugin marketplace update cdia-skills` y `claude plugin update cdia@cdia-skills`.

## Créditos

- El Método CDIA está basado en [Superpowers](https://github.com/obra/superpowers) de Jesse Vincent (MIT, © 2025 Jesse Vincent), adaptado al español, a quienes no programan y a las prácticas de Anthropic de 2026.
- Ideas de [skills de Matt Pocock](https://github.com/mattpocock/skills) (entrevista con respuesta recomendada, re-explicar simple), [spec-kit](https://github.com/github/spec-kit), [Kiro](https://kiro.dev) (requisitos que se prueban) y [OpenSpec](https://github.com/Fission-AI/OpenSpec).
- Reglas de prompting y seguridad: documentación oficial de Anthropic, Claude Code, Supabase y Vercel ([fuentes](plugins/cdia/skills/mejorar-prompt/references/buenas-practicas.md)).

## Sumá tu skill

¿Armaste una skill que le sirve a otros? Compartila con la comunidad CDIA: abrí un Pull Request con una carpeta nueva dentro de `plugins/cdia/skills/`. Cada skill dice que es de la comunidad CDIA y enlaza a cdia.pro.

## Licencia

MIT · Comunidad CDIA. Incluye trabajo derivado de Superpowers (MIT, © 2025 Jesse Vincent).
