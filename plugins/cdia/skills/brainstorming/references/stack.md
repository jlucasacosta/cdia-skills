# Stack de CDIA · Método CDIA

Con esto se arma todo. De la lista se usa solo lo que el sistema pedido necesita: una landing con formulario lleva GitHub, Vercel y el webhook de GoHighLevel, y nada más.

| Para qué | Herramienta |
|---|---|
| Guardar el código | **GitHub** (repositorio privado) |
| Publicar la web o la app | **Vercel** |
| Base de datos e inicio de sesión | **Supabase** |
| Lo que tiene que quedar corriendo 24/7 (bots, tareas programadas) | **Railway** |
| Contactos, formularios, calendario, avisos, WhatsApp, embudos | **GoHighLevel**: el sistema se conecta por automations con webhooks, no con apps del marketplace |
| Transcribir audios y agentes de IA | **OpenAI (API)** |
| Procesar mensajes | **OpenAI (API)** o el **SDK de Anthropic**, cualquiera de los dos |
| Dominio | **Hostinger** |

Cada herramienta se maneja con su MCP o su CLI; Hostinger, con su MCP. Si falta conectar una, decile a la persona cuál y cómo, y esperá.

En "Cómo se hace" del SPEC.md anotá qué herramientas del stack usa este sistema. Los pasos siguientes usan esas y no suman otras.

Elegir el stack no es publicar. El repositorio en GitHub, el proyecto en Vercel y el dominio se crean recién en `/cdia:publicar`, cuando la persona lo pide.
