# Resumen de SuperMax

SuperMax es una empresa del rubro retail dedicada a la gestión de un portal de clientes que custodia tarjetas de fidelización, datos de compra y el historial transaccional de sus usuarios. Este portal permite a los clientes consultar puntos acumulados, canjear beneficios y revisar su comportamiento de compra, lo que lo convierte en un activo crítico para la operación y la confianza del negocio.

## Importancia del portal de clientes

El portal constituye un activo crítico porque almacena información sensible de los clientes y coordina la experiencia de fidelización. La pérdida o corrupción de estos datos impactaría directamente en la reputación de SuperMax, la continuidad del servicio y el cumplimiento de normativas de protección de datos.

## Riesgos asociados

Dado que el portal maneja tarjetas de fidelización y datos de compra, cualquier vulnerabilidad permite el acceso a información financiera y personal. Esto puede traducirse en fraude de puntos, suplantación de identidad, acceso no autorizado a cuentas de clientes y abuso comercial.

## Tabla consolidada CVSS 3.1 (Informe A)

| Vulnerabilidad | CVSS 3.1 | Severidad | Riesgo negocio (P x I) |
|---|---:|---|---:|
| Inyeccion SQL | 8.2 | Alta | 16 (4 x 4) |
| XSS Reflejado | 6.1 | Media | 9 (3 x 3) |
| Inyeccion de Comandos | 9.8 | Critica | 20 (4 x 5) |

La priorizacion se realiza combinando el puntaje tecnico CVSS con el impacto de negocio para SuperMax.
