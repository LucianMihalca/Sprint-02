// Definimos un typo string y numero.
export type ValidType = string | number;

// Definimos un typo = a una function que puede recibir x numero de argumentos = a ValidType 
type CallbackType = (...args: ValidType[]) => void;

/**
 * Devuelve una función que, independientemente de la frecuencia con que se invoque, solo llamará a la función de
 * callback proporcionada como máximo una vez por cada intervalo de tiempo definido por 'delay'.
 *
 * @param cb La función de callback a ejecutar.
 * @param delay El intervalo de tiempo durante el cual las invocaciones adicionales a la función devuelta serán ignoradas.
 * @returns Una función 'throttled' que envuelve la función de callback 'cb'.
 */
export function throttle(cb: CallbackType, delay: number): CallbackType {
  let canCallCb = true; // Permite que se llame al cb directamente ya que esta en true.
  let waitingArgs: ValidType[] | null = null; // Variable donde guardamos los valores cuando canCallCb esta en false

  // La función que controla el tiempo de espera.
  const timeoutFunc = () => {
    if (waitingArgs) {
      cb(...waitingArgs); // Si hay argumentos ejecutamos el cb
      waitingArgs = null; // Y los argumentos se = a null para que se pueda volver a ...
    }
    canCallCb = true; // Poner en true canCallCb y hacer otra petición cuando el delay se ejecuto
  };

  // La función 'throttled' se ejecuta lo primero ya que tenemos canCalCb = true.
  return (...args: ValidType[]) => {
    if (!canCallCb) {
      // Por que esto es = false

      waitingArgs = args;
      return;
    }
    // 1. Es lo primero que se ejecuta , dicho esto se levanta el semáforo.
    cb(...args);
    canCallCb = false; //2. Lo segundo que se ejecuta, durante el delay no se realizan peticiones, los argumentos se guardan en waitingArgs = args
    setTimeout(timeoutFunc, delay); //3. Se ejecuta el delay y la función timeoutFunc.
  };
}
