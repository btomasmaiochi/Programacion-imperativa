/*--------------------------------------Calculadora - Nivel III - Funciones extras-------------------------------------------- */

// 1. Crear un archivo calculadora.js que contendrá las distintas operaciones a realizar de nuestra calculadora.
// 2. Crear una función sumar, esta deberá recibir dos parámetros y retornar la suma de los mismos.
const sumar = (numero1, numero2) => {
  return numero1 + numero2;
};
let totalSuma = sumar(13, 7);
console.log(totalSuma);

// 3. Crear una función restar, la cual deberá recibir dos parámetros y retornar la resta del primero menos el segundo.
const restar = (numero1, numero2) => {
  return numero1 - numero2;
};
let totalResta = restar(15, 10);
console.log(totalResta);

// 4. Crear una función multiplicar, la misma deberá recibir dos parámetros y retornar el resultado de su multiplicación.
const multiplicacion = (numero1, numero2) => {
  return numero1 * numero2;
};
let totalMultiplicacion = multiplicacion(3, 3);
console.log(totalMultiplicacion);

// 5. Crear una función dividir, la cual recibirá dos parámetros y retornar el resultado de la división del primero sobre el segundo.
const division = (numero1, numero2) => {
  return numero1 / numero2;
};
let totalDivision = division(20, 2);
console.log(totalDivision);

/*--------------------------------------Calculadora - Nivel III - Funciones extras-------------------------------------------- */

/* 1. Crear una función que se llame cuadradoDeUnNumero, la cual recibe un número como parámetro y deberá retornar ese número elevado al cuadrado.
Importante: cuadradoDeUnNumero() deberá utilizar la función multiplicar() para calcular el cuadrado del parámetro ingresado a cuadradoDeUnNumero() */
const cuadradoDeUnNumero = (numero) =>  numero * numero;
let totalCuadrado = cuadradoDeUnNumero(3);
console.log(totalCuadrado);

/* 2. Crear la función promedioDeTresNumeros, la misma deberá calcular el promedio de 3 números, que serán ingresados por parámetro.
Importante: promedioDeTresNumeros() deberá utilizar algunas funciones previamente creadas de nuestra calculadora.*/
const promedioDeTresNumeros = (num1, num2, num3) => {
  return (num1 + num2 + num3) / 3;
};
let totalPromedio = promedioDeTresNumeros(10, 8, 9);
console.log(totalPromedio);

/* 3. Crear la función calcularPorcentaje. Esta recibirá dos parámetros: el número total y el porcentaje que se le quiere calcular. 
Deberá retornar el x% del total. Ejemplo: calcularPorcentaje(300, 15) debe retornar 45, ya que es el 15% de 300. 
Importante: calcularPorcentaje() deberá utilizar algunas funciones previamente creadas de nuestra calculadora. */
const calcularPorcentaje = (numero, porcentaje) => {
  return (numero * porcentaje) / 100;
};
let totalPorcentaje = calcularPorcentaje(300, 15);
console.log(totalPorcentaje);

/* 4. Crear una función GeneradorDePorcentaje que recibe dos parámetros y deberá retornar el porcentaje del primero con respecto al segundo.
Importante: GeneradorDePorcentaje() deberá utilizar algunas funciones previamente creadas de nuestra calculadora. Ejemplo: GeneradorDePorcentaje(2, 200) 
deberá retornar 1, ya que 2 es el 1% de 200.*/
const generadorDePorcentaje = (num1, num2) => {
  return (num1 * 100) / num2;
};
let totalGenerador = generadorDePorcentaje(2, 200);
console.log(totalGenerador);
