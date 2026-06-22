# 07 - Controles de Prevención y Mitigación

## Políticas de prevención

- Implementar validación y sanitización de todas las entradas del usuario.
- Usar consultas parametrizadas para todas las operaciones SQL.
- Configurar políticas de seguridad de contenido (CSP) para mitigar XSS.
- Aplicar listas blancas en los puntos donde se aceptan comandos o rutas.
- Asegurar que las cookies de sesión sean `HttpOnly` y `Secure`.

## Controles técnicos

- Autenticación y autorización robusta para acceso al portal.
- Monitoreo de eventos inusuales y alertas en el backend.
- Encriptación de datos en tránsito y en reposo.
- Segmentación de la red y separación de ambientes de producción.

## Mitigación de incidentes

- Bloquear y aislar rápidamente cuentas comprometidas.
- Limitar los privilegios del servidor y de la base de datos.
- Revisar y aplicar parches de seguridad al software del portal.
- Auditar cambios en las configuraciones y el acceso a datos sensibles.
