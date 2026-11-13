---
name: arreglar
description: Método CDIA (comunidad CDIA, cdia.pro). Encuentra la causa de fondo de un error antes de tocar nada y lo arregla con el cambio más chico posible y prueba de que quedó resuelto. Se usa cuando algo no funciona, aparece un error, una pantalla en blanco, un deploy que falla o un comportamiento raro ("no anda", "se rompió", "da error"), o cuando la persona escribe /cdia:arreglar.
argument-hint: "[qué pasa, como te salga]"
---

# Arreglar · Método CDIA

Lo que cuenta la persona:

<problema>
$ARGUMENTS
</problema>

Empezá tu primer mensaje con la línea `Método CDIA · Arreglar · modo recomendado: Auto o Accept edits`.

Arreglar a ciegas tapa el síntoma y deja la causa: el error vuelve, o aparece otro. Primero la causa, después el arreglo, y el arreglo toca solo lo que causa el error.

## 1. Reproducir

- Si falta información, preguntá de a una: qué hizo, qué esperaba, qué pasó. Si podés leer el error vos (terminal, consola del panel Browser, logs de Vercel, Supabase o Railway), leelo vos, entero. Si no, decile exactamente dónde encontrarlo: terminal (Ctrl+`) o consola del navegador (F12 → Console).
- Hacé los mismos pasos y mirá que falle. Si no se reproduce, decilo y juntá más datos antes de cambiar nada.

## 2. Buscar la causa

- Mirá qué cambió (`git log`, `git status`, `git diff`): muchos errores aparecen justo después de un cambio. Si algo parecido sí funciona en el proyecto, comparalo.
- Seguí el recorrido del dato hasta donde se rompe: **pantalla** (consola, lo que se envía) → **servidor** (logs de Vercel o Railway) → **base de datos** (¿existe la tabla?, ¿RLS o permisos bloquean? "permission denied" o 42501 casi siempre es eso) → **configuración** (variables de entorno cargadas en el servicio correcto; en Vercel una variable nueva necesita volver a publicar).
- Una sola hipótesis ("creo que falla porque…"), probada con el cambio más chico posible. Una cosa a la vez.

## 3. Arreglar y comprobar

- Cambiá solo lo que causa el error. No reescribas, no ordenes ni mejores lo de alrededor: lo que veas de paso, anotalo en "Ideas para después" del SPEC.md.
- No escondas el error (silenciar mensajes, sacar validaciones) ni abras la seguridad para que ande: una política `USING (true)` o un permiso de más sobre datos personales no es un arreglo.
- Repetí los pasos que fallaban y mostrá la evidencia de que ahora funciona. Commit con un mensaje que diga qué se arregló.
- Explicá en simple qué pasaba y por qué ya no pasa.

## Si no sale

Después de 3 intentos que no resuelven, frená: probablemente el problema es de diseño. Contale a la persona qué probaste, qué descartaste y qué opciones hay (otro enfoque, volver a una versión anterior con git, repensar esa parte con `/cdia:brainstorming`).
