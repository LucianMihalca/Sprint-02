import inquirer from "inquirer";
import { memoize, slowFunction } from "./memoize_cli.js"; // Asegúrate de que la ruta al archivo sea correcta

// Función memoizada 
const fastFunction = memoize(slowFunction);

// Function que pide un numero para ser calculado.
async function calculateFunction() {
  const input = await inquirer.prompt([
    {
      type: "input",
      name: "number",
      message: "Que numero te gustaría calcular ?:",
      validate: (input) => {
        const num = parseInt(input);
        return !isNaN(num) && num >= 0 ? true : "El numero tiene que ser positivo y no te pases :)";
      },
      filter: (input) => parseInt(input),
    },
  ]);

  const startTime = process.hrtime.bigint(); // Inicia el temporizador
  const result = fastFunction(input.number);
  const endTime = process.hrtime.bigint(); // Termina el temporizador

  // Calcula la diferencia de tiempo en milisegundos
  const timeDiff = Number(endTime - startTime) / 1000000;
  console.log(`El resultado es: ${result}`);
  
  // Verificamos si el tiempo del calculo es en tiempo real o del cache, y decimos toFixed(3) nos da el tiempo en formato de 3 dígitos
  if (timeDiff < 1) {
    console.log(`Resultado obtenido del caché en ${timeDiff.toFixed(3)} ms.`);
  } else {
    console.log(`Calculado en ${timeDiff.toFixed(3)} ms.`);
  }
  
  console.log("Caché actual:", fastFunction.cache);
}

// Función que pregunta al usuario si quiere continuar
async function askContinue() {
  const answer = await inquirer.prompt([
    {
      type: "confirm",
      name: "continue",
      message: "¿Desea calcular otro número?",
      default: true,
    },
  ]);

  if (answer.continue) {
    await calculateFunction();
    await askContinue(); // Continua el proceso si la respuesta es afirmativa.
  } else {
    console.log("see you later alligator :)");
    process.exit();
  }
}

// Inicia el CLI
async function main() {
  try {
    await calculateFunction();
    await askContinue();
  } catch (error) {
    console.error("Ha ocurrido un error:", error);
    process.exit(1);
  }
}

main();
