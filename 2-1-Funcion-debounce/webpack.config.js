const path = require('path');

module.exports = {
  entry: './src/controlador',  // tu archivo de entrada
  output: {
    filename: 'app.js',  // el nombre del archivo de salida
    path: path.resolve(__dirname, 'dist/htmlApp'),  // la carpeta donde se guardará el archivo de salida
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};