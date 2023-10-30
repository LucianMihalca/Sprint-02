export function updateDefaultText(defaultText: HTMLElement, newValue: string): void {
    if (defaultText) {
      defaultText.textContent = newValue;
    }
  }
  
  export function updateDebouncedText(debounceText: HTMLElement, newValue: string): void {
    if (debounceText) {
      debounceText.textContent = newValue;
    }
  }
  