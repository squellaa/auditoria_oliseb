# 06 - Matriz de Riesgo

La matriz de riesgo de SuperMax cruza la probabilidad de ocurrencia con el impacto sobre los activos de fidelizacion y datos de compra.
Se utiliza la regla: Riesgo = Probabilidad x Impacto.

| Impacto \ Probabilidad | 1 (Baja) | 2 | 3 | 4 | 5 (Alta) |
|------------------------|----------|---|---|---|----------|
| 5 (Critico)            | 5        | 10 | 15 | 20 | 25     |
| 4 (Alto)               | 4        | 8  | 12 | 16 | 20     |
| 3 (Medio)              | 3        | 6  | 9  | 12 | 15     |
| 2 (Bajo)               | 2        | 4  | 6  | 8  | 10     |
| 1 (Insignificante)     | 1        | 2  | 3  | 4  | 5      |

## Ubicacion de hallazgos en la matriz

- Inyeccion de comandos: Probabilidad 4, Impacto 5, Riesgo 20 (Critico).
- Inyeccion SQL: Probabilidad 4, Impacto 4, Riesgo 16 (Alto).
- XSS reflejado: Probabilidad 3, Impacto 3, Riesgo 9 (Medio).

## Justificacion de priorizacion

- Inyeccion de comandos queda en prioridad 1 porque compromete infraestructura y servicio.
- Inyeccion SQL queda en prioridad 2 por exposicion masiva de datos de clientes.
- XSS reflejado queda en prioridad 3 porque depende de interaccion de la victima.

## Leyenda

- Verde: 1 a 7 (riesgo bajo).
- Amarillo: 8 a 14 (riesgo medio).
- Rojo: 15 a 25 (riesgo alto/critico).

## Riesgo principal

El riesgo mas alto es la inyeccion de comandos sobre backend, que puede derivar en control del servidor y afectacion total del negocio digital.
