import { getCurrencyAbbreviation , getCountryByAbbreviation } from 'currency-map-country';

 let monedaPais, codigoPais;

 codigoPais = 'AR';

 monedaPais = obtenerMoneda(codigoPais);
 console.log(`La moneda del país ${codigoPais} es: ${monedaPais}`);
 
 function obtenerMoneda(code){
    return getCurrencyAbbreviation(getCountryByAbbreviation(code))
 
 }