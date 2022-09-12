"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  let numeroDecimal = []; //!array donde voy a guardar el resultado de la iteracion
  let sumaResultado = 0; //! suma donde voy a guardar la suma de el resultado de la iteracion
  let strNumber = String(num); //! pasa el numero a string
  let arrNUmber = strNumber.split(""); //! Lo combiarte en un array

  //! los pasa de string a entero en un nuevo arr
  let newNumerosArray = arrNUmber.map((e) => {
      return Number(e);
    }).reverse(); //! le damos la vuelta al array para poder hacer la operacion

  for (let i = 0; i < newNumerosArray.length; i++) {
    /*
     * Iteramos en el array ya modificado y volteado, donde se efectuara
     * la logica para elevarlos al exponente en este caso i, donde la base es 2
     * luego se multiplica por el numero que este en la iteracion en el momento
     * y pushea el resultado a la variable numeroDecimal.
     */
    numeroDecimal.push(newNumerosArray[i] * 2 ** i);
  }

  for (let j = 0; j < numeroDecimal.length; j++) {
    /*
     * Una ves ya tenemos el array con los numeros ya operados
     * llega la fase de la suma, donde se sumaran de derecha a izquieda.
     * meneste que ese proceso, ya se realizo en el for anterior,
     */
    sumaResultado += numeroDecimal[j]; //! sumando
  }

  return sumaResultado; //! devolvemos el resultado de la suma.
}

function DecimalABinario(num) {
  // tu codigo aca
  //! creamos el array donde se almacenaran los numeros binarios
  let numeroBinario = [];
  // bucle para que verifique

  while (num >= 1) {
    /*
     * Iteramos mientras que numero ingresado sea mayor a 1, ya que 0 no tiene valor,
     * Pushamos en la primera posicion del array y asi nos evitamos el problema de abajo asia arriba,
     * ya que unshift como que lo apila hacia la derecha, una ves echo esto le enviamos el residuo ya sea 1 o 0.
     * le borramos los decimales con floor ya que se me imprimian con decimales de tras. Una ves echo esto cambiamos el
     * estado de la variable numero dividiendola entre 2, ya que si no nunca cambiaria de valor y se seguiria dividiendo el mismo numero
     */
    numeroBinario.unshift(Math.floor(num % 2));
    num /= 2;
  }
  /*
   * Una ves echo el proceso de la iteracion, retornamos el array convertido a string y previamente pasqado a number
   * con la clase number valga la redundancia. Nos retornaria el numero binario
   ? Se cambio a que retorne string ya que en los test no pasaban
   */
  return numeroBinario.join("");
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
