---
name: publicar
description: Paso 6 del Método CDIA (comunidad CDIA, cdia.pro). Publica el proyecto con una puerta de seguridad previa - guarda en GitHub y sube a Vercel, Supabase y Railway según lo que use - y termina con opciones claras. Solo se ejecuta cuando la persona escribe /cdia:publicar.
argument-hint: "[opcional: dónde publicar o qué parte]"
disable-model-invocation: true
---

# Publicar · Método CDIA

Pedido de la persona (puede venir vacío):

<pedido>
$ARGUMENTS
</pedido>

Empezá tu primer mensaje con la línea `Método CDIA · Paso 6: Publicar`.

Publicar pone el proyecto en internet: desde ese momento lo usan personas reales. Por eso esta skill solo corre cuando la persona la pide y siempre pasa primero por la puerta de seguridad.

## 1. Puerta de seguridad

- Leé `SPEC.md`, `PLAN.md` y `CLAUDE.md`. Fijate si hay fases sin tildar: si las hay, avisá que se publicaría algo incompleto y preguntá si seguir.
- Si no hubo una revisión (`/cdia:revisar`) después del último cambio, hacela ahora: usá la skill revisar de este mismo plugin. Con problemas críticos o importantes sin resolver, no se publica: mostralos y proponé arreglarlos.
- Revisá `git status`: todo lo que se publica tiene que estar guardado en un commit.

## 2. Qué se publica y dónde

Mirá el proyecto y el PLAN.md y armá la lista de lo que hace falta. Mostrala antes de tocar nada:

- **GitHub**: guardar el código (siempre).
- **Vercel**: la web o app.
- **Supabase**: la base de datos y los usuarios, si el proyecto la usa.
- **Railway**: procesos que tienen que quedar prendidos 24/7 (bots, tareas programadas, APIs), si hay.

Seguí los procedimientos de `references/servicios.md` para cada uno. Reglas para todos:

- Las claves nunca van en el código ni en el chat: se cargan como variables de entorno en cada servicio. Si falta una, pedile a la persona que la pegue en el panel del servicio o en `.env`, con instrucciones exactas de dónde encontrarla.
- Con proyectos o cuentas de clientes, confirmá con la persona antes de cada cambio.
- Lo que cuesta plata (plan pago, dominio) se consulta antes.

## 3. Comprobar online

- Abrí la dirección publicada en el panel Browser y hacé los recorridos principales del SPEC (con Claude in Chrome si hace falta la sesión de la persona).
- Mirá los logs del deploy y la consola del navegador.
- Si algo falla, seguí el proceso de `/cdia:arreglar` antes de dar la publicación por hecha.

## 4. Cierre

Actualizá el bloque **Estado** del PLAN.md ("Publicado en: <dirección> · <fecha>") y hacé commit.

Después ofrecé estas opciones, numeradas, sin explicaciones largas:

1. Dejarlo publicado así.
2. Conectar un dominio propio (por ejemplo `peluqueriasol.com`).
3. Crear el control semanal automático (`/cdia:mantener`).
4. Volver atrás a la versión anterior publicada.

Si la persona elige volver atrás o algo que borra, pedile que escriba la palabra `confirmo` antes de hacerlo.

Cerrá con: `Siguiente: /cdia:mantener` (para cuidar el proyecto) o `/cdia:brainstorming` (para lo próximo que quiera sumar).
