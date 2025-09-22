'use strict';

/**
 * addGrades(grades, newGrades)
 * Acumula lo ya introducido con lo nuevo (string con comas, número o array).
 * NO convierte a número aquí
 */
function addGrades(grades, newGrades) {
  var result = [];
  var i, parts, v;

  if (Array.isArray(grades)) {
    for (i = 0; i < grades.length; i++) {
      result.push(grades[i]);
    }
  }

  parts = [];
  if (typeof newGrades === 'string') {
    parts = newGrades.split(',');
  } else if (Array.isArray(newGrades)) {
    parts = newGrades;
  } else if (newGrades !== null && newGrades !== undefined && newGrades !== '') {
    parts = [newGrades];
  }


  for (i = 0; i < parts.length; i++) {
    v = parts[i];
    if (v !== '' && v !== null && v !== undefined) {
      result.push(v);
    }
  }

  return result;
}

/**
 * clearGrades(grades)
 * Devuelve solo números válidos en [0..10], convirtiendo strings con punto decimal.
 * Rechaza coma decimal ("4,5").
 */
function clearGrades(grades) {
  var clean = [];
  var i, v, trimmed, num;

  if (Array.isArray(grades)) {
    for (i = 0; i < grades.length; i++) {
      v = grades[i];

      if (typeof v === 'number') {
        if (isFinite(v) && v >= 0 && v <= 10) {
          clean.push(v);
        }
      } else if (typeof v === 'string') {
        // No aceptar coma como decimal
        if (v.indexOf(',') === -1) {
          trimmed = v.trim();
          if (trimmed !== '') {
            num = parseFloat(trimmed); // "7.5" -> 7.5
            if (isFinite(num) && num >= 0 && num <= 10) {
              clean.push(num);
            }
          }
        }
      }
    }
  }

  return clean;
}

/**
 * firstFailed(grades)
 * Devuelve la primera nota < 5; undefined si no hay.
 * (Se asume que grades ya está limpio; si no, limpiar antes en main.js)
 */
function firstFailed(grades) {
  var found = undefined;
  var i;

  if (Array.isArray(grades)) {
    for (i = 0; i < grades.length; i++) {
      if (grades[i] < 5) {
        found = grades[i];
        break;
      }
    }
  }

  return found;
}

/**
 * passedGrades(grades)
 * Devuelve las notas >= 5.
 * (Se asume que grades ya está limpio)
 */
function passedGrades(grades) {
  var result = [];
  var i;

  if (Array.isArray(grades)) {
    for (i = 0; i < grades.length; i++) {
      if (grades[i] >= 5) {
        result.push(grades[i]);
      }
    }
  }

  return result;
}

/**
 * avgGrade(grades)
 * Media redondeada a 2 decimales, DEVUELTA COMO STRING (p.ej. "6.28"),
 * que es lo que esperan los tests. Si está vacío, "0.00".
 * (Se asume que grades ya está limpio)
 */
function avgGrade(grades) {
  var result = "0.00";
  var sum = 0;
  var i;

  if (Array.isArray(grades) && grades.length > 0) {
    for (i = 0; i < grades.length; i++) {
      sum += grades[i];
    }
    result = (sum / grades.length).toFixed(2); // string con 2 decimales
  }

  return result;
}

/**
 * finalGrades(grades, increment)
 * Aplica porcentaje y redondea al entero más cercano.
 * Devuelve array de STRINGS y con tope 10 (p.ej. ['8','5','6','9']).
 * (Se asume que grades ya está limpio)
 */
function finalGrades(grades, increment) {
  var result = [];
  var inc = parseFloat(increment);
  var factor = 1;
  var i, val;

  if (isFinite(inc)) {
    factor = 1 + inc / 100;
  }

  if (Array.isArray(grades)) {
    for (i = 0; i < grades.length; i++) {
      val = Math.round(grades[i] * factor);
      if (val > 10) val = 10;
      if (val < 0) val = 0;
      result.push(String(val)); // los tests esperan strings
    }
  }

  return result;
}

module.exports = {
  addGrades,
  clearGrades,
  firstFailed,
  passedGrades,
  avgGrade,
  finalGrades
};
