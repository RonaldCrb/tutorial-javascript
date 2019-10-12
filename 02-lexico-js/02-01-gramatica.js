// gramatica del javascript 

/*

Javascript como todos los lenguajes tiene normas gramaticas que lo distinguen y
que debemos comprender para poder leer y escribir codigo JS de forma rapida y 
productiva

*/

/*

Punto y Coma (semicolons):

dentro de tu contacto con el lenguaje, notaras que muchos programadores utilizan el
simbolo punto y coma, mientras que muchos otros lo omiten. para el interprete 
de JavaScript el simbolo de punto y coma es irrelevante. si te gusta y te ayuda
a comprender la estructura de los enunciados puedes usarlo y si quieres no usarlo.
En webicultores no los utilizamos
*/
console.log('********************************')

// ejemplo de semicolons
console.log('hola mundo con semicolon');
console.log('hola mundo sin semicolon')

/*

Espacios en blanco:

Javascript no considera los espacios en blanco. puedes usar los que quieras.
en la practica vas a utilizar los espacios y las lineas en blanco para segmentar
tu codigo y hacerlo mas facil de leer e interpretar.
*/
// ejemplo de espacios

console.log('********************************')

function hola(){return console.log('hola mundo sin espacios')}

function mundo() {
  return console.log('hola mundo con espacios')
}

hola()
mundo()

/*

Mayusculas y Minusculas

JavaScript es minucioso con las mayusculas y minusculas... eso quiere decir que

variable y Variable son 2 cosas distintas debido a que una comienza en mayusculas
y la otra en minuscula y eso le instruye al interprete que nos referimos a cosas
distintas. ten cuidado con mayusculas y minusculas
*/

/*

Los Literales

En javascript un literal es una espresion escrita en codigo fuente
*/

// ejemplo de literales
console.log('********************************')

console.log('cadena de texto')
console.log(33)
console.log(true)
console.log({ estoEsUn: 'objeto' })
console.log([ 'un array', 'de', 'cadenas de texto'])

/*

Los identificadores

los identificadores son nombres que le damos a las variables y a las funciones. 
sirven para identificar un valor en especifico que queremos invocar o utilizar

cualquier combinacion de valores puede ser un identificador excepto las palabras
reservadas:

break, do, instanceof, typeof, case, else, new, var, catch, finally, return, 
void, continue, for, switch, while, debugger, function, this, with, default, if,
throw, delete, in, try, class, enum, extends, super, const, export, import, 
implements, let, private, public, interface, package, protected, static, yield

*/

console.log('********************************')

const identificador1 = 'variable con el identificador1'

console.log(identificador1)

function identificador2() {
  console.log('funcion con el identificador2')
}

identificador2()

/*

UNICODE

Javascript soporta el estandard de UNICODE, lo cual significa que podemos escribir
caracteres de cualquier alfabeto, asi como caracteres especiales y hasta emojis

*/
console.log('********************************')

console.log('aB-1&%$/()[]{}😬')