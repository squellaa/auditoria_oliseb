# 02 - Inyección SQL

## Descripción del hallazgo

Se identificó una vulnerabilidad de Inyección SQL en el portal de clientes de SuperMax. El sistema construye consultas SQL concatenando directamente la entrada del usuario, lo que permite manipular la lógica de la consulta.

## Payload

```sql
' OR '1'='1
```

## Impacto

Este payload permite obtener acceso no autorizado a datos de la base de datos de clientes de fidelización, incluyendo saldos de puntos, historial de compras y credenciales en formato hash. SuperMax corre el riesgo de exfiltración masiva de información confidencial.

## CVSS 3.1

- Puntaje: 7.5
- Severidad: Alta

## Defensa recomendada

- Implementar Consultas Parametrizadas (Prepared Statements) en todas las consultas SQL.
- Separar el código SQL de los datos de entrada del cliente.
- Validar y sanitizar las entradas antes de enviarlas al backend.
