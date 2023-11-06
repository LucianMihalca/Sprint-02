// Define la interfaz Cache
interface Cache {
    [key: string]: number;
  }
  // Extiende la definición de la función para incluir la propiedad cache
  interface MemoizedFunction {
    (num: number): number;
    cache: Cache;
  }
  
  export function memoize(fn: (...args: number[]) => number): MemoizedFunction {
    const cache: Cache = {};
    function memoizedFunction(...args: number[]): number {
      const key = JSON.stringify(args);
      if (!cache[key]) {
        cache[key] = fn(...args);
      }
      return cache[key];
    }
    memoizedFunction.cache = cache;
    return memoizedFunction;
  }
  
  export function slowFunction(num: number): number {
    if (num <= 2) {
      return 1;
    }
    return slowFunction(num - 1) + slowFunction(num - 2);
  }
  
  export const model = {
    memoize,
    slowFunction,
  };
  export const fastFunction: MemoizedFunction = memoize(slowFunction) as MemoizedFunction;
  