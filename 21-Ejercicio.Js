/*
 * Crea una función que sume 2 números y retorne su resultado pasados unos segundos.
 * - Recibirá por parámetros los 2 números a sumar y los segundos que debe tardar en finalizar su ejecución.
 * - Si el lenguaje lo soporta, deberá retornar el resultado de forma asíncrona, es decir, sin detener la ejecución del programa principal.
 *   Se podría ejecutar varias veces al mismo tiempo.
 */

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function ejecutar(number1, number2) {
    await delay(3000);  
    return number1 + number2;  
}

ejecutar(3, 6).then(resultado => console.log(resultado));
