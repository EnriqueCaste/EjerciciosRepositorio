/*
 * Crea un programa que invierta el orden de una cadena de texto
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */


function invertirTexto(texto){
const textoInvertido = texto.split('').reverse().join('')
console.log(textoInvertido)
}

invertirTexto('Hola que tal estas ')