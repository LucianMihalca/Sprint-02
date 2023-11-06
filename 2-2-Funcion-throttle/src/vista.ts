

export const view = {
    updateDefaultText: function (text: string | number): void {
      const defaultTextElement = document.getElementById("default");
      if (defaultTextElement !== null) {
        defaultTextElement.textContent = text.toString();
      }
    },
  
    updateThrottleText: function (text: string | number): void {
      const throttleTextElement = document.getElementById("throttle");
      if (throttleTextElement !== null) {
        throttleTextElement.textContent = text.toString();
      }
    },
  };
  