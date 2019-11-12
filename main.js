"use strict";

//EJERCICIO 1

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

//EJERCICIO 2

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

//EJERCICIO 3

const arrayZeros = [0, 1, 5, 0, 7, 0, 8, 2, 0];

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

//EJERCICIO BALONCESTO

let puntosSara = [89, 120, 103];
let puntosLaura = [116, 94, 123];
let puntosMaria = [97, 134, 105];

function calcularMedia(puntos) {
  return puntos.reduce((acc, curr) => (acc + curr) / puntos.length);
}

let mediaSara = calcularMedia(puntosSara);
let mediaLaura = calcularMedia(puntosLaura);
let mediaMaria = calcularMedia(puntosMaria);

if (mediaSara > mediaLaura && mediaSara > mediaMaria) {
  console.log(
    `Sara tiene mejor media: ${mediaSara} puntos, Laura: ${mediaLaura} puntos, Maria: ${mediaMaria} puntos`
  );
} else if (mediaLaura > mediaSara && mediaLaura > mediaMaria) {
  console.log(
    `Laura tiene mejor media: ${mediaLaura} puntos, Sara: ${mediaSara} puntos, Maria: ${mediaMaria} puntos`
  );
} else if (mediaMaria > mediaSara && mediaMaria > mediaLaura) {
  console.log(
    `María tiene mejor media: ${mediaMaria} puntos, Sara: ${mediaSara} puntos, Laura: ${mediaLaura} puntos`
  );
}

//EJERCICIO PROPINA

const facturas = [124, 58, 268];
let propinas = [];

function calcularPropina(prices) {
  for (const factura of prices) {
    if (factura < 50) {
      propinas.push(factura * 0.2);
    } else if (factura > 50 && factura < 200) {
      propinas.push(factura * 0.15);
    } else if (factura > 200) {
      propinas.push(factura * 0.1);
    }
  }
}

calcularPropina(facturas);

let totalPagado = facturas.map((value, index) => {
  return value + propinas[index];
});

console.log(propinas);
console.log(totalPagado);

//EJERCICIO RECORRER Y ORDENAR ARRAY

const nums = [100, 3, 4, 2, 10, 4, 1, 10];

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}
for (const num of nums) {
  console.log(num);
}
nums.map(value => {
  console.log(value);
});

let copy = [...nums];
let aux;

for (let i = 0; i < copy.length; i++) {
  for (let j = 0; j < copy.length; j++) {
    if (copy[j] > copy[i]) {
      aux = copy[i];
      copy[i] = copy[j];
      copy[j] = aux;
    }
  }
}
console.log(copy);

const ordered = nums.sort((a, b) => {
  return a - b;
});
console.log(ordered);

//EJERCICIO PROMPT

let valor1 = prompt(`introduzca valor 1`);
let valor2 = prompt(`introduzca valor 2`);

const difference = (num1, num2) => {
  let resultado = Math.abs(num1 - num2);
  alert(`El resultado es ${resultado}`);
};

difference(valor1, valor2);
