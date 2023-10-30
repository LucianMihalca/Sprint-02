export class InputModel {
  defaultInputCount: number = 0;
  debouncedInputCount: number = 0;

  incrementDefaultCount() {
    this.defaultInputCount++;
    return this.defaultInputCount;
  }

  incrementDebouncedCount() {
    this.debouncedInputCount++;
    return this.debouncedInputCount;
  }
}
