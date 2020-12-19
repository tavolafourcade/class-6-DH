let cursos = ['Programacion', 'MKT', 'UX', 'Data Science'];

//Destructuring of arrays
let [programacion, mkt] = cursos

console.log(cursos);
console.log(programacion);
console.log(mkt);



let persona = {
  nombre: 'Fanny',
  edad: 28,
  domicilio: 'Santiago, Chile'
}

//Destructuring of a literal object
let {nombre, edad } = persona;

console.log(nombre);
console.log(edad);