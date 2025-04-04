import fs from 'fs';

const ARCHIVO_ENTRADA = "./archivo-entrada.txt";
const ARCHIVO_SALIDA = "./archivo-salida.txt";

console.clear();
copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);

function copiar(origen, destino) {

    fs.readFile(origen, 'utf8', (error, info) => {
        if (error) {
            console.log(`Error al leer el archivo: ${error}`);
            return;
        }
        fs.writeFile(destino, info, 'utf8', (error) => {
            if (error) {
                console.log(`Error al escribir el archivo: ${error}`);
                return;
            }
            console.log(`El archivo ha sido copiado de '${origen}' a '${destino}'`);
        });
    });
}