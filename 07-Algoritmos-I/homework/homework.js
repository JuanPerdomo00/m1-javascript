"use strict";
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  let newArr = [1];
  for (let i = 2; i < num + 1; i++) {
    if (num % i === 0) {
	num /= i
	newArr.push(i);
	i--
    } 
  } return newArr

  // let newArr = [];

  // if (num < 0) {
  //   return -1;
  // } else if (num === 0) {
  //   return 1;
  // } else {
  //   console.log(newArr);
  //   return newArr.push(num * factorear(num / 1));
  // }
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let aux = array[i];
        array[i] = array[j];
        array[j] = aux;
      }
    }
  }
  return array;
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    let aux = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > aux) {
      array[j + 1] = array[j];
      j -= 1;
    }
    array[j + 1] = aux;
  }
  return array;
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] < array[j]) {
        array[i] = array[i];
        array[j] = array[j];
      }
      if (array[j] < array[i]) {
        let aux = array[i];
        array[i] = array[j];
        array[j] = aux;
      }
    }
  }
  return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
