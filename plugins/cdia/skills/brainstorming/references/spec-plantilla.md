# Plantilla de SPEC.md · Método CDIA

Un solo archivo dice qué se construye, qué no y en qué orden. Lenguaje simple, para que lo entienda el dueño del negocio. Mantené el formato de las casillas de "Fases" (`- [ ]` / `- [x]`), porque el plugin las cuenta.

```markdown
# <Nombre del proyecto> · SPEC

> Método CDIA · comunidad CDIA (cdia.pro) · aprobado el AAAA-MM-DD

## Objetivo
<Qué se le vende a qué negocio y qué problema le resuelve, en una o dos frases.>

## Entra
Solo esto se construye. Cada punto se prueba al final.

- **R1** · Cuando <qué pasa>, <qué hace el sistema>.
- **R2** · …

## No entra
Se dejó afuera a propósito. No se construye aunque parezca fácil o útil.

- …

## Cómo se hace
- <Con qué se arma y dónde corre, y por qué es lo más simple que alcanza.>
- <Qué se conecta con lo que el negocio ya usa.>
- 🙋 <Lo que tiene que hacer la persona a mano, y en qué fase.>
- Publicado en: todavía no

## Fases
- [ ] **Fase 1 · <nombre>** · cumple R1, R2 · terminada cuando <lo que se puede ver o hacer>.
- [ ] **Fase 2 · <nombre>** · cumple R3 · terminada cuando <…>.

## Ideas para después
(Lo que aparezca en el camino y no esté en "Entra". Se anota acá y no se construye.)
```

## Cómo escribirlo

- **Entra**: un requisito por comportamiento que la persona pidió, comprobable mirando la pantalla ("muestra el mensaje de confirmación", no "funciona bien"). Es una lista cerrada: nombrá qué se muestra, qué campos hay y qué acciones se pueden hacer ("muestra dirección, horarios y los tres beneficios", no "presenta el estudio"). Si un requisito existe solo porque "suele hacerse", no va.
- **No entra**: lo que se habló y se descartó, y lo que un sistema de este tipo suele traer y acá no se pidió (panel, inicio de sesión, más secciones, avisos automáticos, estadísticas).
- **Fases**: las menos posibles. La primera deja algo que funciona de punta a punta, aunque sea simple. Una landing suele ser una sola fase. Las fases se construyen y se comprueban en la compu: publicar no es una fase, es `/cdia:publicar`.
