import { throttle } from "../modelo";

describe("Función Throttle", () => {
  jest.useFakeTimers();
  it("Debería llamar a throttleFn solo una vez en el periodo del delay", (done) => {
    const mockFn = jest.fn();
    const throttleFn = throttle(mockFn, 500);

    throttleFn("test1");
    expect(mockFn).toHaveBeenCalledTimes(1); // Se llamó inmediatamente

    // Intentamos llamarla varias veces en el intervalo
    throttleFn("test2");
    throttleFn("test3");
    expect(mockFn).toHaveBeenCalledTimes(1); // No debería haberse llamado más veces

    // Avanzamos el temporizador justo antes de 500 ms para asegurarnos de que aún no se llame
    jest.advanceTimersByTime(499);
    expect(mockFn).toHaveBeenCalledTimes(1);

    // Avanzamos el temporizador hasta después de 500 ms
    jest.advanceTimersByTime(1);
    expect(mockFn).toHaveBeenCalledTimes(2); // Ahora se debería haber llamado dos veces.

     // La última llamada con "test3" debería ser la ejecutada.
    expect(mockFn).toHaveBeenCalledWith("test3");

    done();
  });

  jest.clearAllTimers();
});
