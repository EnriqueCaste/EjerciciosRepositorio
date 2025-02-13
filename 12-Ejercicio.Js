/*
 * Crea una función que reciba dos cadenas como parámetro (str1, str2) e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO estén presentes en str1.
 */

function ejercico12(string1,string2){

    let separetedString1 = string1.toLowerCase().split('');
    let separetedString2 = string2.toLowerCase().split('');

    
    let filteredString1 = []
    let filteredString2 = []


    for (letra of separetedString1){
        if(!separetedString2.includes(letra)){
            filteredString1.push(letra)
        }
    }  
    console.log(`La lista de carqacteres no repetidos en la primera lista conforme la segunda son ${filteredString1}`)

    for (letra of separetedString2){
        if (!separetedString1.includes(letra)){
            filteredString2.push(letra)
        }
    }
    console.log(`La lista de carqacteres no repetidos en la segunda lista conforme la primera son ${filteredString2}`)

    return [filteredString1.join(''),filteredString2.join('')]

}

console.log(ejercico12('wertyuioN','wertyuioM'))