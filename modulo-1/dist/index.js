"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Estoy ejecutando el index");
const math_utils_js_1 = require("./math-utils.js");
const datos = [10, 12, 15, 100, 9];
console.log("Media:", (0, math_utils_js_1.calcularMedia)(datos));
console.log("Mediana:", (0, math_utils_js_1.calcularMediana)(datos));
console.log("Filtrados:", (0, math_utils_js_1.filtrarAtipicos)(datos, 20));
