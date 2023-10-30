// Devuelve el nuevo valor de defaultInputCount
export function handleDefaultInput(e: Event | InputEvent, defaultText: HTMLElement, defaultInputCount: number): number {
    const target = e.target as HTMLInputElement;
    defaultText.textContent = target.value;
    defaultInputCount++;
    console.log(`Default requests --> : ${defaultInputCount}`);
    return defaultInputCount;
  }
  // Manejador para actualizar el texto con debounce
  
  export function handleDebounceInput(e: Event | InputEvent, updateDebounceText: (text: string) => void, debouncedInputCount: number): void {
    const target = e.target as HTMLInputElement;
    updateDebounceText(target.value);
  }
  
  // Implementación de la función debounce
  export type CallbackType = (text: string) => void;
  
  export function debounce(cb: CallbackType, delay: number): CallbackType {
    let timeout: ReturnType<typeof setTimeout>;
  
    return (arg: string) => {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        cb(arg);
      }, delay);
    };
  }
  