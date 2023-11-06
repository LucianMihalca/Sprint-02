import { InputModel, ValidTypes, debounce } from "./modelo";
import { updateDefaultText, updateDebouncedText } from "./vista";

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
    console.log(`Default requests aaa--> : ${model.incrementDefaultCount()}`);
  });

  const updateDebounceText = debounce((text: ValidTypes): void => {
    if (typeof text === "string") {
      updateDebouncedText(debounceText, text);
      handleDebouncedCount(model);
    }
  }, 550);

  input.addEventListener("input", (e) => {
    const target = e.target as HTMLInputElement;
    updateDebounceText(target.value);
  });
}

initialize();
