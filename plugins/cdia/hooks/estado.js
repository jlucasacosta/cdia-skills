// Plugin CDIA · estado del proyecto al abrir una sesión (comunidad CDIA, cdia.pro)
// Hook SessionStart. Solo actúa si la carpeta tiene fases del Método CDIA en SPEC.md
// (o en PLAN.md, de la versión anterior): le cuenta a Claude en qué fase está el
// proyecto y cuál es el próximo paso. En otras carpetas no agrega nada.

const fs = require('fs');
const path = require('path');

let entrada = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', (c) => { entrada += c; });
process.stdin.on('end', () => {
  let cwd = process.cwd();
  try { cwd = JSON.parse(entrada).cwd || cwd; } catch (e) { /* usa process.cwd() */ }

  const FASE = /^\s*- \[( |x|X)\] \*\*(.+?)\*\*/gm;
  let doc = '', fases = [];
  for (const archivo of ['SPEC.md', 'PLAN.md']) {
    try { doc = fs.readFileSync(path.join(cwd, archivo), 'utf8'); } catch (e) { continue; }
    fases = [...doc.matchAll(FASE)];
    if (fases.length) break;
  }
  if (!fases.length) return;

  const hechas = fases.filter((f) => f[1].toLowerCase() === 'x').length;
  const proxima = fases.find((f) => f[1] === ' ');
  const publicado = (doc.match(/^- Publicado en: (.+)$/m) || [])[1];

  let siguiente;
  if (proxima) siguiente = `/cdia:fase (${proxima[2].trim()})`;
  else if (!publicado || /todav[ií]a no/i.test(publicado)) siguiente = '/cdia:probar y después /cdia:publicar';
  else siguiente = '/cdia:mantener';

  const lineas = [
    'Este proyecto usa el Método CDIA (plugin CDIA, comunidad CDIA, cdia.pro).',
    `Avance: ${hechas} de ${fases.length} fases.${publicado ? ` Publicado en: ${publicado.trim()}.` : ''}`,
    `Próximo paso sugerido: ${siguiente}.`,
    'Se construye solo lo que dice "Entra" del SPEC.md.',
  ];

  process.stdout.write(JSON.stringify({
    hookSpecificOutput: { hookEventName: 'SessionStart', additionalContext: lineas.join('\n') },
  }));
});
