const functions = require('../scripts/functions');

const grades=[ "1,2",7, 4.5, " 5.6 ", NaN, 8, "8,6", undefined, 23, -1.2];
const clearedGrades=[7, 4.5, 5.6, 8];

test('addGrades añade una nota', () => {
  expect(functions.addGrades([ "1,2",7, 4.5, " 5.6 ", NaN, 8], "4")).toEqual(["1,2", 7, 4.5, " 5.6 ", NaN, 8, "4"]);
});
test('addGrades añade varias notas', () => {
  expect(functions.addGrades([2, 1.2], "3, 5.6 , NaN, null, 8,6, undefined, -1.2")).toEqual([2, 1.2, "3"," 5.6 " ," NaN"," null"," 8","6"," undefined"," -1.2"]);
});
test('clearGrades limpia el array', () => {
  expect(functions.clearGrades(grades)).toEqual(clearedGrades);
});
test('firstFailed devuelve el primer suspenso', () => {
  expect(functions.firstFailed(clearedGrades)).toBe(4.5);
});
test('passedGrades devuelve el array de aprobados', () => {
  expect(functions.passedGrades(clearedGrades)).toEqual([7, 5.6, 8]);
});
test('avgGrade devuelve la nota media redondeada a 2 decimales', () => {
  expect(functions.avgGrade(clearedGrades)).toBe("6.28");
});
test('finalGrades(grades, 10) devuelve las notas finales incrementadas un 10% y redondeadas', () => {
  expect(functions.finalGrades(clearedGrades, 10)).toEqual(['8', '5', '6', '9']);
});
test('finalGrades(grades, 25) devuelve las notas finales incrementadas un 25% y redondeadas', () => {
  expect(functions.finalGrades(clearedGrades, 25)).toEqual(['9', '6', '7', '10']);
});
