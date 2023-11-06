export type ValidTypes = string | number ; 
export type CallbackType = (arg: ValidTypes) => void;

export function debounce(cb: CallbackType, delay: number): CallbackType {
  let timeout: ReturnType<typeof setTimeout>;

  return (arg: ValidTypes) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      cb(arg);
    }, delay);
  };
}