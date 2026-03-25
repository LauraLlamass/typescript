import type { Estudiante } from "./domain/types/estudiante.js";
import type { Asignatura } from "./domain/types/asignatura.js";
import type { EstadoMatricula } from "./domain/types/estado-matricula.js";
import { generarReporte } from "./domain/generar-reporte.js";
import { obtenerRecurso } from "./services/api-client.js";

const estado1: EstadoMatricula = {
  tipo: "ACTIVA",
  asignaturas: [
    { id: "ASG-101", nombre: "Programación", creditos: 6 },
    { id: "ASG-102", nombre: "Entornos de Desarrollo", creditos: 4 }
  ]
};

const estado2: EstadoMatricula = {
  tipo: "SUSPENDIDA",
  motivo: "Impago de tasas"
};

const estado3: EstadoMatricula = {
  tipo: "FINALIZADA",
  notaMedia: 9.3
};

console.log(generarReporte(estado1));
console.log(generarReporte(estado2));
console.log(generarReporte(estado3));

async function main(): Promise<void> {
  const respuestaEstudiante = await obtenerRecurso<Estudiante>("estudiante");
  console.log("Estudiante:", respuestaEstudiante);

  const respuestaAsignaturas = await obtenerRecurso<Asignatura[]>("asignaturas");
  console.log("Asignaturas:", respuestaAsignaturas);
}

main().catch((error) => {
  console.error("Error al obtener recurso:", error);
});