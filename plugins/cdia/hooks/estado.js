// Plugin CDIA · estado del proyecto al abrir una sesión (comunidad CDIA, cdia.pro)
// Hook SessionStart. Solo actúa si la carpeta tiene un PLAN.md del Método CDIA:
// le cuenta a Claude en qué fase está el proyecto y cuál es el próximo paso.
// En carpetas sin PLAN.md no agrega nada.

const fs = require('fs');
const path = require('path');

let entrada = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', (c) => { entrada += c; });
process.stdin.on('end', () => {
  let cwd = process.cwd();
  try { cwd = JSON.parse(entrada).cwd || cwd; } catch (e) { /* usa process.cwd() */ }

  let plan;
  try { plan = fs.readFileSync(path.join(cwd, 'PLAN.md'), 'utf8'); } catch (e) { return; }

  const fases = [...plan.matchAll(/^\s*- \[( |x|X)\] \*\*(.+?)\*\*/gm)];
  if (!fases.length) return;
  const hechas = fases.filter((f) => f[1].toLowerCase() === 'x').length;
  const proxima = fases.find((f) => f[1] === ' ');
  const publicado = (plan.match(/^- Publicado en: (.+)$/m) || [])[1];

  let siguiente;
  if (proxima) siguiente = `/cdia:fase (${proxima[2].trim()})`;
  else if (!publicado || /todav[ií]a no/i.test(publicado)) siguiente = '/cdia:probar, después /cdia:revisar y /cdia:publicar';
  else siguiente = '/cdia:mantener';

  const lineas = [
    'Este proyecto usa el Método CDIA (plugin CDIA, comunidad CDIA, cdia.pro).',
    `Avance del PLAN.md: ${hechas} de ${fases.length} fases.${publicado ? ` Publicado en: ${publicado.trim()}.` : ''}`,
    `Próximo paso sugerido: ${siguiente}.`,
    'Si la persona pregunta dónde quedaron o qué sigue, usá /cdia:empezar.',
  ];

  process.stdout.write(JSON.stringify({
    hookSpecificOutput: { hookEventName: 'SessionStart', additionalContext: lineas.join('\n') },
  }));
});
