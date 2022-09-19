import "./styles.css";

const longitud=Number(prompt("Ingrese longitud del arreglo: "));
const numeros=new Array(longitud);
let sumaNumeros=0;

for (let i=0; i< longitud; i++) {
numeros[i]=Number(prompt(`Ingrese numero deseado. \nNumero ${i} de ${longitud}`));
sumaNumeros += numeros[i];
}

console.log(`el arreglo tiene una longitud de ${longitud} elementos.`);
console.log(`el arreglo contiene los siguientes elementos: ${numeros}`);
console.log(`la suma total de los elementos del arreglo es ${sumaNumeros}`);

