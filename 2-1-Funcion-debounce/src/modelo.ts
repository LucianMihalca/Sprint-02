export class InputModel {
  defaultInputCount: number;
  debouncedInputCount: number;

  constructor() {
    this.defaultInputCount = 0;
    this.debouncedInputCount = 0;
  }

  incrementDefaultCount(): number {
    this.defaultInputCount++;
    return this.defaultInputCount;
  }

  incrementDebouncedCount(): number {
    this.debouncedInputCount++;
    return this.debouncedInputCount;
  }
}

export type ValidTypes = string | number | symbol;

export type CallbackType = (arg: ValidTypes) => void;

export function debounce(cb: CallbackType, delay: number): CallbackType {
  let timeout: NodeJS.Timeout | null = null;

  return (arg: ValidTypes): void => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => cb(arg), delay);
  };
}
