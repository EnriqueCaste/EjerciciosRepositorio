/*
 * Crea un programa que sea capaz de transformar texto natural a código morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en https://es.wikipedia.org/wiki/Código_morse.
 */

function transformadorTexto(string) {
    string = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    
    let isTexto = /[a-z]/.test(string); // Verificar si hay al menos una letra - Por lo tanto si es Texto
    let result = '';
    
    const morseCode = {
        "a": ".-",    "b": "-...",  "c": "-.-.",  "d": "-..",   "e": ".",     "f": "..-.", 
        "g": "--.",   "h": "....",  "i": "..",    "j": ".---",  "k": "-.-",   "l": ".-..", 
        "m": "--",    "n": "-.",    "o": "---",   "p": ".--.",  "q": "--.-",  "r": ".-.", 
        "s": "...",   "t": "-",     "u": "..-",   "v": "...-",  "w": ".--",   "x": "-..-", 
        "y": "-.--",  "z": "--..",
        "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....", 
        "6": "-....", "7": "--...", "8": "---..", "9": "----.", "0": "-----", 
        ".": ".-.-.-", ",": "--..--", "?": "..--..", "!": "-.-.--", "/": "-..-.", 
        "(": "-.--.", ")": "-.--.-", "&": ".-...", ":": "---...", ";": "-.-.-.", 
        "=": "-...-", "+": ".-.-.", "-": "-....-", "_": "..--.-", '"': ".-..-.", 
        "$": "...-..-", "@": ".--.-."," ": "   "
    };

    if (isTexto) { 
        for (let letra of string) {

            if (morseCode[letra]) {
                result += morseCode[letra] + " ";
            } else {
                return ('El texto contiene caracteres no soportados');
            }
        }
        return (`El texto original "${string}" traducido a codigo morse seria : ${result}`);

    } else {

        let morseWords = string.split("   "); 
        let textoTraducido = [];

        for (let morse of morseWords) {
            let letrasMorse = morse.split(" ") 
            let palabraTraducida = letrasMorse.map(morse => Object.keys(morseCode).find(key => morseCode[key] === morse)).join('');  

            textoTraducido.push(palabraTraducida);
        }
            return `Morse a Texto: ${textoTraducido.join(' ')}`;
    }

}
console.log(transformadorTexto('ahora solo te voy a hablar asi'))    
