import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Cuando se utilizan módulos ES, __dirname y __filename no están definidos, por lo que se deben obtener de esta manera
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  entry: './src/controlador', // tu archivo de entrada
  output: {
    filename: 'index.js', // el nombre del archivo de salida
    path: path.resolve(__dirname, 'dist/'), // la carpeta donde se guardará el archivo de salida
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
