# Bitácora de Prompts - Auditoría SuperMax

## Prompts utilizados

1. Prompt inicial de estructura y estilo:
   - "Estoy desarrollando una auditoría de seguridad para la empresa **SuperMax** (Retail/Supermercado) que custodia tarjetas de fidelización y datos de compra. Mi proyecto usa **React**, **Vite**, **Tailwind CSS** y **Lucide React**. Por favor, ayúdame a crear la estructura de carpetas **src/components/** y asegúrate de que los estilos globales en **src/index.css** incluyan **@import 'tailwindcss';**."

2. Componente de introducción `Resumen.jsx`:
   - "Crea el componente **src/components/Resumen.jsx** para la empresa **SuperMax**. Debe incluir un título con el ícono **Store** de Lucide, un resumen de 3 párrafos explicando que el portal web auditado permite a los clientes consultar sus puntos de fidelidad y hábitos de compra, y por qué es crítico proteger estos activos de información. Usa una tarjeta con sombra y bordes redondeados de Tailwind."

3. Componente `InyeccionSQL.jsx`:
   - "Crea el componente `src/components/InyeccionSQL.jsx` para documentar un hallazgo en SuperMax. Debe mostrar:
     1. Título 'Inyección SQL' con ícono `Database`.
     2. Imagen de evidencia desde `/img/sqli_oliseb.png`.
     3. Bloque de código con el payload `' OR '1'='1`.
     4. Explicación técnica: La aplicación concatena la entrada del usuario en la consulta SQL sin sanitizarla.
     5. Puntaje **CVSS 3.1: 7.5 (Alta)**.
     6. Defensa: Implementar **Consultas Parametrizadas** (Prepared Statements) para separar el código SQL de los datos del cliente. Usa Tailwind CSS para crear tarjetas laterales de prevención y mitigación."

4. Componente `Matriz.jsx`:
   - "Crea el componente **src/components/Matriz.jsx** que represente una **Matriz de Riesgo con Mapa de Calor** para SuperMax. Debe ser una tabla de 5x5 (Probabilidad vs Impacto). Colorea las celdas de mayor riesgo en rojo, medio en amarillo y bajo en verde. Incluye una leyenda que explique que el riesgo más alto es la filtración de la base de datos de clientes de fidelización."

5. Ensamblado en `App.jsx`:
   - "Modifica **src/App.jsx** para que sea el contenedor principal del informe. Debe tener un encabezado oscuro (**bg-slate-900**) con un ícono de **Shield** y el nombre 'Auditoría de Seguridad - SuperMax'. Importa y monta los componentes **Resumen**, **InyeccionSQL** y **Matriz** en un contenedor centrado con un ancho máximo de 4xl."

## Correcciones y observaciones

- Se corrigieron problemas de codificación UTF-8 en `Resumen.jsx` y `CommandInjection.jsx` después de que el contenido inicial generado contenía caracteres no válidos.
- Se agregó el componente `Matriz.jsx` y se verificó su renderizado en `App.jsx`.
- Se ajustó `vite.config.js` para incluir `@tailwindcss/vite` y procesar correctamente los estilos de Tailwind.
- Se corregieron los nombres de las imágenes de evidencia (`*.PNG` a `*.png`) para que Vercel las sirva correctamente en producción.
- `npm run build` se ejecutó con éxito localmente tras las correcciones.

## Validación del despliegue

- Se detectó inicialmente que las imágenes de `/img/` devolvían 404 en el sitio desplegado.
- Se arregló el problema renombrando las capturas a minúsculas y confirmando que el sitio despliega el componente `Matriz`.
- Se recomienda verificar de nuevo el despliegue tras el siguiente push para confirmar que Vercel actualice el sitio con las imágenes corregidas.
