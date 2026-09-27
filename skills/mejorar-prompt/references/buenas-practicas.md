# Buenas prácticas de prompting · fuentes

Resumen de la guía oficial de Anthropic y de la documentación de Claude Code, revisadas en septiembre de 2026. Es la base de la skill `mejorar-prompt` de la comunidad CDIA.

## Lo que recomienda Anthropic

| Práctica | Qué significa | Ejemplo |
|---|---|---|
| Claro y directo | Escribir para alguien brillante que no conoce tu proyecto. Si un colega sin contexto no lo entendería, a Claude le pasa lo mismo. | "Hacé una landing" → "Hacé una landing para la Peluquería Sol que muestre los servicios y un botón para reservar por WhatsApp." |
| Dar el motivo | Explicar por qué se pide algo mejora cómo lo resuelve. | "Que cargue rápido en celular, porque el 90 % de sus clientes entra desde Instagram." |
| Ejemplos | Entre 3 y 5 ejemplos variados muestran mejor que una descripción. | Pegar dos o tres textos que te gustan como referencia de estilo. |
| Separar datos con etiquetas | Si pegás un texto largo, envolvelo en etiquetas para que no se mezcle con la instrucción. | `<mail_del_cliente> … </mail_del_cliente>` y después la instrucción. |
| Formato en positivo | Decir qué hacer, no qué evitar. | "Respondé en tres viñetas" en vez de "no escribas párrafos largos". |
| Pedir la acción | "Cambiá" hace que actúe; "¿podrías sugerir?" hace que solo sugiera. | "Cambiá el color del botón a verde." |
| Tono normal | Los modelos actuales sobrerreaccionan a las mayúsculas y a "DEBÉS" / "CRÍTICO". | "Usá la paleta del cliente" en vez de "SIEMPRE DEBÉS USAR LA PALETA". |
| Acotar el alcance | Pedir lo que se necesita, sin extras. | "Solo el formulario; el diseño del resto queda igual." |
| No especular | Leer los archivos antes de opinar sobre ellos. | La skill abre `CLAUDE.md`, `SPEC.md` y lo que el pedido nombre. |

## Lo que cambió con los modelos de 2026

- **El razonamiento viene activado siempre.** La profundidad se regula con el nivel de esfuerzo, no con frases como "pensá paso a paso".
- **Verifican solos.** Pedir "revisá dos veces" o "verificá al final" hace que verifiquen de más. Mejor: describir cómo se ve terminado.
- **Tienden a ampliar el trabajo.** Conviene decir qué entra y qué no.
- **Respuestas más largas por defecto.** Si querés algo breve, pedilo.

## Lo que recomienda Claude Code

- Acotar la tarea: qué archivo, qué caso, qué preferencia.
- Señalar dónde está la respuesta: nombrar archivos con `@`.
- Describir el síntoma, dónde puede estar y cómo se ve arreglado.
- Para algo grande, que Claude te entreviste antes de construir.

## Fuentes

- Anthropic · Prompting best practices: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices
- Anthropic · Prompting Claude Opus 5.5: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-opus-5-5
- Anthropic · Prompting Claude Opus 5: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-opus-5
- Claude Code · Best practices: https://code.claude.com/docs/en/best-practices
- Guía CDIA · Cómo construir con Claude Code: https://www.cdia.pro/recursos/construir-con-claude-code.html
