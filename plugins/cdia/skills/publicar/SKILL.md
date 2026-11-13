---
name: publicar
description: Método CDIA (comunidad CDIA, cdia.pro). Publica el sistema después de un chequeo de seguridad - guarda en GitHub y sube a Vercel, Supabase y Railway según lo que use. Solo se ejecuta cuando la persona escribe /cdia:publicar.
argument-hint: "[opcional: dónde publicar o qué parte]"
disable-model-invocation: true
---

# Publicar · Método CDIA

Pedido de la persona (puede venir vacío):

<pedido>
$ARGUMENTS
</pedido>

Empezá tu primer mensaje con la línea `Método CDIA · Publicar · modo recomendado: Manual`.

Publicar pone el sistema en internet: desde ese momento lo usan personas reales. Por eso solo corre cuando la persona lo pide y pasa primero por el chequeo. En modo Manual, Claude pide permiso antes de cada comando que sale de la compu.

## 1. Chequeo antes de publicar

- Leé `SPEC.md`. Si hay fases sin tildar, avisá que se publicaría algo incompleto y preguntá si seguir.
- Si no se corrió `/cdia:probar` después del último cambio, corrélo ahora.
- Recorré `references/seguridad.md` punto por punto contra el proyecto. Con una clave expuesta o datos de personas abiertos no se publica: mostralo y arreglalo primero.
- `git status`: todo lo que se publica está en un commit.

## 2. Publicar

Armá la lista de lo que hace falta según el proyecto y mostrala antes de tocar nada: GitHub (siempre, repositorio privado), Vercel (la web), Supabase (si usa base de datos), Railway (si hay algo que queda prendido 24/7), Hostinger (si se pidió dominio propio). Se publica con estas herramientas y no con otras, salvo que el SPEC diga lo contrario. Seguí `references/servicios.md` para cada una.

- Las claves se cargan como variables de entorno en cada servicio. Si falta una, la persona la pega en el panel del servicio o en `.env`, con instrucciones exactas de dónde encontrarla.
- Con cuentas de clientes, confirmá antes de cada cambio. Lo que cuesta plata se consulta antes.

## 3. Comprobar online

Abrí la dirección publicada y hacé los recorridos de "Entra". Mirá los logs del deploy y la consola. Si algo falla, seguí `/cdia:arreglar` antes de darlo por publicado.

## Cierre

Anotá en SPEC.md "Publicado en: <dirección> · <fecha>", hacé commit y pasale la dirección a la persona. Si elige volver atrás o algo que borra, pedile que escriba `confirmo` antes.

`Siguiente: /cdia:mantener` cuando quiera revisarlo, o `/cdia:brainstorming` para sumarle algo.
