/*

Una variable es un valor, asignado a un identificador(numero del casillero), de esta
forma podemos referenciar ese valor para utilizarlo en nuestros programas.

Las variables en Javascript tienen un tipo, pero siendo javascript un lenguaje de tipado
dinamico (tipado debil o suelto) podemos tener flexibilidad a la hora de reasignar valores
de otros tipos a las variables. En pocas palabras, una vez que asignamos un valor de un tipo
especifico a una variable, luego podemos reasignarle otro valor de otro tipo sin ningun
problema. sin embargo esto tiene otras implicaciones importantes que luego veremos en detalle

Las variables deben ser declaradas antes de poder usarlas. en Javascript hay 3 maneras de
declarar una variable. y cada una de esas formas te permite interactuar con esa variable
de una forma especifica.

** Utilizando la palabra var
Antes de ES6 (ES2015) var era la unica forma de declarar variables en Javascript.
*/
var a = 0
console.log('variable a = ', a)
/*

si declaras la variable pero no asignas un valor especifico, automaticamente la variable recibe
el valor "undefined" que es un tipo de valor especial que nos indica que esa variable no tienen
ningun valor asignado
*/
var b
console.log('variable b = ', b)
/*
puedes redeclarar la variable tantas veces como quieras con distintos valores, esto sobreescribe
el valor anterior y reasigna el nuevo valor a la variable.
*/
var c = 1
console.log('variable c = ', c)
/*
tambien puedes reasignar el valor sin necesidad de la palabra var
*/
c = 2
console.log('variable c = ', c)
/*

** Utilizando la palabra let

let es una nueva forma de declarar variables introducida en 2015 con ES6, esencialmente es una
forma de declarar variables con un alcance especifico, solo podemos referenciarlas dentro de el 
bloque o expresion donde las declaramos y dentro de todos los bloques y expresiones incluidos 
dentro de ese mismo alcance. en futuros capitulos hablaremos de el alcance de las variables con
detenimiento.
*/

let d = 234.3234
console.log('variable d = ', d)

d = 888

console.log(d)

/*
los desarrolladores modernos de Javascript normalmente utilizan let en lugar de var.

** Utilizando la palabra const

Las variables de tipo let, nos permiten reasignarles un nuevo valor posteriormente.
sin embargo una vez que declaramos una variable con la palabra const ya no podemos
reasignarla posteriormente.
*/
const e = 'prueba'
console.log('variable e = ', e)

/*
Aunque no podamos reasignarle un nuevo valor a esta variable, podemos mutar el valor 
si y solo si el valor de esta variable es de tipo compuesto

const tiene un alcance igual al de la palabra let.

en una conclusion simplista, las buenas practicas nos dicen que debemos utilizar const siempre que
sea posible... en su defecto, podemos usar let solo cuando requerimos cambiar el valor de la variable

este razonamiento se debe a que en principio los programadores debemos utilizar siempre la estructura
mas simple y restrictiva posible para evitar errores luego cuando la base de codigo va creciendo en
complejidad. esto es un principio basico de la programacion en cualquier lenguaje.

*/