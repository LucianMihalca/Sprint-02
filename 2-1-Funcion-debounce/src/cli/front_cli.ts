import inquirer from "inquirer";
import { debounce } from "./debounce_cli.js";

// Realiza las preguntas al usuario .
function getInputs() {
  return inquirer.prompt([
    {
      type: "input",
      name: "inputValue",
      message: " Ingrese tu consulta ...",
    },
    {
      type: "number",
      name: "delay",
      message: "Ingrese el retraso para la función debounce:",
      default: () => 250, // Valor por defecto.
      validate: (value) => {
        if (isNaN(value)) {
          return "Por favor, ingrese un número válido.";
        }
        return true;
      },
      filter: (value) => parseInt(value), // Utilizamos la function ParseInt() para validar el valor.
    },
  ]);
}

// Ejecuta el proceso de debounce y espera que se complete antes de preguntar para repetir
function runDebounce(inputValue: string, delay: number): Promise<void> {
  return new Promise<void>((resolve) => {
    const debouncedFunction = debounce((input) => {
      console.log("Debounced value:", input);
      resolve();
    }, delay);

    debouncedFunction(inputValue);
  });
}

// Pregunta al usuario si quiere repetir el proceso
function askRepeat() {
  return inquirer.prompt([
    {
      type: "confirm",
      name: "repeat",
      message: "¿Quieres realizar otra consulta ?",
      default: false,
    },
  ]);
}

//  ejecuta el CLI
function main() {
  getInputs().then((answers) => {
    // se completa el debounce y después vuelve a preguntar si quiere repetir el proceso.
    runDebounce(answers.inputValue, answers.delay).then(() => {
      askRepeat().then((answer) => {
        if (answer.repeat) {
          main(); // Si el usuario quiere repetir, vuelve a llamar a main()
        } else {
          console.log("See you later alligator :)");
          process.exit();
        }
      });
    });
  });
}

main();
