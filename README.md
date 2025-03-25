## REQUISITOS PREVIOS PARA LA INSTALACION
- Node js: version 16 o superior


## INSTALACION Y VISUALIZACION DEL PROYECTO
1. Clonar el repositorio

2. Instalar dependencias con 
      `npm install`

3. Este proyecto usa webpack para compilar el cliente y el servidor, ejecutar los siguiente comandos
      `npx webpack --config webpack.client.config.js`
      `npx webpack --config webpack.server.config.js`

4. Ejecutar el servidor con 
      `node server/server.js`

5. Abrir en el navegador la url 
      `http://localhost:3000`


## DEPENDENCIAS PRINCIPALES
- express: para el servidor
- react: para el cliente
- react-dom: para el cliente
- webpack: empaquetador de modulos
- html-webpack-plugin: generacion de archivos html
- webpack-node-externals: para que webpack no incluya dependencias de node


## DEPENDENCIAS DE DESARROLLO
- @babel/core: para transpilar código
- babel-loader: para transpilar código jsx/ES6+
- webpack-dev-server: para el servidor
- @testing-library/jest-dom: para testear componentes


## TESTING
1. Ejecutar los siguientes comandos para ejecutar los tests unitarios
      `npm test`
