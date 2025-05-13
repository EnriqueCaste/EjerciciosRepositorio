/*
 * Escribe una función que calcule y retorne el factorial de un número dado de forma recursiva.
 */

function factorial(number){
    
    let numFactorial = []

    if(number > 1){
        for(i = 1; i <= number ; i++){
            numFactorial.push(i)
        }
    }

    let factoriales = numFactorial.map(num => {
        let total = 1

        for(i = 1; i <= num; i++){
            total *= i
        }
        return total
    })

    return factoriales;
    
}
console.log(factorial(7))



//////////////////////////////////////////////////////////////////////////


function factiroalReverse(number){

    if(number === 1 || number === 0) return 1

    return number * factiroalReverse(number - 1)
}
console.log(factiroalReverse(6))