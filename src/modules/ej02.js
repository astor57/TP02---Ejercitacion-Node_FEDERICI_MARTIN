/* Importo la constante PI y la función sumar del módulo matematica. */
import {PI, sumar, restar, multiplicar, dividir, textoNums} from './src/modules/matematica.js';
let total, restar, multiplicar, dividir, numero1=10, numero2=20;
console.clear();
console.log(`La constante PI vale '${PI}'`); // Uso la constante PI importada.
total = sumar(numero1, numero2); // Uso la función sumar importada.
console.log(`sumar(${numero1}, ${numero2}) = ${total}`);
restar = restar(numero1, numero2);
console.log(`restar(${numero1}, ${numero2}) = ${restar}`);
console.log(`multiplicar(${numero1}, ${numero2}) = ${multiplicar(numero1, numero2)}`);
console.log(`dividir(${numero1}, ${numero2}) = ${dividir(numero1, numero2)}`);

console.log("Array:", numerosTexto);