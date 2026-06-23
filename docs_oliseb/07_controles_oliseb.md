# 07 - Controles de Prevención y Mitigación

## Politicas de prevencion (3.1.4)

- Riesgo 20 (Inyeccion de comandos): prohibir ejecucion de shell con entrada de usuario y usar solo APIs seguras.
- Riesgo 16 (Inyeccion SQL): prepared statements obligatorios y validacion tipada en backend.
- Riesgo 9 (XSS reflejado): output encoding contextual + CSP estricta + sanitizacion server-side.
- En sesion de clientes: cookies de sesion con HttpOnly, Secure y SameSite.

## Controles de mitigacion (3.1.5)

- Riesgos rojos (20 y 16): WAF con reglas SQLi/XSS y bloqueo adaptativo por reputacion de IP.
- Riesgos rojos (20 y 16): segmentacion de red entre web, app y BD para limitar movimiento lateral.
- Riesgo naranjo (9): monitoreo de sesiones anormales y cierre automatizado de cuentas comprometidas.
- Todos los riesgos: SIEM + correlacion de eventos para deteccion temprana y respuesta.

## Marco de referencia

- OWASP Top 10 2021 (A03 Injection).
- CIS Controls v8 (4 Secure Configuration, 8 Audit Log Management, 13 Network Monitoring).
- NIST SP 800-53 (SI-4, IR-4, AC-6).
