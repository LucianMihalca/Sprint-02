import { InputModel } from "./modelo";
import { updateDefaultText, updateDebouncedText } from "./vista";
import { ValidTypes, debounce } from "./debounce";

const handleDebouncedCount = (model: InputModel) => {
  const newCount = model.incrementDebouncedCount();
  console.log(`Debounce requests --> : ${newCount}`);
};

function initialize() {
  const model = new InputModel();

  const input = document.querySelector("input") as HTMLInputElement;
  const defaultText = document.getElementById("default") as HTMLElement;
  const debounceText = document.getElementById("debounce") as HTMLElement;

  input.addEventListener("input", (e) => {
    const target = e.target as HTMLInputElement;
    updateDefaultText(defaultText, target.value);
    console.log(`Default requests --> : ${model.incrementDefaultCount()}`);
  });

  const updateDebounceText = debounce((text: ValidTypes): void => {
    if (typeof text === "string") {
      updateDebouncedText(debounceText, text);
      handleDebouncedCount(model);
    }
    // Puedes añadir más lógica aquí para manejar otros tipos
  }, 550);

  input.addEventListener("input", (e) => {
    const target = e.target as HTMLInputElement;
    updateDebounceText(target.value);
  });
}

initialize();
