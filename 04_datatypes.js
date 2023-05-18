//-------------------- Considerar todos estos parámetros ------------------------------------//
// 1 temperatura (número)
let temperatura = 27;
// 2 ¿esta lloviendo? (booleano)
let llueve = false;
// 3 piso del ascensor (numero)
let pisoAscensor = 6;
// 4 hora actual (numero)
let hora = 22;
// 5 apertura fiambreria (numero)
let apertura = 8;
// 6 cierre fiambreria (numero)
let cierre = 18;

//-------------------- Ejercicio: Vamos al cine ------------------------------------//
let dia = 21; //tiene que ser menor o igual que 31/30/28
let finDeSemana = true; // booleano
let pelicula = "Avatar 2"; //string
let duracionMin = 192; //numero

// Vamos a ver la película: AVATAR //
let apta = true;

function aptaParaLaSemana() {
  let duracionMaximaParaLaSemana = 120;
  apta = duracionMin <= duracionMaximaParaLaSemana; //192 < 120 = false
  return apta;
}
console.log(aptaParaLaSemana());

function vamosAlCine() {
  let esAptaParaFinde = !aptaParaLaSemana();
  let vamos = finDeSemana == true && esAptaParaFinde == false;
  return vamos
    ? `Vamos al cine, ya que es el día ${dia} y cae fin de semana`
    : "No vamos al cine";
}
console.log(vamosAlCine());
