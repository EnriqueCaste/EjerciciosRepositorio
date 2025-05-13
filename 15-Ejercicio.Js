/*
 * Escribe una función que calcule si un número dado es un número de Armstrong (o también llamado narcisista).
 * Si no conoces qué es un número de Armstrong, debes buscar informació al respecto.
 */

function armstrong(number){
   
    if (typeof number !== "number" || isNaN(number)) {
        console.log("Por favor, introduce un número válido.");
        return
    }

    let digitos = number.toString().split("")
    let cantidad = digitos.length
    console.log(cantidad)


    let total = 0
       
        for(n of digitos){
            total += n**cantidad
        }
        console.log(total)
    
}

armstrong(4123123123123)
armstrong('hola que tal')