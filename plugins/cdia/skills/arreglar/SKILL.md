---
name: arreglar
description: Método CDIA (comunidad CDIA, cdia.pro). Encuentra la causa de fondo de un error antes de tocar nada y lo arregla con prueba de que quedó resuelto. Se usa cuando algo no funciona, aparece un error, una pantalla en blanco, un deploy que falla o un comportamiento raro ("no anda", "se rompió", "da error"), o cuando la persona escribe /cdia:arreglar.
argument-hint: "[qué pasa, como te salga]"
---

# Arreglar un error · Método CDIA

Lo que cuenta la persona:

<problema>
$ARGUMENTS
</problema>

Empezá tu primer mensaje con la línea `Método CDIA · Arreglar`.

## Por qué así

Arreglar a ciegas tapa el síntoma y deja la causa: el error vuelve, o aparece otro. Buscar la causa primero es más rápido que probar arreglos al azar.

## 1. Entender y reproducir

- Si falta información, preguntá de a una: qué hizo, qué esperaba, qué pasó. Pedí el mensaje de error completo o una captura, y decí exactamente dónde encontrarlo: terminal (Ctrl+`), consola del navegador (F12 → Console), logs de Vercel, Supabase o Railway. Si podés leerlo vos (conectores, logs, panel Browser), leelo vos.
- Leé el error entero, no solo la primera línea.
- Reproducilo vos: hacé los mismos pasos en el panel Browser o corré el mismo comando. Si no se reproduce, decilo y juntá más datos antes de cambiar nada.

## 2. Qué cambió

- Mirá los últimos commits y cambios sin guardar (`git log`, `git status`, `git diff`): muchos errores aparecen justo después de un cambio.
- Si hay algo parecido que sí funciona en el proyecto, comparalo con lo que falla.

## 3. Buscar la causa, capa por capa

Seguí el recorrido del dato hasta encontrar dónde se rompe:

1. **Pantalla** (el navegador): consola, lo que se envía.
2. **Servidor** (Vercel o Railway): logs de la función o del servicio.
3. **Base de datos** (Supabase): ¿la tabla existe? ¿RLS o permisos (grants) bloquean? Un error "permission denied" o 42501 casi siempre es eso. ¿Los Advisors avisan algo?
4. **Configuración**: variables de entorno cargadas en el servicio correcto (en Vercel, una variable nueva necesita volver a publicar).

Formulá una sola hipótesis ("creo que falla porque…") y probala con el cambio más chico posible. Una cosa a la vez.

## 4. Arreglar y comprobar

- Arreglá la causa, no el síntoma. No escondas el error (nada de silenciar mensajes o sacar validaciones para que "ande"). Nunca abras la seguridad para arreglar un permiso: una política `USING (true)` o un grant de más sobre datos personales no es un arreglo.
- Repetí los pasos que fallaban y mostrá la evidencia de que ahora funciona.
- Commit con un mensaje que diga qué se arregló.
- Explicá en simple qué pasaba y por qué ya no pasa.

## Si no sale

Después de 3 intentos que no resuelven, frená. Probablemente el problema es de diseño, no de un detalle: contale a la persona qué probaste, qué descartaste y qué opciones hay (cambiar el enfoque, volver a una versión anterior con git, repensar esa parte con `/cdia:brainstorming`).

## Cierre

Si el arreglo vino de `/cdia:probar` o de una fase, volvé a ese paso. Si no, sugerí `/cdia:revisar` cuando el arreglo tocó datos, permisos o claves.
