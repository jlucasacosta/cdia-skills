---
name: mantener
description: Método CDIA (comunidad CDIA, cdia.pro). Control de salud de un sistema publicado - errores en los logs, seguridad de la base de datos, dependencias, límites de planes gratis - sin tocar nada. Se usa cuando un sistema ya está publicado y la persona quiere revisarlo o hacerle mantenimiento, o cuando escribe /cdia:mantener.
argument-hint: "[opcional: qué revisar]"
---

# Mantener · Método CDIA

Pedido de la persona (puede venir vacío):

<pedido>
$ARGUMENTS
</pedido>

Empezá tu primer mensaje con la línea `Método CDIA · Mantener · modo recomendado: Plan`.

Este paso mira un sistema publicado sin cambiar nada y avisa lo que importa.

## 1. Control (solo lectura)

Revisá lo que corresponda al proyecto, con los conectores o CLIs que haya:

1. **Errores recientes** en los logs de Vercel, Supabase y Railway (últimos 7 días).
2. **Seguridad de la base**: Advisors de Supabase (`get_advisors`), tablas sin RLS o sin permisos.
3. **Dependencias con avisos de seguridad** (`npm audit` o equivalente), sin actualizar nada todavía.
4. **Límites de planes gratis**: proyecto de Supabase pausado o cerca de pausarse, uso de Vercel o Railway cerca del límite.

## 2. Reporte

Corto, de lo más urgente a lo menos urgente, cada punto con una recomendación en simple. Si está todo bien, decilo en una línea. Reportá problemas, no mejoras posibles.

Si en el trabajo hubo algo que tuviste que corregir más de una vez o que no se podía adivinar del proyecto, proponé sumarlo al `CLAUDE.md` en una línea.

Si la persona quiere dejarlo programado: en la app de escritorio, **Routines → New routine → Local**, semanal, con el pedido `/cdia:mantener` (corre con la app abierta y la compu prendida).

## Cierre

- Algo para arreglar: `Siguiente: /cdia:arreglar`.
- Algo nuevo para sumar: `Siguiente: /cdia:brainstorming`.
- Todo bien: nada más que hacer hasta el próximo control.
