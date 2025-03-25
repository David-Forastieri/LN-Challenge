const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',   //ruta del archivo de entrada
  output: {
    path: path.resolve(__dirname, 'dist/public'),   //ruta donde se guardara el archivo
    filename: 'bundle.js',   //nombre del archivo de salida compilado
  },
  devtool: 'inline-source-map', 
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,    //procesa archivos js y jsx
        exclude: /node_modules/,     //excluye carpetas node_modules
        use: 'babel-loader',      // Convierte JSX/ES6+ a JavaScript compatible
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
