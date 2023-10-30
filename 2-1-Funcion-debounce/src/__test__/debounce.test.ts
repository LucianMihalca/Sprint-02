import { debounce } from "../debounce";

describe("Función debounce", () => {
  it("Debería llamar a debouncedFn después del tiempo especificado", (done) => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 500);

    debouncedFn("test");
    expect(mockFn).not.toHaveBeenCalled();

    setTimeout(() => {
      expect(mockFn).toHaveBeenCalled();
      done();
    }, 500);
  });

  it("Debería llamar a debouncedFn 1 sola vez para múltiples llamadas rápidas", (done) => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 500);

    // Llamar tres veces rápidamente a la función debounced
    debouncedFn("test1");
    debouncedFn("test2");
    debouncedFn("test3");

    // Asegurarse de que la función original no se haya llamado todavía
    expect(mockFn).not.toHaveBeenCalled();

    // Esperar 500 ms
    setTimeout(() => {
      // La función original debería haber sido llamada una sola vez
      expect(mockFn).toHaveBeenCalledTimes(1);

      // El último valor pasado debería ser 'test3'
      expect(mockFn).toHaveBeenCalledWith("test3");

      done();
    }, 500);
  });

  it("No debería llamar a debounceFn antes de transcurrir los 500ms de retardo", (done) => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 500);

    debouncedFn("test");

    // Asegurarse de que la función original no se haya llamado todavía
    expect(mockFn).not.toHaveBeenCalled();

    // Comprobar después de un tiempo menor al especificado
    setTimeout(() => {
      expect(mockFn).not.toHaveBeenCalled();
      done();
    }, 300);
  });

  it("Debería llamar a debounceFn múltiples veces con el retardo adecuado entre llamadas", (done) => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 200);

    debouncedFn("test1");

    setTimeout(() => {
      debouncedFn("test2");
    }, 250);

    setTimeout(() => {
      expect(mockFn).toHaveBeenCalledTimes(2);
      expect(mockFn).toHaveBeenNthCalledWith(1, "test1");
      expect(mockFn).toHaveBeenNthCalledWith(2, "test2");
      done();
    }, 500);
  });

  it("No debería llamar a mockFn si debounceFn no se invoca", (done) => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 200);

    // No llamamos a debouncedFn aquí

    setTimeout(() => {
      expect(mockFn).not.toHaveBeenCalled();
      done();
    }, 300);
  });

  it("No deberia llamra a debouncedFn antes de trascurir los 200ms de retardo", (done) => {
    const mockFn = jest.fn(); // Función simulada para probar
    const debouncedFn = debounce(mockFn, 200); // Función debounced con 200 ms de retardo

    // Llama a la función debounced
    debouncedFn("Hola Mundo");

    // Verifica que la función original no se haya llamado inmediatamente
    expect(mockFn).not.toHaveBeenCalled();

    // Espera 400 ms para estar seguro de que la función original se haya llamado
    setTimeout(() => {
      // Verifica que la función original se haya llamado
      expect(mockFn).toHaveBeenCalled();
      done();
    }, 400);
  });
});
