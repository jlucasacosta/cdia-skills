# Procedimientos por servicio · Método CDIA

Cada servicio se maneja con su MCP o su CLI. Los inicios de sesión (`gh auth login`, `vercel login`, `supabase login`, `railway login`) los hace la persona en la terminal (Ctrl+`): decile qué escribir y qué va a pasar.

## GitHub
1. Mostrá qué archivos cambiaron y resumilo en simple.
2. Si estás en `main` y el cambio es grande, preguntá si se hace en una rama nueva con Pull Request.
3. Commit con un mensaje claro en español y push.
4. Si hay rama: abrí un Pull Request que explique qué cambió y cómo se probó, y pasá el link. En la app de escritorio aparecen las opciones Auto-fix y Auto-merge.
5. Repositorio privado por defecto si tiene lógica o datos del cliente.

## Vercel
0. Antes de publicar, comprobá que el autor de los commits (`git config user.name` / `user.email`) sea la misma cuenta de GitHub conectada a Vercel: Vercel frena la publicación si el autor no pertenece a la cuenta. Si no coincide, configurá la identidad correcta en el repositorio (sin reescribir commits viejos) y volvé a publicar.
1. Conectá el proyecto de Vercel al repositorio de GitHub, así cada push a `main` se publica solo y cada rama tiene su vista previa (preview).
2. Revisá qué variables de entorno necesita el proyecto (buscá `process.env`, `import.meta.env`, `.env.example`). Cargalas en Vercel; las secretas, marcadas como **Sensitive**. Las públicas son solo las que empiezan con `NEXT_PUBLIC_`, `VITE_` o `PUBLIC_`.
3. Una variable nueva o cambiada recién se aplica en la próxima publicación: después de tocarlas, volvé a publicar (redeploy).
4. Si es una web estática, agregá un `.vercelignore` para que no se publiquen `SPEC.md`, `PLAN.md`, `DECISIONES.md`, `CLAUDE.md`, `docs/` ni archivos de prueba: son internos del proyecto.
5. Publicá y leé los logs del deploy. Si falla, explicá en simple qué pasó y arreglalo.
6. Plan Hobby (gratis) es para uso no comercial: para clientes corresponde el plan Pro. Avisalo si aplica.

## Supabase
1. Preguntá si es un proyecto nuevo o uno existente, y si es de un cliente (en ese caso, solo lectura hasta tener OK para cada cambio).
2. Cada tabla nueva se crea con una migración, con RLS activado, políticas que tengan sentido explicadas en simple (quién lee, quién escribe) y los permisos (grants) mínimos que necesita la web. Sin grant explícito, una tabla nueva no queda disponible para la web.
3. En el código: la clave publishable (`sb_publishable_…`) puede ir en el frontend; la secret (`sb_secret_…`) solo en el servidor y en variables de entorno.
4. Corré los Advisors de seguridad (`get_advisors`) y resolvé los errores.
5. Plan gratis: los proyectos se pausan tras una semana sin uso. Avisalo si el proyecto es de un cliente.

## Railway
1. Preguntá qué hace el servicio, si corre siempre o en horarios fijos (y cuáles) y si necesita una dirección pública.
2. Cargá las variables de entorno en Railway, no en el código.
3. Publicá, generá un dominio si hace falta y mostrá los logs para confirmar que arrancó bien.
4. Explicá en simple cuánto va a consumir y dónde se ve en el panel de Railway.

## Dominio propio (Hostinger, solo si se pidió)
1. Preguntá qué dominio. Los dominios se compran y se manejan en Hostinger, con su MCP; comprar uno cuesta plata, así que se confirma antes.
2. Agregalo al proyecto en Vercel y creá en Hostinger los registros DNS que Vercel indique. Si el dominio está en otro proveedor, mostrá exactamente qué registros hay que crear y dónde.
3. Comprobá que responde con HTTPS antes de darlo por hecho (puede tardar unos minutos).
