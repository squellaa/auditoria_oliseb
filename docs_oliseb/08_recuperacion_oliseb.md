# 08 - Plan de Recuperación ante Desastres (DR)

## Objetivo

Establecer un plan para que SuperMax recupere rápidamente su portal de clientes tras un incidente o ataque grave.

Objetivos operativos:

- RTO objetivo: 4 horas para restablecer el portal de clientes.
- RPO objetivo: 30 minutos para perdida maxima tolerable de datos.

## Mejoras tecnologicas (3.1.6)

- WAF administrado frente al portal para filtrar SQLi/XSS/Command Injection.
- Segmentacion de red entre capa web, aplicacion y base de datos.
- Backups inmutables de base de datos y archivos de configuracion critica.
- SIEM centralizado para deteccion temprana y respuesta coordinada.

## Componentes del plan DR

- Copias de seguridad regulares de la base de datos de clientes y de los archivos de configuración del portal.
- Almacenamiento de backups en un sitio separado y seguro, fuera de la red principal.
- Procedimientos de restauración documentados y probados periódicamente.
- Plan de comunicacion para informar a TI, seguridad, gerencia, legal y clientes afectados.

## Pasos de recuperación

1. Detectar el incidente y aislar el sistema afectado.
2. Evaluar el alcance del daño y confirmar si la base de datos o el servidor web están comprometidos.
3. Restaurar la base de datos desde la última copia de seguridad confiable.
4. Verificar la integridad del sistema restaurado.
5. Reiniciar el portal y monitorizar el funcionamiento.
6. Notificar a partes interesadas segun severidad y obligaciones regulatorias.
7. Ejecutar postmortem y actualizar controles en un maximo de 72 horas.

## Pruebas y mantenimiento

- Ejecutar simulacros de recuperación al menos una vez cada seis meses.
- Revisar y actualizar el plan cuando cambie la infraestructura o el modelo de datos.
- Mantener un registro de incidentes y lecciones aprendidas.

## Referencias de estandar

- NIST SP 800-34 (Contingency Planning Guide).
- NIST SP 800-61 (Computer Security Incident Handling).
- ISO 22301 (Business Continuity Management).
