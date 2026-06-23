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

Mapa de calor:

- Verde: 1 a 7
- Amarillo/Naranjo: 8 a 14
- Rojo: 15 a 25

## Ubicacion de hallazgos en la matriz

- Inyeccion de comandos: Probabilidad 4, Impacto 5, Riesgo 20 (Rojo).
- Inyeccion SQL: Probabilidad 4, Impacto 4, Riesgo 16 (Rojo).
- XSS reflejado: Probabilidad 3, Impacto 3, Riesgo 9 (Amarillo/Naranjo).

En el mapa de calor del sitio React, cada ataque queda marcado sobre su celda con su etiqueta y coordenada (P x I), para visualizar directamente por que queda en zona roja o naranjo.

## Justificacion de priorizacion

- Inyeccion de comandos queda en prioridad 1 porque compromete infraestructura y continuidad del portal retail. CVSS 9.8 y riesgo 20.
- Inyeccion SQL queda en prioridad 2 por exposicion masiva de datos de clientes y fraude de beneficios. CVSS 8.2 y riesgo 16.
- XSS reflejado queda en prioridad 3 porque depende de interaccion de la victima, aunque mantiene riesgo sobre sesiones. CVSS 6.1 y riesgo 9.

Detalle de puntaje:

- Riesgo 20 (CMD) = Probabilidad 4 (explotacion factible) x Impacto 5 (compromiso de servidor).
- Riesgo 16 (SQLi) = Probabilidad 4 (payload repetible) x Impacto 4 (exfiltracion masiva de clientes).
- Riesgo 9 (XSS) = Probabilidad 3 (requiere interaccion) x Impacto 3 (secuestro de sesion y fraude).

## Coherencia CVSS + Matriz (3.1.3)

El orden de atencion es consistente entre severidad tecnica (CVSS) y riesgo de negocio (matriz). Esto evita priorizacion arbitraria y asegura foco en impactos operacionales del rubro.

## Riesgo principal

El riesgo mas alto es la inyeccion de comandos sobre backend, que puede derivar en control del servidor y afectacion total del negocio digital.
