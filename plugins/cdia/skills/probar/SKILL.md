---
name: probar
description: Paso 4 del Método CDIA (comunidad CDIA, cdia.pro). Prueba la app como la usaría un cliente, requisito por requisito del SPEC.md, con capturas como evidencia, y arma la lista de lo que funciona y lo que falla. Se usa cuando se terminó de construir algo y hay que comprobar que anda antes de revisar o publicar, cuando la persona pregunta si funciona, o cuando escribe /cdia:probar.
argument-hint: "[opcional: qué probar, o la dirección online]"
---

# Probar · Método CDIA

Pedido de la persona (puede venir vacío):

<pedido>
$ARGUMENTS
</pedido>

Empezá tu primer mensaje con la línea `Método CDIA · Paso 4: Probar`.

## Por qué este paso

Que el código se vea bien no dice nada: lo que importa es que la app haga lo que el SPEC promete cuando alguien la usa. Probar es usarla como un cliente, con evidencia. Hasta ver la prueba, nada se da por funcionando.

## 1. Armar la lista de pruebas

- Leé `SPEC.md` y `PLAN.md`. Cada requisito (R1, R2…) es una prueba; sumá los casos de "Ojo con" del plan.
- Para cada uno escribí el recorrido concreto: qué hace el usuario, con qué datos, qué debería ver.
- Mostrale la lista a la persona y preguntale si hay algún recorrido que quiera que pruebes sí o sí (AskUserQuestion, con "así está bien" como primera opción).

## 2. Elegir dónde probar

- **En la compu (lo normal):** levantá el proyecto y usá el panel Browser.
- **La versión publicada con la sesión de la persona** (un panel con login, la web online): usá Claude in Chrome. Ahí no cargues pagos reales, no borres datos y no cambies configuraciones; si una prueba lo requiere, frená y preguntá.

## 3. Probar

Para cada recorrido:

1. Hacelo como un usuario: clics, formularios con datos correctos y con datos equivocados o vacíos, volver atrás, doble clic.
2. En ancho de computadora y de celular.
3. Mirá también la consola del navegador: un error ahí cuenta aunque la pantalla se vea bien.
4. Si guarda datos, comprobá que quedaron guardados y que otro usuario no los puede ver si no corresponde.
5. Sacá una captura de lo importante.

No arregles nada durante la prueba: primero la lista completa.

## 4. Reportar

Una tabla con: requisito, recorrido, resultado (✅ funciona · ❌ falla · ⚠️ funciona pero se ve mal o confunde), y para cada ❌ o ⚠️ qué pasó, la captura y el error si hubo.

Después preguntá qué se arregla. Para cada falla, seguí el proceso de `/cdia:arreglar` (causa de fondo, arreglo, volver a probar ese recorrido). Si lo arreglado cambia código, hacé commit.

## 5. Tests automáticos (opcional)

Si el proyecto tiene partes críticas (reservas, pagos, cálculos), ofrecé proteger 3 a 5 recorridos con tests automáticos que se corren en segundos después de cada cambio. Explicá en simple qué evitaría cada uno. Con el OK, escribilos, corrélos, mostrá el resultado y agregá al CLAUDE.md cómo se corren.

## Cierre

- Todo en ✅: `Siguiente: /cdia:revisar`.
- Quedan fallas: arreglarlas (con `/cdia:arreglar`) y volver a `/cdia:probar` solo con esos recorridos.
