/* 

******* ESTA LECCION NO SE PUEDE EJECUTAR, SOLO ES DEMOSTRACION ***********

EXPRESIONES

Una expresion es una composicion de codigo JavaScript que puede ser evaluada por
el compilador y producir un resultado

algunos ejemplos de expresiones simples pueden ser:

EXPRESIONES PRIMARIAS
referencias a variables, 
literales,,
algunas palabras claves.

*/
45
'hola mundo'
true
this // el alcance
null
a // donde a es una referencia a una variable

/*
EXPRESIONES ARITMETICAS
Expresiones que producen un number (numero)

*/

45 / 5;
a++;
a += 2;
a * 2;

/*
EXPRESIONES
Expresiones que producen un string (cadena de texto)
*/

'hola' + ' ' + 'mundo';

/*
ARRAYS Y OBJETOS
*/

[ ] //array literal
{ } //object literal
[1, 2, 3]
{ a: 1, b: 2 }
{ a: { b: 1 } }

/*
EXPRESIONES LOGICAS
*/
a && b
a || b
!a
/*
EXPRESIONES DE ACCESO A PROPIEDADES DE OBJETOS
*/
object.property //reference a property (or method) of an object
object[property]
object['property']
/*
EXPRESIONES DE CREACION DE OBJETOS
*/
new object()
new a(1)
new cualquierCosa('name', 2, { a: 4 })

/*
EXPRESIONES PARA DEFICINICION DE FUNCIONES
*/
function hola() { }

function mundo(a, b) { return a * b }
(a, b) => a * b

a => a * 2;

() => { return 2 }

/*
EXPRESIONES DE INVOCACION
*/

a.x(2)
window.resize()
