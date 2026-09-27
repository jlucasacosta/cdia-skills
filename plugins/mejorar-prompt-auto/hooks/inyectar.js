// mejorar-prompt-auto · comunidad CDIA (cdia.pro)
// Hook UserPromptSubmit: antes de que Claude procese cada mensaje, le agrega
// una instrucción breve para que mejore el pedido internamente y lo ejecute.
// No reescribe ni bloquea el mensaje de la persona.

const INSTRUCCION = `Modo mejorar-prompt (skill de la comunidad CDIA, cdia.pro) activo.
Antes de actuar, evaluá el pedido de la persona:
- Si es claro (se entiende qué hay que lograr, dónde y cómo se ve terminado), hacelo directo, sin comentarlo.
- Si le falta algo, completalo internamente mirando el proyecto (CLAUDE.md, SPEC.md, PLAN.md y los archivos que nombre): objetivo, alcance, qué no se toca y cómo se ve terminado. Mantené el tamaño del pedido, sin sumar funciones que no pidió.
- Si se puede entender de formas que llevarían a trabajos distintos, hacé entre 1 y 3 preguntas con opciones antes de empezar.
Cuando completaste el pedido, empezá tu respuesta con una sola línea: "Entendí (mejorar-prompt · comunidad CDIA): <el pedido completo en una frase>". Después hacelo.`;

let entrada = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', (c) => { entrada += c; });
process.stdin.on('end', () => {
  let prompt = '';
  try { prompt = (JSON.parse(entrada).prompt || '').trim(); } catch (e) { /* sin datos: no inyecta */ }

  // Comandos (/algo), confirmaciones cortas ("sí", "dale", "ok") y mensajes vacíos pasan tal cual.
  if (!prompt || prompt.startsWith('/') || prompt.split(/\s+/).length < 4) return;

  process.stdout.write(JSON.stringify({
    hookSpecificOutput: { hookEventName: 'UserPromptSubmit', additionalContext: INSTRUCCION },
  }));
});
