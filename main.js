"use strict";

const myNumbers = [1, 2, 3, 1];

function checkNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        return true;
      }
    }
  }
  return false;
}

console.log(checkNumbers(myNumbers));

const binaryArray = [0, 0, 1, 1, 1, 0, 1, 0, 1, 1];

function checkBinary(array) {
  let myContador = 0;
  let finalContador = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      myContador++;
    }
    if (myContador > finalContador) {
      finalContador = myContador;
    }
    if (array[i] === 0) {
      myContador = 0;
    }
  }
  return finalContador;
}

console.log(checkBinary(binaryArray));

const arrayZeros = [0, 0, 1];

function pushZeros(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      array.splice(i, 1);
      array.push(0);
    }
    if (array[i - 1] === 0) {
      array.splice(i - 1, 1);
      array.push(0);
    }
  }
  return array;
}

console.log(pushZeros(arrayZeros));
