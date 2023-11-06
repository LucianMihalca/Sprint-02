import inquirer from "inquirer";
import { throttle } from "./throttle_cli.js"; 

// Función que pide el delay.
function getDelay() {
  return inquirer.prompt([
    {
      type: "number",
      name: "delay",
      message: "Que delay te gustaría aplicar ?:",
      default: () => 250, // Valor predeterminado de delay
      validate: (value) => {
        if (isNaN(value)) {
          return "El valor tiene que ser un numero...";
        }
        return true;
      },
      filter: (value) => Number(value), // Asegúrate de que el valor es un número
    },
  ]);
}

// Función que pide lo que se quiere consultar.

async function getText(throttleDelay: number): Promise<void> {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "value",
      message: "Ingrese un valor para aplicar el throttle:",
    },
  ]);

  runThrottle(answers.value, throttleDelay);
}

// Ejecuta la lógica de throttle 
function runThrottle(value: string, delay: number) {
  const throttledFunction = throttle((input) => {
    console.log("Throttled value:", input);
  }, delay);

  throttledFunction(value);
}

// Le pregunta al usuario si quiere modificar la consulta y el delay .
async function askRepeat(throttleDelay: number): Promise<void> {
  const answers = await inquirer.prompt([
    {
      type: "confirm",
      name: "repeat",
      message: "¿Quereres hacer otra consulta?",
      default: true,
    },
    {
      type: "confirm",
      name: "changeDelay",
      message: "¿Quieres cambiar el delay?",
      default: false,
      when: (answers) => answers.repeat,
    },
  ]);
  if (answers.repeat) {
    if (answers.changeDelay) {
      main(); //  reinicia el proceso
    } else {
      getText(throttleDelay); // Si no, solo obtiene un nuevo texto para aplicar throttle
    }
  } else {
    console.log("See you later alligator :)");
    process.exit();
  }
}

// Función que ejecuta el CLI 
async function main() {
    try {
      const delayAnswer = await getDelay();
      await getText(delayAnswer.delay);
      await askRepeat(delayAnswer.delay);
    } catch (error) {
      console.error("An error occurred:", error);
      process.exit(1);
    }
  }
  
  main();
  
