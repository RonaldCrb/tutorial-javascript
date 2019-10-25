/*

JavaScript tiene 3 grupos de tipos de datos... 

los tipos primitivos solo contienen 1 valor y pueden ser:

numeros = numbers
cadenas de texto = strings
valores booleanos = booleans
simbolos = symbol

y 2 tipos especiales que reciben un solo valor posible

nulo = null
indefinido = undefined

cualquier valor que no entre dentro de la categoria anterior (primitivos)
se considera un objeto en Javascript. 

los objetos pueden contener cualquier numero de valores de cualquier tipo primitivo
o pueden tambien contener otros objetos. asi mismo en ocasiones pueden contener
metodos. 

*/

// tipo string o cadena de texto, identificada por las comillas. 
const a = 'esto es una cadena de texto'
console.log('la variable a contiene un objeto de tipo:', typeof a)
console.log()
console.log()

// tipo number o numerico
const b = 42
console.log('la variable b contiene un objeto de tipo:', typeof b)
console.log()
console.log()

// tipo boolean o valor booleano
const c = true
console.log('la variable c contiene un objeto de tipo:', typeof c)
console.log()
console.log()

// tipo undefined o indefinido
const d = undefined
console.log('la variable d contiene un objeto de tipo:', typeof d)
console.log()
console.log()

// tipo null o nulo (nota como el compilador lo identifica como objeto)
const e = null
console.log('la variable e contiene un objeto de tipo:', typeof e)
console.log()
console.log()

// tipo array o arreglo
const f = ['hola', null, true, undefined, 523.234]
console.log('la variable f contiene un objeto de tipo:', typeof f)
console.log('los valores que estan contenidos en el array son de tipos: ')
console.log(typeof f[0], typeof f[1], typeof f[2], typeof f[3], typeof f[4],)
console.log()
console.log()

// tipo objeto o object (tambien conocido como map)
const g = { valor1: 'un valor', valor2: 42, valor3: false }
console.log('la variable g contiene un objeto de tipo:', typeof g)
console.log('los valores que estan contenidos en el objeto son de tipos: ')
console.log(typeof g.valor1, typeof g.valor2, typeof g.valor3)
console.log()
console.log()
