let fechaActual = new Date();

//Devuelve la fecha de forma mas legible
console.log(fechaActual.toUTCString());

//Devuelve el anio actual
console.log(fechaActual.getFullYear())

//Devuelve el mes a partir de 0.
console.log(fechaActual.getMonth())

//Devuelve el dia de la semana en el que estoy
console.log(fechaActual.getDay())

//Devuelve el dia del mes en el que estoy
console.log(fechaActual.getDate())


//Mostrando la fecha de forma mas legible
let anio = fechaActual.getFullYear();

let mes = fechaActual.getMonth();

let dia = fechaActual.getDate();

console.log("Hoy es el " + dia + " de " + (mes + 1) + " del " + anio)

//Pero queremos indicar el nombre del mes
let meses = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Setiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
]

console.log("Hoy es el " + dia + " de " + meses[mes] + " del " + anio)