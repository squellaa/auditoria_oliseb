# 05 - Activos y Riesgos

## Activos criticos del portal (clasificados)

| Activo | Clasificacion | Relevancia en rubro retail |
|---|---|---|
| Base de datos de clientes y fidelizacion | Critico | Soporta puntos, compras, identidad de clientes y promociones. |
| Servidor web y API del portal | Critico | Mantiene continuidad del canal digital de atencion y ventas. |
| Sesiones y credenciales de clientes | Alto | Habilita acceso a cuentas, canje de beneficios y datos personales. |
| Reglas de promociones y saldos de puntos | Alto | Impacta ingresos, fraude de beneficios y confianza de clientes. |
| Logs de auditoria y monitoreo | Medio-Alto | Permite deteccion de fraude y trazabilidad para cumplimiento. |

## Riesgos asociados al rubro retail

- Fugas de datos personales y financieros de clientes
- Fraude de puntos de fidelización
- Pérdida de confianza de los clientes y daño reputacional
- Interrupción de servicios de atención al cliente y campañas promocionales
- Incumplimiento de normativas de protección de datos

## Vinculo vulnerabilidad -> activos en riesgo (3.1.2)

- Inyeccion SQL -> base de datos de clientes, reglas de promociones, saldos de puntos.
- XSS reflejado -> sesiones de clientes, credenciales activas, datos personales visibles en cuenta.
- Inyeccion de comandos -> servidor/API, logs de auditoria, posibilidad de acceder a base de datos por pivote.

## Conclusiones de negocio

En SuperMax, el mayor riesgo no es solo tecnico: una brecha puede traducirse en fraude de fidelizacion, perdida reputacional y quiebre de continuidad en campañas comerciales.
