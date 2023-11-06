import { view, CalculationResult } from "./vista";
import { fastFunction } from "./modelo";

const controller = {
  handleDefaultInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    try {
      const num = this.parseInput(inputElement.value);
      const calculationResult = this.calculateOrRetrieveResult(num);
      view.updateUI(num, calculationResult);
    } catch (error) {
      if (error instanceof Error) {
        view.displayError(error.message);
      }
    }
  },

  handleKeypress(event: KeyboardEvent): void {
    if (event.key === "Enter") {
      event.preventDefault();
      const inputElement = event.target as HTMLInputElement;
      // Crear un objeto que tenga la misma estructura que un Event
      // y usar type assertion para asegurarse de que TypeScript lo trate como tal.
      const fakeEvent: Event = new Event("change") as Event;
      Object.defineProperty(fakeEvent, "target", { value: inputElement, enumerable: true });

      this.handleDefaultInput(fakeEvent);
      inputElement.value = "";
    }
  },

  resetAllFields(): void {
    view.resetAllFields();
  },

  parseInput(inputValue: string): number {
    if (!inputValue.trim()) {
      throw new Error("Por favor, introduce un valor.");
    }
    const num = parseInt(inputValue, 10);
    if (isNaN(num)) {
      throw new Error("Por favor, introduce un valor numérico.");
    }
    if (num < 1 || num > 40) {
      throw new Error("Introduce un número entre 1 y 40.");
    }
    return num;
  },

  calculateOrRetrieveResult(num: number): CalculationResult {
    const key = JSON.stringify([num]); // Pre-genera la llave para verificar en el cache.
    const isCached = fastFunction.cache.hasOwnProperty(key);
    const startTime = performance.now();
    const result = fastFunction(num);
    const endTime = performance.now();
    return { result, timeTaken: endTime - startTime, isCached };
  },

  init(): void {
    const input = document.querySelector("input");
    if (input) {
      input.addEventListener("change", (e: Event) => this.handleDefaultInput(e));
      input.addEventListener("keypress", (e: Event) => this.handleKeypress(e as KeyboardEvent));
    }
    const resetButton = document.getElementById("resetButton");
    if (resetButton) {
      resetButton.addEventListener("click", () => this.resetAllFields());
    }
  },
};

controller.init(); // Start the application
