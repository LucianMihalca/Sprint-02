import inquirer from "inquirer";
import { debounce } from "./debounce_cli.js";

let counter = 0;

let debouncedFunction = debounce((arg) => {
  console.log(`Callback ejecutado con argumento: ${arg}. Número de peticiones intentadas: ${counter}`);
  // Después de ejecutar el callback, preguntamos si el usuario quiere continuar o salir.
  askToContinue();
}, 300);

const askQuestions = () => {
  counter = 0; // Reiniciamos el contador cuando empezamos un nuevo ciclo de preguntas.
  const questions = [
    {
      type: "input",
      name: "arg",
      message: "Introduce el argumento presiona Enter (string o número):",
      // Aquí incrementamos el contador cada vez que el usuario escribe algo.
      transformer: (input: string) => {
        counter++;
        return input;
      },
    },
  ];

  inquirer.prompt(questions).then((answers) => {
    const { arg } = answers;
    debouncedFunction(arg);
  });
};

const askToContinue = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "continue",
        message: "¿Qué deseas hacer a continuación?",
        choices: ["Continuar", "Salir"],
        default: "Continuar",
      },
    ])
    .then((answer) => {
      if (answer.continue === "Continuar") {
        askQuestions(); // Reiniciamos el ciclo de preguntas.
      } else {
        // Salimos del programa.
        console.log("Saliendo del programa.");
        process.exit(0);
      }
    });
};

// Llamamos a la función para iniciar el ciclo de preguntas.
askQuestions();
