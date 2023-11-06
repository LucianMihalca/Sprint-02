import { debounce } from "../modelo";

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

    // REalizamos las tres llamadas de prueba
    debouncedFn("test1");
    debouncedFn("test2");
    debouncedFn("test3");

    // comprobamos que  no se haya llamado todavía
    expect(mockFn).not.toHaveBeenCalled();

    // Esperar 500 ms
    setTimeout(() => {
      //se espera que solo se ha realizado 1 llamada
      expect(mockFn).toHaveBeenCalledTimes(1);

      // esperamos que el ultimo valor es 'test3'
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
    const debouncedFn = debounce(mockFn, 200); //  200 ms de retardo

    debouncedFn("Hola Mundo");

    // nos aseguramos que no se llamo seguido
    expect(mockFn).not.toHaveBeenCalled();

    // nos aseguramos que llamo a la function original y damos un margen de 400ms.
    setTimeout(() => {
      // esperamos que se llamo a la function original
      expect(mockFn).toHaveBeenCalled();
      done();
    }, 400);
  });
});
