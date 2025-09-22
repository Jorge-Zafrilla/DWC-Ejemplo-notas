## Ejercicio - Notas
Vamos a hacer un programa que va pidiendo al usuario que introduzca las notas de un examen y las va guardando en un array. El usuario cada vez puede introducir una sóla nota (ej. 4.5) o varias separadas por coma (ej. 4.5, 6, 8.75) y se le continuará pidiendo notas hasta que pulse ‘Cancelar’ o lo deje vacío. Recuerda que en Javascript el símbolo decimal es el punto y no la coma.

Cada nota introducida se almacenará en un array y una vez que estén todas se mostrará por la consola:
- el array con los datos suministrados por el usuario
- el array “limpiado”: quitaremos del mismo todo lo que no sean números entre 0 y 10
- la nota del 1º suspenso
- el nº total de aprobados y sus notas
- la nota media del examen, redondeada a 2 decimales
- las notas finales: serán cada nota aumentada un porcentaje por buena actitud y redondeada a un entero

Organizaremos el código en 2 ficheros:
1. _main.js_: tendrá el código para mostrar los mensajes anteriormente indicados. Sólo contendrá sentencias `console.log` y llamadas a funciones del fichero functions.js (ya está hecho)
1. _functions.js_: sólo contendrá las funciones llamadas por main.js (deben llamarse **EXACTAMENTE** como os digo). Son:
-	addGrades(notas, item): se le pasa el array actual de notas y lo último introducido por el usuario y devuelve el nuevo array con todas las notas, sin modificar ninguna
-	clearGrades(notas): devuelve el array "limpio" y convierte sus elementos en números
-	firstFailed(notas): devuelve el primer elemento que está suspendido
-	passedGrades(notas): devuelve un array con sólo los aprobados
-	avgGrade(notas): devuelve la media de las notas redondeada a 2 decimales
-	finalGrades(notas, orcentaje): devuelve un nuevo array con cada nota incrementada el porcentaje pasado y redondeada sin decimales

Para poder testear el código como en el ejercicio anterior al final añadiremos la instrucción:
```javascript
module.exports = {
	addGrades,
	clearGrades,
	firstFailed,
	passedGrades,
	avgGrade,
	finalGrades
}
```

En el fichero _index.html_ tenemos enlazados los 2 scripts: primero el _functions.js_ y luego el _main.js_.

**RECUERDA**: sigue haciendo todas las buenas prácticas que se indicaban en el ejercicio anterior:
- el código deberá estar en un fichero externo y se incluirá al final del body
- tanto el código JS como el HTML deben estar correctamente indentados
- ten en cuenta los datos que pueden “estropearnos” el programa: que el usuario introduzca un dato de un tipo que no te esperas, que omita algún parámetro, …
- usa las recomendaciones indicadas: ‘use strict’, …
- el programa debe ser lo más limpio y claro posible, sin variables o código innecesario
- siempre es bueno refactorizar el código: cuando nuestro programa ya funciona bien le damos un "repaso" para mejorar su claridad (y lo volvemos a probar)
