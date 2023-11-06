## === ⚡️ Sprint 02 ⚡️ ===

El objetivo principal de este Sprint es asegurar la comprensión y la implementación efectiva de los conceptos y funcionalidades clave que se detallan a continuación:


1. **Programación funcional:**
   La programación funcional es un paradigma de programación que se centra en el uso de funciones para resolver problemas.
   Se basa en el concepto de que un programa puede ser visto como una serie de evaluaciones de funciones matemáticas y evita el uso de cambios de estado y datos mutables.

# Algunos de los principios más importantes son:

🙀 Funciones puras
🙀 Inmovilidad
🙀 Recursión
🙀 Composición de funciones

2. **Callbacks:**
   Una función de callback es una función que se pasa a otra función como un argumento,
   que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

3. **Función debounce:**
   Es una técnica para controlar la frecuencia de ejecución de una función en respuesta a eventos como clics,
   desplazamientos u otras acciones del usuario.
   El objetivo de esta función es evitar que se ejecute demasiado rápida y repetidamente, sobre todo cuando los eventos se producen con mucha frecuencia.
   Básicamente, la función debounce retrasa la ejecución hasta que ha transcurrido un cierto tiempo sin que se produzca ningún otro evento.

4. **Función throttle:**
   Sirve para limitar la frecuencia de ejecución de una función en respuesta a eventos repetidos.
   A diferencia de la función debounce, que retrasa la ejecución de la función hasta que no se produce ningún evento durante un determinado tiempo,
   la función throttle permite ejecutar la función a intervalos de tiempo regulares.
   En otras palabras, la función throttle establecerá un intervalo de tiempo entre las ejecuciones de la función para asegurarse de que no se ejecute con más frecuencia de lo necesario.

5. **Función memoize:**
   Permite optimizar el rendimiento en funciones que tienen gran complejidad computacional o se ejecutan con frecuencia.
   Consiste en guardar en una caché los resultados de las llamadas anteriores y los asocia con los valores de entrada correspondientes.
   Cuando la misma función se invoca con los mismos valores de entrada, en lugar de ejecutar toda la lógica de la función, se comprueba primero si ya existe un resultado almacenado para esos valores y se devuelve directamente. Esto ahorra tiempo de cálculo y mejora el rendimiento de la función.

## Entorno de Desarrollo

En este proyecto, utilizaremos el editor de código Visual Studio Code (VisualCode) como nuestra herramienta principal de desarrollo.

## Instrucciones de Uso

A continuación, se proporcionan instrucciones para comenzar a trabajar en este proyecto:

1. Clona este repositorio a tu máquina local.
2. Instala las dependencias necesarias usando `npm install` o `yarn install`, dependiendo de tu gestor de paquetes.
3. Comienza a trabajar en las tareas asignadas para este sprint, siguiendo los principios aprendidos.

## Contribuciones

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork de este repositorio.
2. Crea una rama (branch) para tu contribución.
3. Realiza tus cambios y asegúrate de que las pruebas pasen.
4. Envía un pull request con tus cambios.

## Licencia

Este proyecto se distribuye bajo la licencia MIT. Consulta el archivo [LICENSE.md](LICENSE.md) para obtener más detalles.

## Contacto

Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarnos a través de [correo electrónico](correo@example.com)

---

# 🚀 Inicialización del Proyecto --> valido para los 3 ejercicios

⚡️ npm run build : compila TypeScript en JavaScript.

⚡️ npm run build-webpack: Ejecuta webpack .

⚡️ npm run test: Ejecuta pruebas usando Jest.

⚡️ npm run cli: Ejecuta la Interfaz de Línea de Comandos (CLI).

---

📝 devDependencies:

- Para instalar `@types/inquirer`:
  npm install @types/inquirer --save-dev

- Para instalar `@types/jest`:
  npm install @types/jest --save-dev

- Para instalar `@types/node`:
  npm install @types/node --save-dev

- Para instalar `jest`:
  npm install jest --save-dev

- Para instalar `jest-environment-jsdom`:
  npm install jest-environment-jsdom --save-dev

- Para instalar `mock-local-storage`:
  npm install mock-local-storage --save-dev

- Para instalar `ts-jest`:
  npm install ts-jest --save-dev

- Para instalar `ts-loader`:
  npm install ts-loader --save-dev

- Para instalar `ts-node`:
  npm install ts-node --save-dev

- Para instalar `typescript`:
  npm install typescript --save-dev

- Para instalar `webpack`:
  npm install webpack --save-dev

- Para instalar `webpack-cli`:
  npm install webpack-cli --save-dev

## 🌈 Entrega 2.1: Función debounce
En esta tarea debes implementar una función debounce.
La función debe ser implementada utilizando TypeScript y TDD.

# ⭐️ Nivel ⭐️
- Utiliza pruebas (tests) para comprobar la funcionalidad de la aplicación.

# ⭐️ ⭐️ Nivel ⭐️ ⭐️
- Crea una interfaz de línea de comandos (CLI) para comprobar la funcionalidad de la aplicación.

# ⭐️ ⭐️⭐️ Nivel ⭐️ ⭐️ ⭐️
- Crea un front-end para comprobar la funcionalidad de la aplicación.

----

## 🌈 Entrega 2.2: Función throttle
En esta tarea debes implementar una función throttle utilizando TypeScript y TDD.

# ⭐️ Nivel ⭐️
- Utiliza pruebas (tests) para comprobar la funcionalidad de la aplicación.

# ⭐️ ⭐️ Nivel ⭐️ ⭐️
- Crea una interfaz de línea de comandos (CLI) para comprobar la funcionalidad de la aplicación.

# ⭐️ ⭐️⭐️ Nivel ⭐️ ⭐️ ⭐️
- Crea un front-end para comprobar la funcionalidad de la aplicación.

----

## 🌈 Entrega 2.3: Función memoize
En esta tarea debes implementar una función throttle utilizando TypeScript y TDD.

# ⭐️ Nivel ⭐️
- Utiliza pruebas (tests) para comprobar la funcionalidad de la aplicación.

# ⭐️ ⭐️ Nivel ⭐️ ⭐️
- Crea una interfaz de línea de comandos (CLI) para comprobar la funcionalidad de la aplicación.

# ⭐️ ⭐️⭐️ Nivel ⭐️ ⭐️ ⭐️
- Crea un front-end para comprobar la funcionalidad de la aplicación.


