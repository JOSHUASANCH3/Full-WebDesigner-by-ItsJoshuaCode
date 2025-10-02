# ☕ Tienda de Ropa - Ecommerce

- Lighthouse Score [ 🔺 0 - 49%] [ 🟧 50 - 89%] [ 🟢 90 - 100%]

  - ![🚀_PERFORMANCE](https://img.shields.io/badge/🚀_PERFORMANCE-50%25-red)
  - ![🔍_ACCESIBILITY](https://img.shields.io/badge/🔍_ACCESIBILITY-85%25-yellow)
  - ![📊_BEST PRACTICES](https://img.shields.io/badge/📊_BEST_PRACTICES-100%25-green)
  - ![📝_SEO](https://img.shields.io/badge/📝_SEO-100%25-green)



## 🧾 Descripción

- **Tienda Eccommerce de Ropa** es una pagina Ecommerce solo el front-end, desarrollada con HTML, CSS y JavaScript.  
  - Esta pagina principal posee una estructura semantica en el HTML
  - Se usara como base para las siguientes buenas practicas de desarrollo
    

Este proyecto fue optimizado siguiendo las buenas prácticas de:
- HTML SEMANTICO
- CSS CRID - FLEX - RESPONSIVE
- JS CONFIG  <!-- Aun no esta desarrollado  -->



<!-- Es el listado de commits para su registro de desarrollo -->
<!-- 
git commit -m "🗓 Day #$: Lo que se avanzo en ese dia." \
-m "📦 feat: Nueva funcionalidad." \
-m "🛠️ fix: Corrección de bugs." \
-m "✨ style: Cambios en CSS/UI." \
-m "📝 docs : Actualización de documentación." \
-m "🔧 refactor : Mejoras de código sin cambiar funcionalidad." \
-m "🚀 perf: Optimizaciones de rendimiento." 
-->


<!-- 
# Tag específico para cada version del proyecto
git tag -a "week-2/ecommerce/index-v1.0.0" -m "Se completo la pagina Index." \
-m "Componentes Implementados:" \
-m "✅ Pagina Principal (index.html)" \
-m "✅ Pagina Parcial del Footer al index (partials/footer.html)" \
-m "✅ Implementacion del CSS para el diseño y responsividad" \
-m "✅ Configuracion del JavaScript" \
-m " " \
-m "Archivos Incluidos:" \
-m " - pages/index.html" \
-m " - pages/partials/footer.html" \
-m " - assets/css/main.css" \
-m " - assets/config/main.js" \
-m " - README.md" \
-m " " \
-m " Project path: week-2/Ecommerce-html-css-js" \
-->



## 📸 Notas
- **Desarrollo de pagina index.html segun los dias tomados** 
  - Dia 10: se agrego la seccion de home y categorias. Se realizo el HTML y CSS correspondiente
  - Dia 12: se agrego un nueva funcionalidad el swiper y botones al archivo pages/index con su html y css
  - Dia 13: se termino la seccion products con sus html y css
  - Dia 13: se agrego nueva funcionalidad products tabs, para identificar cada categoria por tags independiente
  - Dia 13: se corrigieron todos los errores del desarrollo de la pagina hasta la seccion products
  - Dia 14: Se termino la seccion de products y correcion de diseño.
  - Dia 15: Completado la seccion de Deals.
  - Dia 15: Completado la seccion de new Arrivals.
  - Dia 15: Se creo una seccion #showcase.
  - Dia 16: Se completo la seccion showcase
  - Dia 16: Se agrego la seccion footer
  - Dia 17: Se completo la seccion partials/footer con HTML, CSS y JS para su funcionamiento



## 🚀 Tecnologías utilizadas

- Sin documentacion



## 🛠️ Estructura del proyecto

```bash

/ecommerce-project
│
├── /assets
│   ├── /css
│   │   └── styles.css
│   ├── /js
│   │   └── main.js
│   ├── /img
│   │   └── logo.png   # Aqui se ocupan las librerias de imagen pero estan no se subiran como tal solo icono con blue-ray
│   ├── /fonts         # No se ocupan librerias locales de momento solo las de google fonts
│   └── /vendor        # Librerías externas como Bootstrap, Swiper, etc.
│
├── /pages
│   ├── accounts.html
│   ├── cart.html
│   ├── checkout.html
│   ├── compare.html
│   ├── details.html
│   ├── login-register.html
│   ├── shop.html
│   └── index.html     # También lo puedes dejar en la raíz si prefieres
│
├── /partials
│   ├── header.html
│   ├── footer.html
│   ├── navbar.html
│   └── sidebar.html
│
├── /data
│   └── products.json  # Si manejas datos en JSON
│
└── README.md

```