---
name: preparar
description: Paso 0 del Método CDIA (comunidad CDIA, cdia.pro). Deja lista la base de un proyecto nuevo - git, repositorio privado en GitHub, CLAUDE.md con las reglas del proyecto y las claves protegidas - antes de diseñar o construir. Se usa cuando se arranca un proyecto en una carpeta vacía o sin git, o cuando la persona escribe /cdia:preparar.
argument-hint: "[opcional: nombre del proyecto]"
---

# Preparar el proyecto · Método CDIA

Pedido de la persona (puede venir vacío):

<pedido>
$ARGUMENTS
</pedido>

Empezá tu primer mensaje con la línea `Método CDIA · Paso 0: Preparar`.

## Por qué este paso

Claude arranca cada sesión sin recordar la anterior. El `CLAUDE.md` es su memoria fija: lo lee siempre al empezar. GitHub es el historial: cada versión queda guardada para poder volver atrás. Preparar es darle memoria y red de seguridad al proyecto antes de construir. Todavía no se escribe código de la app.

## 1. Preguntar lo necesario

Con AskUserQuestion, de a una y con tu recomendación primero:

1. Nombre del proyecto (recomendá uno en minúsculas y con guiones, por ejemplo `peluqueria-sol`).
2. Para quién es: proyecto propio o de un cliente.
3. Repositorio en GitHub: privado (recomendado) o público.

Si la carpeta ya tiene git o archivos, contá lo que encontraste y preguntá antes de tocar nada.

## 2. Dejar la base

1. **Git**: inicializalo y creá un `.gitignore` que deje afuera `.env`, `.env.*` (menos `.env.example`), `node_modules`, carpetas de build y archivos del sistema.
2. **GitHub**: creá el repositorio con `gh` y conectalo. Si `gh` no está instalado o no inició sesión, explicá cómo hacerlo (la persona escribe `gh auth login` en la terminal, Ctrl+`) y esperá.
3. **CLAUDE.md** corto (menos de 60 líneas) con:
   - qué es el proyecto y para quién (una o dos frases);
   - que el proyecto sigue el Método CDIA: `SPEC.md` dice qué se construye, `PLAN.md` en qué orden, `DECISIONES.md` por qué;
   - las reglas del proyecto:
     - una fase por sesión; commit y push al terminar cada fase;
     - las claves van en `.env` y en los paneles de los servicios, nunca en el código ni en el chat;
     - preguntar antes de contratar servicios pagos, borrar datos o tocar cuentas de clientes;
     - explicar en simple, sin jerga, a alguien que no programa;
   - cómo se prueba el proyecto (se completa cuando exista).
4. **Protección de claves**: en `.claude/settings.json` agregá reglas que impidan leer `.env` y `.env.*` (permiso `deny` para `Read(./.env)` y `Read(./.env.*)`). Explicá en una frase por qué.
5. **Archivos del método**: `DECISIONES.md` con un título y la primera decisión (repo privado/público y por qué). El SPEC y el PLAN los crean los pasos siguientes.
6. Primer commit y push.

## 3. Cierre

Mostrá en una lista simple qué quedó hecho, con el link al repositorio. Cerrá con: `Siguiente: /cdia:brainstorming` (para diseñar qué se construye).
