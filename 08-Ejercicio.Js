/*
 * Crea un programa que cuente cuantas veces se repite cada palabra y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 */

function contadorPalabras(string){

    let words = string.split(' ')
    console.log(words)
    let contador = {}
  
    for(let word of words){

      if(contador[word]){
        
        contador[word]++

      }else if(!contador[word]){

        contador[word] = 1
      }
      console.log(`Esta palabra es ${word} y aparece un total de : ${contador[word]}`)
    } 

}
contadorPalabras('hola me llamo kike, me llamo enrique tambien, hola de nuevo')


