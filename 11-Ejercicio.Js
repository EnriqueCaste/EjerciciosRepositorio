/*
 * Crea un programa que comprueba si los paréntesis, llaves y corchetesde una expresión están equilibrados.
 * - Equilibrado significa que estos delimitadores se abren y cieranen orden y de forma correcta.
 * - Paréntesis, llaves y corchetes son igual de prioritarios.
 *   No hay uno más importante que otro.
 * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
 * - Expresión no balanceada: { a * ( c + d ) ] - 5 }
 */

function comprobador(expresion){
    let filtredExp = expresion.split('')
    console.log(filtredExp)
}
comprobador('2 + 3 ( 4 - 1 )')