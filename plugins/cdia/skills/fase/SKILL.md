---
name: fase
description: Método CDIA (comunidad CDIA, cdia.pro). Construye solo la próxima fase sin tildar del SPEC.md, comprueba que funciona, la guarda y frena. Se usa cuando hay un SPEC.md aprobado con fases pendientes y la persona quiere construir o seguir ("seguí", "hacé la próxima fase", "continuemos"), o cuando escribe /cdia:fase.
argument-hint: "[opcional: número de fase]"
---

# Fase · Método CDIA

Pedido de la persona (puede venir vacío):

<pedido>
$ARGUMENTS
</pedido>

Empezá tu primer mensaje con la línea `Método CDIA · Fase <número> · <nombre> · modo recomendado: Auto o Accept edits`.

El SPEC.md es el techo, no el piso: se construye lo que "Entra" dice para esta fase y nada más. La persona vende este sistema y lo mantiene sin saber programar, así que cada sección, pantalla, opción, archivo o validación que nadie pidió es algo más que va a tener que explicar y arreglar. La versión más simple que cumple el requisito es la correcta.

## 1. Tomar la fase

- Leé `SPEC.md` y `CLAUDE.md`. Si no hay SPEC aprobado, proponé `/cdia:brainstorming`. (En proyectos de la versión anterior del método, las fases están en `PLAN.md`.)
- La fase es la primera sin tildar, salvo que la persona pida otra.
- Si el pedido trae algo que no está en "Entra", no lo mezcles con la fase: va a "Ideas para después" o, si la persona lo quiere ahora, pasa por `/cdia:brainstorming`.
- Contá en corto qué vas a construir y cómo se va a ver terminado.
- Los pasos 🙋 de la fase pedilos primero, de a uno, con instrucciones exactas de dónde hacer clic o qué copiar. Las claves se pegan en `.env` o en el panel del servicio, nunca en el chat.

## 2. Construir

- Si falta una decisión chica, tomá la más simple que cumple el SPEC y anotala en una línea en "Cómo se hace".
- Si te parece que falta algo que no está en "Entra" (otra sección, otro estado, un panel, una protección, pruebas automáticas, un README), anotalo en "Ideas para después" y seguí sin construirlo.
- Usá las herramientas que dice "Cómo se hace" del SPEC, cada una con su MCP o su CLI, y no sumes otras. Para conectar con un servicio (GoHighLevel incluido), leé su documentación actual en vez de confiar en la memoria.
- Si la fase crea tablas en Supabase, van con RLS, políticas con sentido y los permisos (grants) mínimos que necesita la web.
- Una fase se construye y se comprueba en la compu. No crea repositorios ni proyectos en servicios y no publica: eso lo hace `/cdia:publicar`, cuando la persona lo escribe.
- Frená y preguntá antes de borrar datos o hacer algo que no se deshace, tocar claves, permisos o datos de clientes, o gastar plata.
- Si algo falla y la causa no es obvia, seguí el proceso de `/cdia:arreglar`.

## 3. Comprobar

Hacé el recorrido de "terminada cuando" como lo haría un usuario (si hay pantalla, en el panel Browser, en ancho de computadora y de celular) y mostrá la evidencia: la captura, el dato guardado o el comando con su resultado. Lo que no pudiste comprobar, decilo como pendiente y no como hecho.

Antes de cerrar, repasá lo que cambiaste contra la fase: lo que no responde a un requisito de "Entra", sacalo, y lo que armaste solo para probar (un receptor falso, un script) no queda en el proyecto.

## 4. Guardar y frenar

1. Tildá la fase en SPEC.md y hacé commit (y push si el proyecto tiene GitHub).
2. Contá en corto y en simple qué existe ahora, cómo comprobarlo y qué anotaste en "Ideas para después".
3. Frená. Si quedan fases: `Siguiente: /cdia:fase`. Si era la última: `Siguiente: /cdia:probar`.
