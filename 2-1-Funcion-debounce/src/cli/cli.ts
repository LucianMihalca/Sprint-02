import inquirer from 'inquirer'
import { ValidTypes, debounce } from "../debounce";

// Pregunta al usuario cuánto tiempo debe durar el retardo
const questions = [
    {
      type: 'input',
      name: 'delay',
      message: '¿Cuántos milisegundos debe durar el retardo?',
      validate: function(value: string) {
        var valid = !isNaN(parseFloat(value));
        return valid || 'Por favor introduce un número';
      },
      filter: Number
    }
  ];
  
  inquirer.prompt(questions).then(answers => {
    const { delay } = answers;
  
    // Usa tu función debounce aquí con el retardo especificado por el usuario
    const debouncedFunction = debounce(() => {
      console.log(`Función debounced llamada después de ${delay}ms`);
    }, delay);
  
    // Simula eventos rápidos
    setInterval(() => {
      debouncedFunction('Evento');
    }, 100);
  });