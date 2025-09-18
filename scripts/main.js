'use strict'

let allGrades = []
let readed;
do {
  readed = prompt('Introduce una nota o varias separadas por coma (vacío o Cancelar para terminar)');
  if (readed && readed.trim() !== '') {
    allGrades = addGrades(allGrades, readed);
  }
} while (readed !== null && readed.trim() !== '');


console.log('Notas introducidas: ' + allGrades)

let clearedGrades = clearGrades(allGrades)
console.log('Notas válidas: ' + clearedGrades)

console.log('El primer suspenso es: ' + firstFailed(clearedGrades))

const passed = passedGrades(clearedGrades)
console.log(`Hay ${passed.length} aprobados que son: ${passed}`)

console.log('La nota media es: ' + avgGrade(clearedGrades))

console.log('Las notas finales son: ' + finalGrades(clearedGrades, 10))
