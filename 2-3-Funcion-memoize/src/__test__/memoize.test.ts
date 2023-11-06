import { memoize } from "../modelo";

// Mock de una función que simplemente devuelve el primer argumento que recibe.
const identity = (x: number): number => x;

describe("Función Memoize", () => {
  // Restablece los timers después de cada prueba para evitar estados contaminados
  afterEach(() => {
    jest.clearAllTimers();
  });

  it("Devuelve el mismo resultado si el valor  es el mimo", () => {
    const memoizedIdentity = memoize(identity);
    expect(memoizedIdentity(5)).toBe(5); // Primera llamada, debe llamar a la función original
    expect(memoizedIdentity(5)).toBe(5); // Segunda llamada, debe obtener el valor del cache
  });

  it("La function original se llama 1 vez por cada argumento nuevo", () => {
    const mockFn = jest.fn().mockImplementation(identity);
    const memoizedFn = memoize(mockFn);

    memoizedFn(5);
    memoizedFn(5);

    expect(mockFn).toHaveBeenCalledTimes(1); // La función mock debería haberse llamado solo una vez
  });

  it("Los resultados son distintos por cada valor", () => {
    const memoizedIdentity = memoize(identity);
    expect(memoizedIdentity(5)).toBe(5);
    expect(memoizedIdentity(10)).toBe(10);
  });
});
