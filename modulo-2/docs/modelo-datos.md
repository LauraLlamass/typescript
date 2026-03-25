# Modelo de datos del módulo 2

## Entidades del dominio

Se han definido dos entidades principales del sistema universitario:

- `Estudiante`
- `Asignatura`

Ambas se han modelado con `interface` porque representan objetos con una estructura clara y fija dentro del dominio.

Además, el identificador `id` se ha definido como `readonly` para evitar modificaciones una vez creado el objeto.

## Estado de matrícula

Se ha utilizado una unión discriminada llamada `EstadoMatricula` para representar los tres estados válidos de una matrícula:

- `ACTIVA`
- `SUSPENDIDA`
- `FINALIZADA`

Cada estado contiene únicamente las propiedades que le corresponden. Este enfoque evita estados ambiguos y mejora la seguridad del modelo.

## Servicio genérico

Se ha creado una interfaz genérica `RespuestaAPI<T>` y una función `obtenerRecurso<T>()`.

Esto permite reutilizar la misma estructura de respuesta para distintos tipos de datos, por ejemplo:

- un `Estudiante`
- un array de `Asignatura[]`

El uso de genéricos reduce duplicación de código y mantiene tipado fuerte en las respuestas simuladas.