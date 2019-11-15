"use strict";

//EJERCICIO 1

const myNumbers = [1, 2, 3, 1];

function checkNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      //comprobamos cada numero con el resto del array
      if (array[i] === array[j]) {
        //si hay alguna coincidencia return true
        return true;
      }
    }
  }
  return false; //si no hay coincidencia return false
}

console.log(checkNumbers(myNumbers));

//EJERCICIO 2

const binaryArray = [0, 0, 1, 1, 1, 0, 1, 0, 1, 1];

function checkBinary(array) {
  let myContador = 0;
  let finalContador = 0;
  for (let i = 0; i < array.length; i++) {
    //comprobamos cada posición del array
    if (array[i] === 1) {
      //cada vez que encontramos algún 1
      myContador++; //sumamos una unidad al contador
    }
    if (myContador > finalContador) {
      finalContador = myContador; //si el contador temporal es superior al final, guardamos el valor en el final
    }
    if (array[i] === 0) {
      myContador = 0; //cuando encontremos un 0, el contador vuelve a 0 para asegurarnos de que los 1 son seguidos
    }
  }
  return finalContador; //el maximo numero de 1 seguidos
}

console.log(checkBinary(binaryArray));

//EJERCICIO 3

const arrayZeros = [0, 1, 5, 0, 7, 0, 8, 2, 0];

function pushZeros(array) {
  for (let i = 0; i < array.length; i++) {
    //recorremos array
    if (array[i] === 0) {
      //cuando encontremos un 0
      array.splice(i, 1); //lo eliminamos
      array.push(0); // y añadimos un 0 al final del array
    }
    if (array[i - 1] === 0) {
      //repetimos lo mismo comprobando la posición anterior del array porque lo estamos modificando
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

const calcularMedia = puntos => {
  const puntosTotales = puntos.reduce((acc, curr) => acc + curr);
  return puntosTotales / puntos.length;
};
//funcion para calcular la media de cualquier array de puntos

let mediaSara = calcularMedia(puntosSara);
let mediaLaura = calcularMedia(puntosLaura);
let mediaMaria = calcularMedia(puntosMaria);
//calculamos media de cada equipo

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
} //segun el precio asignamos un porcentaje de propina y añadimos la cantidad al array de propinas

calcularPropina(facturas);

let totalPagado = facturas.map((value, index) => {
  return value + propinas[index];
}); //sumamos el precio con su propina correspondiente y obtenemos nuevo array con el pago total

console.log(propinas);
console.log(totalPagado);

//EJERCICIO RECORRER Y ORDENAR ARRAY

const nums = [100, 3, 4, 2, 10, 4, 1, 10];

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
} //bucle for
for (const num of nums) {
  console.log(num);
} //bucle for of
nums.map(value => {
  console.log(value);
}); //.map

let copy = [...nums]; //copia del array para no modificar el original
let aux; //variable temporal

for (let i = 0; i < copy.length; i++) {
  for (let j = 0; j < copy.length; j++) {
    if (copy[j] > copy[i]) {
      // si el numero que estamos comprobando es menor que otro del array
      aux = copy[i];
      copy[i] = copy[j]; //los intercambiamos de lugar
      copy[j] = aux;
    }
  }
}
console.log(copy); //al final del bucle y de cambiar los numeros de lugar se ordenan

const ordered = nums.sort((a, b) => {
  //comparamos los valores a y b del array
  return b - a; //que nos devuelva que b sea menor que a
});
console.log(ordered);

//EJERCICIO PROMPT

let valor1 = prompt(`introduzca valor 1`);
let valor2 = prompt(`introduzca valor 2`); //creamos dos ventanas para introducir datos

const difference = (num1, num2) => {
  //la función recibe dos numeros
  let resultado = Math.abs(num1 - num2); //los resta y obtiene el valor absoluto
  alert(`El resultado es ${resultado}`); //muestra el valor final en una ventana
};

difference(valor1, valor2);
//asignamos los 2 valores del prompt a la función difference

//CLASE ROBOT

class Robot {
  constructor(space) {
    this.space = space;
    this.rowPosition = 0;
    this.columnPosition = 0;
  }
  moveLeft() {
    if (this.columnPosition === 0) {
      return;
    }
    this.columnPosition--;
  }
  moveRight() {
    if (this.columnPosition === this.space[this.rowPosition].length - 1) {
      return; //comprobamos si podemos seguir hacia la derecha, aunque la longitud de las filas sea distinta a las columnas
    }
    this.columnPosition++;
  }
  moveUp() {
    if (this.rowPosition === 0) {
      return;
    }
    this.rowPosition--;
  }
  moveDown() {
    if (this.rowPosition === this.space.length - 1) {
      return;
    }
    this.rowPosition++;
  }
  currentPosition() {
    return this.space[this.rowPosition][this.columnPosition];
  } //posición actual
  getCoordenates() {
    console.log([this.columnPosition, this.rowPosition]);
  } //coordenadas actuales
}

const mySpace = [
  [1, 9, 5, 8],
  [7, 6, 3, 4],
  [4, 5, 8, 1]
];
const myRobot = new Robot(mySpace);
console.log(myRobot.currentPosition());
myRobot.getCoordenates();

//EJERCICIO BANCO

class Banco {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    this.client = [];
  }
  bloquearCuenta(cuenta) {
    cuenta.access = false; //accedemos a la propiedad access de CuentaBancaria y la volvemos false
  }
  desbloquearCuenta(cuenta) {
    cuenta.access = true; //lo mismo pero vuelve a true
  }
}

class CuentaBancaria {
  constructor(id) {
    this.balance = 0;
    this.id = id;
    this.access = true;
  }
}

class Titular {
  constructor(name, gender, wallet) {
    this.name = name;
    this.gender = gender;
    this.wallet = wallet;
    this.id = Math.floor(Math.random() * 999999999);
  }
  abrirCuenta(banco) {
    banco.client.push({ name: this.name, ID: this.id }); //accedemos a la propiedad client de Banco y hacemos push de los datos del titular
    return new CuentaBancaria(this.id);
  }

  ingresarDinero(cantidad, cuenta) {
    if (this.id === cuenta.id && cuenta.access === true) {
      if (cantidad > this.wallet) {
        console.log(`not enough money in your wallet`);
      } else {
        this.wallet -= cantidad;
        cuenta.balance += cantidad;
        console.log(`money operation completed`);
      }
    } else {
      console.log(`acceso denegado`);
    }
  }
  //solo si el id del titular y de la cuenta coinciden se pueden hacer operaciones en la cuenta
  //igualmente la propiedad access de la cuenta debe ser true para que nos deje operar

  retirarDinero(cantidad, cuenta) {
    if (this.id === cuenta.id && cuenta.access === true) {
      if (cantidad > cuenta.balance) {
        console.log(`not enough money in your bank`);
      } else {
        cuenta.balance -= cantidad;
        this.wallet += cantidad;
        console.log(`money operation completed`);
      }
    } else {
      console.log(`acceso denegado`);
    }
  }

  mostrarSaldo(cuenta) {
    console.log(cuenta.balance);
  }
}

const abanca = new Banco("Abanca", "Av. Sardiñeira 13"); //nuevo banco

const Manolo = new Titular(`Manolo`, `hombre`, 10000); //nuevo titular

const cuentaManolo = Manolo.abrirCuenta(abanca); //nueva cuenta
console.log(abanca);
console.log(cuentaManolo);
Manolo.ingresarDinero(1000, cuentaManolo); //ingresamos 1000 desde la wallet del titular al balance de la cuenta
Manolo.retirarDinero(200, cuentaManolo); //retiramos 200 desde el balance hacia la wallet
Manolo.mostrarSaldo(cuentaManolo); //saldo en la cuenta
abanca.bloquearCuenta(cuentaManolo); //access = false y se bloquean las operaciones en la cuenta
abanca.desbloquearCuenta(cuentaManolo); //volvemos a habilitar las operaciones
Manolo.ingresarDinero(1000, cuentaManolo);
Manolo.mostrarSaldo(cuentaManolo);
console.log(cuentaManolo);

//EJERCICIO PUPITRES

const pupitres = [12, 2, 6, 7, 11];

function getCombinations(seats) {
  const totalSeats = seats.shift(); //extraemos el primer numero del array, ahora totalSeats = 12 y seats =[2, 6, 7, 11]
  let posibleSeats = 0; //variable para ir sumando los sitios posibles
  for (let i = 1; i < totalSeats; i++) {
    //recorremos numeros del 1 al 12(sitios totales)
    if (seats.indexOf(i) === -1) {
      //si el numero que comprobamos no esta en el array seats(sitios ocupados)
      if (i % 2 !== 0) {
        //para los impares
        const right = i + 1; //comprobamos el sitio de su derecha
        const down = i + 2; //y el sitio debajo/detrás
        if (seats.indexOf(right) === -1) {
          //si el sitio de la derecha no está ocupado
          posibleSeats++; //sumamos un sitio a la variable final
        }
        if (seats.indexOf(down) === -1) {
          //si el sitio debajo/detrás no está ocupado
          posibleSeats++; //sumamos otro sitio
        }
      } else {
        //para los pares
        const down = i + 2; //comprobamos el sitio debajo/detrás
        if (seats.indexOf(down) === -1) {
          //si no está ocupado
          posibleSeats++; //sumamos otro sitio
        }
      }
    }
  }
  console.log(posibleSeats); //todas las maneras posibles de sentar a dos alumnos en sitios contiguos
}
getCombinations(pupitres);
