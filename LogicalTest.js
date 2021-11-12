/**
 * Barrio de 8 casas (celdas) functionCells()
 * @param cells {Object} - Lista de enteros estado actual de la casa. 1= Activa, 0= Inactiva
 * @param days {number} - Representa la cantidad de días
 * @returns [] {Object} Listado de números enteros con el orden de las cosas segun los dias
 */

// Creo una función principal para evaluar los parámetros de entrada
const functionCells = (cells, days) => {
  // Creo un ciclo while para iterar sobre la cantidad de días
  while (days) {
    // variable temporal para guardar el orden de las celdas
    let cellStatus = [];

    // Ciclo for para evaluar el estado de la lista actual en cada posición
    for (let index = 0; index < cells.length; index++) {
      // Inicializo dos variables de izquierda y derecha en 0 (inactiva) para evaluar
      let leftCell = 0, rightCell = 0;

      // Si está en la primera posición dejamos la celda izquierda vecina como inactiva  0
      // y  guardamos valor de la celda vecina derecha pasando el siguiente valor
      if (index === 0) {
        rightCell = cells[index + 1];
      }
      // Si esta en la última posición dejamos la celda derecha inactiva 0
      // y guardamos el valor de la celda izquierda
      else if (index === cells.length - 1) {
        leftCell = cells[index - 1];
      }
      // Sino guardamos el valor de ambas posiciones vecinas izquierda y derecha
      else {
        leftCell = cells[index - 1];
        rightCell = cells[index + 1];
      }
      // Evaluamos con un ternario si ambos vecinos están activos o inactivos para cambiar su estado o no
      leftCell === rightCell ? cellStatus.push(0) : cellStatus.push(1);
    }
    // Restamos 1 dia antes de salir del bucle
    days--;
    // Guardamos el valor del estado de todas las celdas
    cells = [...cellStatus];
  }
  // Retornamos el valor de las celdas después de iterar sobre los días
  return cells;
};

console.table(functionCells([1, 0, 0, 0, 0, 1, 0, 0], 1));
// Ouput: [0,1,0,0,1,0,1,0]
console.table(functionCells([1, 1, 1, 0, 1, 1, 1, 1], 2)); 
// Output: [0,0,0,0,0,1,1,0] 
