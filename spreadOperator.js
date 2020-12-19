let peliculasAccion = ['End Game', 'Iron Man 3', 'Captain America'];

let peliculasComedia = ['Mi pobre angelito', 'Que paso ayer?'];

//Ahora quiero mostrar todas las pelis que tengo

let peliculas = [...peliculasAccion, ...peliculasComedia];

console.log(peliculas);


//Propagando un objeto dentro de otro 

let generoComedias = {
  nombreGenero: 'Comedia',
  popularidad: 3
}

let miPobreAngelito = {
  nombre: 'Mi pobre angelito',
  duracion: 120,
  ...generoComedias
}

let quePasoAyer = {
  nombre: 'Que paso ayer?',
  duracion: 110,
  ...generoComedias

}

console.log(miPobreAngelito);
console.log(quePasoAyer);


//Propagando dentro de una función

function peliculasVistas(...nombresDePeliculas){
  for (let i = 0; i < nombresDePeliculas.length; i++){
    console.log('La persona ya vió ' + nombresDePeliculas[i])
  }
}

peliculasVistas('End Game', 'Iron Man 3', 'Mi pobre angelito');

