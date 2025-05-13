/*
 * Crea una función que evalúe si un/a atleta ha superado correctamente unacarrera de obstáculos.
 * - La función recibirá dos parámetros:
 *      - Un array que sólo puede contener String con las palabras "run" o "jump"
 *      - Un String que represente la pista y sólo puede contener "_" (suelo) o "|" (valla)
 * - La función imprimirá cómo ha finalizado la carrera:
 *      - Si el atleta hace "run" en "_" (suelo) y "jump" en "|" (valla)será correcto y no variará el símbolo de esa parte de la pista.
 *      - Si hace "jump" en "_" (suelo), se variará la pista por "x".
 *      - Si hace "run" en "|" (valla), se variará la pista por "/".
 * - La función retornará un Boolean que indique si ha superado la carrera.
 * Para ello tiene que realizar la opción correcta en cada tramo de la pista.
 */

function accion(array1 , string2){

    let acciones = array1.filter(parametro => parametro == 'run' || parametro == 'jump');
    let accionesIncorrectas = array1.filter(parametro => parametro !== 'run' && parametro !== 'jump');
    if (accionesIncorrectas.length !== 0) {
        console.log(`Las siguientes acciones no son válidas: ${accionesIncorrectas.join(' ')}`);
        return false;
    }

    let caracter = string2.split('');
    let pista = caracter.filter(parametro => parametro === '|' || parametro === '_');
    let deleteCaracter = caracter.filter(parametro => parametro !== '|' && parametro !== '_');
    if(deleteCaracter.length !== 0 ){
        console.log(`Se han eliminado los siguientes caracteres ${deleteCaracter} ya que no coinciden con los parametros requeiridos "|" o "_"`)
    }

    if (acciones.length < pista.length) {
        console.log(`Faltan acciones para completar la carrera. La pista tiene más tramos que las acciones`);
        console.log(pista) 
        console.log(acciones)       
        return false;
    }
    if (acciones.length > pista.length) {
        console.log(`sobran acciones para completar la carrera`);
        console.log(pista) 
        console.log(acciones)       
        return false;
    }
    let error = false


    for(let i = 0; i < acciones.length && i < pista.length ; i++){
        if(acciones[i] === 'run' && pista[i] === '|'){
            pista[i] = '/'
            error = true
        }
        if(acciones[i] === 'jump' && pista[i] === '_'){
            pista[i] = 'x'
            error = true
        }

    }

    if (error) {
        console.log("El atleta ha cometido errores en la carrera.");
        console.log(pista)
        return false;
    } else {
        console.log("El atleta ha completado la carrera sin errores.");
        return true;
    } 

}   


accion(['jump', 'run'], '|_');  // Correcto
accion(['run', 'jump'], '|__');  // Error: correr en valla
accion(['jump', 'jump'], '|_'); // Error: saltar en suelo
accion(['fly', 'jump'], '|_');  // Acción inválida
