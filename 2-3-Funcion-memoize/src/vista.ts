export interface CalculationResult {
    result: number;
    timeTaken: number;
    isCached: boolean;
  }
  
  export const view = {
    updateUI(num: number, calculationResult: CalculationResult): void {
      
      const memoizeText = document.getElementById("memoize") as HTMLElement;
      const defaultText = document.getElementById("default") as HTMLElement;
      const errorText = document.getElementById("error") as HTMLElement;
  
      // Desestructuración del objeto calculationResult
      const { result, timeTaken, isCached } = calculationResult;
      if (isCached) {
        memoizeText.textContent = `Tiempo ejecución (cache): ${timeTaken.toFixed(2)} ms`;
      } else {
        defaultText.textContent = `Tiempo ejecución: ${timeTaken.toFixed(2)} ms.`;
      }
      errorText.textContent = `Resultado para ${num} es: ${result}`;
    },
  
    displayError(message:string): void {
      
      const errorText = document.getElementById("error") as HTMLElement;
      const defaultText = document.getElementById("default") as HTMLElement;
      const memoizeText = document.getElementById("memoize") as HTMLElement;
  
      errorText.textContent = message;
      defaultText.textContent = "";
      memoizeText.textContent = "";
    },
  
    resetAllFields(): void{
      
      const input = document.querySelector("input") as HTMLInputElement;
      const defaultText = document.getElementById("default") as HTMLElement;
      const memoizeText = document.getElementById("memoize") as HTMLElement;
      const errorText = document.getElementById("error") as HTMLElement;
  
      input.value = "";
      defaultText.textContent = "";
      memoizeText.textContent = "";
      errorText.textContent = "";
    },
  };
  