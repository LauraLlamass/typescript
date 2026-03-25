import {
  calcularMedia,
  calcularMediana,
  filtrarAtipicos
} from "./math-utils.js";

const datos = [15, 8, 30, 110, 855, 99];

console.log("Media:", calcularMedia(datos));
console.log("Mediana:", calcularMediana(datos));
console.log("Filtrados:", filtrarAtipicos(datos, 20));