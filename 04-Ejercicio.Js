 
/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

let listNumerosPrimos = []

function esPrimo(numero){
    
    if(numero < 2){
        return false
    }

    for(let i = 2; i <= Math.sqrt(numero);i++){

       if(numero % i === 0){
            return false
       }
    }
}

function numlista(lista){
    
    for(let num = 2; listNumerosPrimos.length < lista; num++ ){
        if(esPrimo){
            listNumerosPrimos.push(num);
        }
    }
    return listNumerosPrimos
}

console.log(numlista(100))