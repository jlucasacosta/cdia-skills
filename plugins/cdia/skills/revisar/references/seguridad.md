# Checklist de seguridad · Método CDIA (actualizado septiembre 2026)

Para apps hechas con Claude Code sobre Supabase, Vercel y Railway. Cada punto dice qué mirar y por qué.

## Claves y variables
1. **Ninguna clave secreta en el código ni en el historial de git.** Buscá patrones como `sb_secret_`, `service_role`, `sk_`, `API_KEY=` con valor, tokens largos. Una clave que llegó a GitHub se considera filtrada aunque se borre después: hay que rotarla.
2. **`.env` está en `.gitignore`** y no hay archivos `.env` commiteados.
3. **Las variables públicas no tienen nada secreto.** Todo lo que empieza con `NEXT_PUBLIC_`, `VITE_` o `PUBLIC_` termina en el navegador de cualquier visitante.
4. **Supabase: la clave publishable (`sb_publishable_…`) puede ir en el frontend; la secret (`sb_secret_…`) solo del lado del servidor.** Si el proyecto usa las claves viejas (`anon` / `service_role`, empiezan con `eyJ`), la regla es la misma y conviene migrar: Supabase las da de baja a fines de 2026.
5. **En Vercel, las variables secretas están marcadas como Sensitive** (o Secret), así no se muestran ni aparecen en los logs.

## Base de datos (Supabase)
6. **RLS activado en todas las tablas del esquema `public`.** Sin RLS, cualquiera con la dirección del proyecto puede leer la tabla entera.
7. **Las políticas tienen sentido.** Una política `USING (true)` en una tabla con datos de personas (nombres, mails, teléfonos, pedidos) deja todo abierto: es un problema crítico. Las políticas de datos personales se basan en quién es el usuario (`auth.uid()`).
8. **Permisos de tabla (grants) explícitos y mínimos.** Desde el 30 de octubre de 2026, en todos los proyectos, las tablas nuevas no quedan disponibles para la web hasta que se les da permiso (`GRANT SELECT/INSERT … TO anon/authenticated`). Grant = si el rol entra a la tabla; RLS = qué filas ve. Hacen falta los dos, y al rol `anon` solo lo mínimo.
9. **Security Advisor de Supabase sin errores.** Corré los Advisors (con el conector de Supabase: `get_advisors`) y revisá cada aviso.

## Lo que entra por los formularios
10. **Todo lo que llega del usuario se valida del lado del servidor** (formularios, parámetros, APIs). Nunca confiar en un `user_id` o un precio que manda el navegador.
11. **Formularios públicos con protección contra abuso**: límite de envíos (Rate Limiting de Vercel, disponible en todos los planes) y CAPTCHA en registro e inicio de sesión de Supabase si hay usuarios.

## Cuentas y publicación
12. **Autenticación en dos pasos** activada en GitHub, Supabase y Vercel de la cuenta que maneja el proyecto.
13. **Repositorio privado** si tiene lógica o datos del cliente.
14. **Nada de datos reales de clientes en archivos del repositorio** (planillas, exports, capturas con datos).

Fuentes: supabase.com/docs/guides/deployment/going-into-prod · supabase.com/docs/guides/getting-started/api-keys · github.com/orgs/supabase/discussions/45329 · vercel.com/docs/environment-variables/sensitive-environment-variables · vercel.com/docs/vercel-firewall/vercel-waf/rate-limiting · nextjs.org/docs/app/guides/environment-variables
