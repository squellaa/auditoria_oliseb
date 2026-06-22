# 04 - Inyección de Comandos

## Descripción del hallazgo

El portal de SuperMax presenta una vulnerabilidad de Command Injection que permite ejecutar comandos en el servidor subyacente cuando la entrada del usuario no se valida correctamente.

## Payload

```bash
127.0.0.1; cat /etc/passwd
```

## Impacto

El atacante puede obtener control total del servidor web, exfiltrar archivos sensibles, y comprometer la infraestructura de la aplicación. Esto impacta directamente la disponibilidad y la seguridad operativa del portal.

## CVSS 3.1

- Puntaje: 9.8
- Severidad: Crítica

## Defensa recomendada

- Aplicar listas blancas de comandos permitidos.
- Usar APIs seguras que no invoquen comandos del sistema directamente.
- Ejecutar procesos con el menor privilegio posible.
