const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',      //indica que el codigo es para node
  mode: 'development',
  entry: './server/server.js',     //ruta de entrada al server
  output: {
    path: path.resolve(__dirname, 'dist/server'),    //ruta donde se guardara el archivo compilado
    filename: 'server.js',    //nombre del archivo de salida compilado
    libraryTarget: 'commonjs2',
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
