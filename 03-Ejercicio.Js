/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

function fibonacci() {
    let listaFibo = [0, 1];
  
    for (let i = 2; i < 50; i++) {
      const nextNumber = listaFibo[i - 1] + listaFibo[i - 2]; // 
      listaFibo.push(nextNumber);
    }
  
    console.log(listaFibo);
  }
  
  fibonacci();
  
 