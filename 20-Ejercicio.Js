/*
 * Crea una función que reciba días, horas, minutos y segundos (como enteros) retorne su resultado en milisegundos.
 */

function convertidor(dias,horas,seg){

    return (dias * 24 * 60 * 60 * 1000) + (horas * 60 * 60 * 1000) + (seg * 1000);
    
}

console.log(convertidor(3, 10, 15));  // 3 días, 10 horas, 15 segundos
console.log(convertidor(5, 2, 30));  // 3 días, 10 horas, 15 segundos
console.log(convertidor(3, 10, 15));  // 3 días, 10 horas, 15 segundos
