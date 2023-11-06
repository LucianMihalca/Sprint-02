import { view } from "./vista";
import { model, throttle } from "./modelo";

// Inicialización y asignación de eventos
function init(): void {
  const input = document.querySelector("input");
  if (input) {
    input.addEventListener("input", controller.handleDefaultInput);
    input.addEventListener("input", controller.handleThrottleInput);
  }
}

const controller = {
  handleDefaultInput: function (event: Event): void {
    const target = event.target as HTMLInputElement;
    model.defaultText = target.value;
    model.defaultInputCount++;
    console.log(`Default request --> : ${model.defaultInputCount}`);
    view.updateDefaultText(model.defaultText);
  },

  handleThrottleInput: function (event: Event): void {
    const target = event.target as HTMLInputElement;
    model.throttleText = target.value;
    controller.updateThrottleText(model.throttleText);
  },

  updateThrottleText: throttle((text) => {
    model.throttleInputCount++;
    console.log(`Throttle requests --> : ${model.throttleInputCount}`);
    view.updateThrottleText(text);
  }, 1000),
};

init();
