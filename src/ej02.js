/* Importo la constante PI y la función sumar del módulo matematica. */
import {PI, sumar, restar, multiplicacion, division, textoNums} from './modules/matematica.js';
let total, restita, multiplicar, dividir, numero1=10, numero2=20;
console.clear();

console.log(`La constante PI vale '${PI}'`); // Uso la constante PI importada.
total = sumar(numero1, numero2); 
console.log(`sumar(${numero1}, ${numero2}) = ${total}`);

restita = restar(numero1, numero2);
console.log(`restar (${numero1}, ${numero2}) = ${restita}`);

multiplicar= multiplicacion(numero1, numero2);
console.log(`multiplicar(${numero1}, ${numero2}) = ${multiplicar}`);

dividir= division(numero1, numero2);
console.log(`dividir(${numero1}, ${numero2}) = ${dividir}`);

console.log("Array:", textoNums);