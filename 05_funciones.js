/*------------------------Micro desafios---------------------*/
function test1(x, y) {
  return y - x;
}
console.log(test1(10, 40)); // 30

function test2(x /*y*/) {
  return x * 2;
  // console.log(x); no lo reconoce
  // return x / 2; toma como referencia la x
}
console.log(test2(10)); // 20

// Elegí trabajar con arrow functions en todos los ejercicios para practicar :)

// 1. Crear una función que convierta pulgadas en centímetros. Recibe por parámetro pulgadas y retorna su equivalente en centímetros.
const convertir = (x) => {
  let pulgadasACm = x * 2.54;
  return pulgadasACm;
};
let resultado = convertir(50);
console.log(resultado);

const convertir1 = (x) => {
  return x * 2.54;
};
let resultado1 = convertir1(50);
console.log(resultado1);

// 2. Crear una función que recibe un string y lo convierte en una URL. Ej: “pepito” es devuelto como “http://www.pepito.com”
const stringUrl = (string) => {
  let stringToUrl = `http://www.${string}.com`;
  return stringToUrl;
};
let resultString = stringUrl("pepito");
console.log(resultString);

const stringUrl1 = (string) => {
  return `http://www.${string}.com`;
};
let resultString1 = stringUrl1("pepito");
console.log(resultString1);

//3. Crear una función que recibe un string y devuelve la misma frase pero con admiración.
const admiracion = (string) => {
  let stringAdmiracion = `¡${string}!`;
  return stringAdmiracion;
};
let resultadoAdmiracion = admiracion("Bruna");
console.log(resultadoAdmiracion);

const admiracion1 = (string) => {
  return `¡${string}!`;
};
let resultadoAdmiracion1 = admiracion1("Bruna");
console.log(resultadoAdmiracion1);

//4. Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos.
const edadTotal = (edadHumanos) => {
  let edadPerro = 7;
  let edadMultiplicacion = edadHumanos * edadPerro;
  return edadMultiplicacion;
};
let resultadoEdad = edadTotal(2);
console.log(resultadoEdad);

const edadTotal1 = (edadHumanos) => {
  return edadHumanos * 7;
};
let resultadoEdad1 = edadTotal1(2);
console.log(resultadoEdad1);

//5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro. PD: considerá que tu mes de trabajo tiene 40 horas.
const trabajo = (sueldo) => {
  let horaTrabajo = 40;
  let trabajoDivision = sueldo / horaTrabajo;
  return trabajoDivision;
};
let resultadoTrabajo = trabajo(40000);
console.log(resultadoTrabajo);

const trabajo1 = (sueldo) => {
  return sueldo / 40;
};
let resultadoTrabajo1 = trabajo1(40000);
console.log(resultadoTrabajo1);

/*6. Crear la función calculadorIMC() que reciba la altura en metros y el peso en kilogramos y calcule el IMC de una persona. Luego, ejecutar la función
probando diferentes valores. Seleccionar alguna de estas funciones —o de manera opcional, todas— y escribirla como función expresada y función flecha. 
Si llegamos hasta este punto estamos más que satisfechos. Ahora te dejamos unos ejercicios con una dificultad extra, tendrás que buscar algunos conceptos para poder
resolverlos. Es una práctica que los programadores realizamos todos los días. Como siempre te decimos, una parte importante del aprendizaje en programación es
ignorar la complejidad, e ir estrictamente a lo que necesitamos. Sabemos que no es una práctica fácil de realizar, pero con el tiempo va a ir haciéndose más sencilla y
divertida.*/
const calculadorIMC = (altura, peso) => {
  let imcCalulo = peso / (altura * altura);
  return imcCalulo;
};
let resultadoIMC = calculadorIMC(1.61, 70);
console.log(resultadoIMC);

const calculadorIMC1 = (altura, peso) => {
  return peso / (altura * altura);
};
let resultadoIMC1 = calculadorIMC1(1.61, 70);
console.log(resultadoIMC1);

/*7. Crear una función que recibe un string en minúscula, lo convierta a mayúsculas
y lo retorne. Investigá qué hace el método de strings .toUpperCase()*/
const minusculas = (string) => {
  let stringMayuscula = string.toUpperCase();
  return stringMayuscula;
};
let mayusculas = minusculas("soy un hola en mayúscula :)");
console.log(mayusculas);

const minusculas1 = (string) => {
  return string.toUpperCase();
};
let mayusculas1 = minusculas1("soy otro hola en mayúscula :)");
console.log(mayusculas1);

/*8. Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese
parámetro. Pista: te servirá revisar qué hace la palabra reservada typeof.*/
const parametro = (tipo) => {
  return typeof tipo;
};
let resultadoTipo = parametro("hi :)");
console.log(resultadoTipo);

/*9. Crear una función que le pasamos el radio de un círculo y nos devuelve la
circunferencia. Pista: Investigá si el objeto Math tiene entre sus propiedades el número Pi.*/
//nota: La longitud de una circunferencia es igual a pi por el diámetro.
const circunferencia = (radio) => {
  let longitud = Math.PI * (radio * radio);
  return longitud;
};
let circunferenciaTotal = circunferencia(12);
console.log(circunferenciaTotal);

const circunferencia1 = (radio) => {
  return Math.PI * (radio * radio);
};
let circunferenciaTotal1 = circunferencia1(12);
console.log(circunferenciaTotal1);
