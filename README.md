# Podify

Esta aplicación es una Single Page Application (SPA) que permite a los usuarios escuchar podcasts musicales

## Descripción

Podify permite filtrar los podcasts por título y autor en tiempo real, almacenando el listado de podcasts en cliente para evitar solicitudes innecesarias al servicio externo. Al pulsar sobre un podcast, el usuario es dirigido a una vista con detalles del mismo, donde se visualiza el título del podcast, su descripción y un reproductor de audio para reproducir el podcast.

### Dependencias y librerías
- Creado con **Node V18.16.0**

* Vite V4.3.2
* React V18.2.0
* Dompurify V3.0.2
* React-router-dom V6.11.1
* Sass V1.62.1
* Swr V2.1.5
* Playwright V1.33.0

## Instalación

Situate en la carpeta raíz del proyecto **en la terminal** y ejecuta el siguiente comando para instalar las dependencias del proyecto e iniciar el proyecto en modo desarrollo

```
npm install && npm run dev
```

### Pre-procesador CSS

Para utilizar el preprocesador Sass en desarrollo, necesitas instalar el plugin de Sass en tu editor de código o instalar el siguiente paquete en la carpeta raíz del proyecto

```
npm install -g sass
```

Una vez instalado, ejecuta el siguiente comando para compilar los estilos de Sass en CSS

```
sass --watch src/styles/index.sass src/styles/index.css
```

## Testing

Para ejecutar los tests, situate en la carpeta raíz del proyecto **en la terminal** y ejecuta el siguiente comando

```
npm run test
```

Esto ejecutará los test y mostrará el resultado en el navegador

## Ayuda

* Cualquier sugerencia o mejora es bienvenida

## Autores

Contribuidores y contacto

#### Manu Torres - [Portfolio](https://manutorres.dev)

## Licencia

This project is licensed under the MIT License - see the LICENSE.md file for details
