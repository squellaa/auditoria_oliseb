# 08 - Plan de Recuperación ante Desastres (DR)

## Objetivo

Establecer un plan para que SuperMax recupere rápidamente su portal de clientes tras un incidente o ataque grave.

## Componentes del plan

- Copias de seguridad regulares de la base de datos de clientes y de los archivos de configuración del portal.
- Almacenamiento de backups en un sitio separado y seguro, fuera de la red principal.
- Procedimientos de restauración documentados y probados periódicamente.
- Plan de comunicación para informar al equipo de TI y a los responsables de seguridad.

## Pasos de recuperación

1. Detectar el incidente y aislar el sistema afectado.
2. Evaluar el alcance del daño y confirmar si la base de datos o el servidor web están comprometidos.
3. Restaurar la base de datos desde la última copia de seguridad confiable.
4. Verificar la integridad del sistema restaurado.
5. Reiniciar el portal y monitorizar el funcionamiento.

## Pruebas y mantenimiento

- Ejecutar simulacros de recuperación al menos una vez cada seis meses.
- Revisar y actualizar el plan cuando cambie la infraestructura o el modelo de datos.
- Mantener un registro de incidentes y lecciones aprendidas.
