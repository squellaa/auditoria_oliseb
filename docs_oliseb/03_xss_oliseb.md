# 03 - XSS Reflejado

## Descripción del hallazgo

Se detectó vulnerabilidad de Cross-Site Scripting (XSS) reflejado en el portal de SuperMax. El sistema devuelve contenido generado por el usuario sin escapado adecuado, permitiendo la ejecución de scripts en el navegador de la víctima.

## Payload

```js
alert('XSS')
```

## Impacto

Un atacante puede robar sesiones activas de los clientes de SuperMax, obtener cookies de autenticación y suplantar identidades. Esto facilita el acceso no autorizado a cuentas de fidelización y a datos personales.

## CVSS 3.1

- Puntaje: 6.1
- Severidad: Media

## Defensa recomendada

- Escapar y codificar toda salida de datos de usuario en la interfaz.
- Implementar una Política de Seguridad de Contenido (CSP) estricta.
- Validar y sanitizar entradas antes de mostrarlas en el navegador.
