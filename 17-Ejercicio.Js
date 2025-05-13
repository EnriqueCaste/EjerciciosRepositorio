/*
 * Crea una función que reciba un String de cualquier tipo y se encargue de poner en mayúscula la primera letra de cada palabra.
 */

function upFirstLetter(string){
     
    let letterMayus = string.split(" ").map(palabra => palabra[0]).join(",")
    letterMayus = letterMayus.toUpperCase()
    console.log(letterMayus)
    
}

upFirstLetter('ayyy bffff cdd dyyyy')