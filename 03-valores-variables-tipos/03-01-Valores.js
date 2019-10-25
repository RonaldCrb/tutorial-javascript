/*

un fragmento de texto como "hola mundo" es un valor, un numero como por 
ejemplo 25 es un valor, true y false son valores tambien... 

en los lenguajes de programacion, los valores tienen un tipo especifico,
hay valores numericos (number), valores textuales(string), valores 
booleanos(true o false), tambien undefined(undefined) es un tipo de valor

en Javascript tenemos varios tipos de valores o tipos de datos... y cuando 
necesitamos hacer referencia a un valor especifico, lo asignamos a una 
variable... las variables pueden tener nombres, y los valores son lo que esta
guardado dentro de esas variables... de forma que si queremos almacenar
un valor en especifico, debemos asignarselo a una variable para poder 
referenciarlo luego mientras lo vayamos necesitando y llamarlo por el nombre
de la variable al cual esta asignado...

una buena analogia para esto es imaginar un casillero. el casillero tiene un numero
de identificacion, dentro de el podemos guardar objetos de distintos tipos y cuando
querramos referirnos a esos objetos, simplemente los llamamos por el numero de el
casillero. "quiero sumar los objetos del casillero #24 con los objetos del casillero
#33".

es importante comprender este concepto porque este es uno de los fundamentos de la
programacion. la informacion se guarda en forma de valores, los valores tienen un
tipo especifico y nos referimos a ellos por el nombre de la variable que le asignamos

*/

var identificador = 'valor'
const hola = 58
let buleano = false

console.log(identificador, '=>', hola, '=>', buleano)


const a = 5
const b = 10
const c = a + b

console.log(c)