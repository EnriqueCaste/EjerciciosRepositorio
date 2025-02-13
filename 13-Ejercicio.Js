/*
 * Escribe una función que reciba un texto y retorne verdadero ofalso (Boolean) según sean o no palíndromos.
 * Un Palíndromo es una palabra o expresión que es igual si se lee de izquierda a derecha que de derecha a izquierda.
 * NO se tienen en cuenta los espacios, signos de puntuación y tildes.
 * Ejemplo: Ana lleva al oso la avellana.
 */

function palindromo(string){

    let listWords = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().split(' ')    
    return listWords.map(word => word === word.split("").reverse().join(""));

}
console.log(palindromo('Ana lleva al oso la avellana'))