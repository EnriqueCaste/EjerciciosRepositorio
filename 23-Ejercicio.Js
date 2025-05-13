/*
 * Crea una función que reciba dos array, un booleano y retorne un array.
 * - Si el booleano es verdadero buscará y retornará los elementos comunes
 *   de los dos array.
 * - Si el booleano es falso buscará y retornará los elementos no comunes
 *   de los dos array.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

function conjuntos (array1, array2, booleano){


    

    if(booleano){
        return array1.filter(elemento => array2.includes(elemento))
    }else{
        const soloEnArray1 = array1.filter(elemento => !array2.includes(elemento));
        const soloEnArray2 = array2.filter(elemento => !array1.includes(elemento));
        return [...soloEnArray1, ...soloEnArray2];
    }
}


const resultado1 = conjuntos([1, 2, 3], [2, 3, 4], true);
console.log("Comunes:", resultado1); 

const resultado2 = conjuntos([1, 2, 3], [2, 3, 4], false);
console.log("No comunes:", resultado2); 
