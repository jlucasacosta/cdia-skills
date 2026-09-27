---
name: mantener
description: Paso 7 del Método CDIA (comunidad CDIA, cdia.pro). Control de salud de un proyecto publicado - errores en los logs, seguridad de la base de datos, dependencias, límites de planes gratis - y mantenimiento del CLAUDE.md. Se usa cuando un proyecto ya está publicado y la persona quiere revisarlo, retomarlo o dejar un control periódico, o cuando escribe /cdia:mantener.
argument-hint: "[opcional: qué revisar]"
---

# Mantener · Método CDIA

Pedido de la persona (puede venir vacío):

<pedido>
$ARGUMENTS
</pedido>

Empezá tu primer mensaje con la línea `Método CDIA · Paso 7: Mantener`.

Un proyecto publicado sigue vivo: se usa, algo falla alguna vez, los servicios cambian. Este paso lo mira sin tocar nada y avisa lo que importa.

## 1. Control de salud (solo lectura)

Revisá lo que corresponda al proyecto, con los conectores o CLIs que haya:

1. **Errores recientes** en los logs de Vercel, Supabase y Railway (últimos 7 días).
2. **Seguridad de la base**: Advisors de Supabase (`get_advisors`), tablas nuevas sin RLS o sin permisos.
3. **Dependencias con avisos de seguridad** (`npm audit` o equivalente), sin actualizar nada todavía.
4. **Límites de planes gratis**: proyecto de Supabase pausado o cerca de pausarse, uso de Vercel o Railway cerca del límite.
5. **Pendientes** del PLAN.md que sigan abiertos.

## 2. Reporte

Corto, de lo más urgente a lo menos urgente, cada punto con una recomendación en simple. Si está todo bien, decilo en una línea.

## 3. Mantener el CLAUDE.md al día

Proponé (sin guardar hasta tener OK):
- agregar lo que Claude tuvo que corregir más de una vez o lo que no podía adivinar del proyecto;
- sacar reglas que ya no hacen falta o repiten lo que se ve en el código.
Que siga corto.

## 4. Control automático (opcional)

Ofrecé dejarlo programado: en la app de escritorio, **Routines → New routine → Local**, frecuencia semanal, con el pedido "Hacé el control de salud del Método CDIA de este proyecto: /cdia:mantener". Aclarales que las tareas locales corren con la app abierta y la compu prendida.

## Cierre

- Algo para arreglar: `Siguiente: /cdia:arreglar`.
- Algo nuevo para sumar: `Siguiente: /cdia:brainstorming`.
- Todo bien: nada más que hacer hasta el próximo control.
