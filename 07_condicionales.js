// Ejercicio 1: ¿Puedo entrar al bar?
/*Si la edad es negativa, que se muestre en la consola este mensaje: "Error, edad inválida. Por favor ingrese un número válido."
Importante: no se deberá mostrar ningún otro mensaje.
● Si tiene 21 años, además de darle la bienvenida, felicitarlo por haber llegado a la mayoría de edad.
● Si su edad es impar, decirle en cualquiera de los mensajes: "¿Sabías que tu edad es impar?".*/
const validarEdad = (edad) => {
  let retorno = "";

  if (edad < 0) {
    retorno = "Error, edad inválida. Por favor ingrese un número válido.";
  } else if (edad < 18) {
    retorno = "No puede pasar al bar.";
  } else if (edad > 21) {
    retorno = "Puede pasar al bar, pero no puede tomar alcohol.";
  } else {
    retorno = "Puede pasar al bar y tomar alcohol.";
  }

  let impar = edad % 2 != 0 && edad > 0 ? " ¿Sabias que tu edad es impar?" : "";
  return retorno + impar;
};

let resultado = validarEdad(3);
console.log(resultado);

// Ejercicio 2: Total a pagar
/*Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y litrosConsumidos.
A continuación, definí y realizá los cálculos para obtener el total a pagar, teniendo en cuenta las siguientes consideraciones:
● Si el vehículo es “coche”, el precio por litro es de $86.
● Si es “moto”, ha de ser $70.
● Si es “autobús”, ha de ser $55.
● Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
● Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar.*/
const totalAPagar = (vehiculo, litroConsumido) => {
  let precioCoche = 86 * litroConsumido;
  let precioMoto = 70 * litroConsumido;
  let precioAutobus = 55 * litroConsumido;
  total = 0;

  litroConsumido <= 25 ? (total = 50) : (total = 25);

  if (vehiculo == "coche") {
    return precioCoche + total;
  } else if (vehiculo == "moto") {
    return precioMoto + total;
  } else if (vehiculo == "autobus") {
    return precioAutobus + total;
  }
  return "No ha especificado ni vehículo ni litro consumido en la funcion flecha totalAPagar()";
};

let resultadoFinal = totalAPagar("coche", 25);
console.log(resultadoFinal);

// Ejercicio 3: Local de sandwiches

/*Necesitamos armar el sistema para un local de venta de sándwiches. Los clientes eligen el sándwich base que tiene un precio y, por cada selección siguiente, se le suma
el valor de su selección al precio. Por ejemplo, partiendo de un sándwich base vegetariano con un precio x, después se selecciona pan negro con un precio y, por lo
que el total a pagar sería x+y, y así sucesivamente con el resto de los ingredientes. Como es un local que ya tenía un sistema previo, ellos ya tienen toda la interfaz
donde el usuario elige cada ingrediente, lo que nos facilita el trabajo, ya que nosotros recibiremos los datos de la siguiente manera.

Nos llega un string indicando el tipo de sándwich base. Estos tienen un valor base diferente por cada selección:
● Pollo = $150 (“pollo”)
● Carne = $200 (“carne”)
● Vegetariano (verduras asadas) = $100 (“veggie”)

Luego, el sistema pregunta al cliente qué tipo de pan quiere. Tienen para elegir entre otras tres opciones, por lo que recibiremos también otro string con el tipo de pan
deseado:
● Blanco c/orégano y parmesano = $50 (“blanco”)
● Negro c/avena = $60 (“negro”)
● Sin gluten = $75 (“s/gluten”)

Para finalizar, el sistema avanza preguntando al cliente si quiere los siguientes adicionales:
● Queso = $20
● Tomate = $15
● Lechuga = $10
● Cebolla = $15
● Mayonesa = $5
● Mostaza = $5

Cada uno de estos adicionales están representados por booleanos —es decir, true o false—, dependiendo de si aceptan o no cada uno de los adicionales —nos llegan un
total de seis valores booleanos, uno por cada adicional—. Nuestro trabajo es crear una función que reciba estos ocho parámetros —un string para el sándwich base, 
uno para el pan y los seis booleanos de los adicionales—. 
La función deberá consultar primero qué tipo de sándwich base se seleccionó, luego el tipo de pan, y por último deberá verificar qué adicionales se seleccionaron.

Finalmente, deberá retornar el valor numérico del total a pagar del cliente.*/
const localSandwich = () => {};
