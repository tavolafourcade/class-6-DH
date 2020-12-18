let notas = [10, 4, 5, 8, 9, 2, 7]

//Map()
let notasHastaEl100 = notas.map(function(numero){
  return numero * 10;
})

console.log(notasHastaEl100);

//Filter()
let notasAprobadas = notas.filter(function(numero){
  return numero >= 5;
})

console.log(notasAprobadas);

//Reduce()
let sumaNotas = notas.reduce(function(acumulador, numero){
  return acumulador + numero;
})

console.log(sumaNotas);

//forEach()

notas.forEach(function(valor, indice){
  console.log("En la posicion " + indice + " tengo el valor " + valor);
  
})