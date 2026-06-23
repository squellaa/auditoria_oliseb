# Bitacora de prompts IA - Auditoria SuperMax

## Herramientas usadas

- GitHub Copilot Chat (VS Code)
- Calculadora CVSS v3.1 de FIRST

## Prompts especificos por seccion

1. SQL Injection (02_sqli_oliseb.md)
   - Prompt: "Para SuperMax (portal de fidelizacion), explica por que funciona el payload ' OR '1'='1 en DVWA Low, propone CVSS 3.1 y separa prevencion vs mitigacion con controles aplicables a negocio retail".
   - Uso: redaccion tecnica del mecanismo y controles.

2. XSS Reflejado (03_xss_oliseb.md)
   - Prompt: "En contexto de SuperMax, explica impacto de <script>alert('XSS')</script>, asigna CVSS 3.1 y define prevencion (escape/CSP) y mitigacion (cookies, monitoreo)".
   - Uso: justificar riesgo sobre sesiones de clientes.

3. Inyeccion de Comandos (04_comandos_oliseb.md)
   - Prompt: "Para DVWA Command Injection con 127.0.0.1; cat /etc/passwd, describe por que funciona, CVSS, impacto en CIA y controles de contencion para servidor".
   - Uso: priorizacion del riesgo critico.

4. Matriz de riesgo (06_matriz_oliseb.md)
   - Prompt: "Construye matriz 5x5 coherente con riesgo = probabilidad x impacto y ubica SQLi, XSS y Command Injection con justificacion de puntaje".
   - Uso: corregir matriz invertida y dejar trazabilidad.

## Que acepte

- Estructura base de componentes React para secciones del informe.
- Propuesta inicial de textos de impacto y defensas tecnicas.
- Formato visual de tarjetas para CVSS y hallazgos.

## Que corregi manualmente

- Corregi CVSS de SQLi (de 7.5 a 8.2) para mantener consistencia con el analisis final.
- Corregi la matriz de riesgo que estaba invertida (antes mostraba alto riesgo en zonas de bajo impacto).
- Separe explicitamente prevencion (3.1.4) y mitigacion (3.1.5) en cada vulnerabilidad.
- Agregue referencia a marcos OWASP/NIST en controles de mitigacion.
- Agregue evidencia con pie descriptivo en cada ataque.

## Reflexion final

La IA fue util para acelerar estructura y redaccion tecnica, pero no reemplaza el criterio del auditor. El mayor valor estuvo en iterar prompts especificos por vulnerabilidad y empresa, y luego validar manualmente coherencia entre evidencia, CVSS, matriz y controles.
