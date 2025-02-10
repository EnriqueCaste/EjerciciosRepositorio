/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */


function sonAnagramas(palabra1, palabra2) {
    if (palabra1.length !== palabra2.length) {
      return false;
    }
  
    const palabra1Ordenada = palabra1.split('').sort().join('');
    const palabra2Ordenada = palabra2.split('').sort().join('');
  
    return palabra1Ordenada === palabra2Ordenada;
  }
  
  console.log(sonAnagramas("amor", "roma")); 
  console.log(sonAnagramas("hola", "adios")); 
  








