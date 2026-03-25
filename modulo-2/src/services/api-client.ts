export interface RespuestaAPI<T> {
  codigoEstado: number;
  exito: boolean;
  datos: T;
  errores?: string[];
}

export function obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (endpoint === "estudiante") {
        resolve({
          codigoEstado: 200,
          exito: true,
          datos: {
            id: "EST-001",
            nombre: "María Gracía",
            email: "mariag@universidad.es"
          } as T
        });
        return;
      }

      if (endpoint === "asignaturas") {
        resolve({
          codigoEstado: 200,
          exito: true,
          datos: [
            { id: "ASG-101", nombre: "Programación", creditos: 6 },
            { id: "ASG-102", nombre: "Bases de Datos", creditos: 6 }
          ] as T
        });
        return;
      }

      reject({
        codigoEstado: 404,
        exito: false,
        errores: [`Endpoint no encontrado: ${endpoint}`]
      });
    }, 1000);
  });
}