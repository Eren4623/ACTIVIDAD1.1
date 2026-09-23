// Arreglo donde se almacenarán los objetos de cada estudiante
const estudiantes = [];

// Elementos del DOM
const inputNombre = document.getElementById("nombre");
const inputCalificacion = document.getElementById("calificacion");
const btnAgregar = document.getElementById("btnAgregar");
const btnCalcular = document.getElementById("btnCalcular");
const listaEstudiantes = document.getElementById("listaEstudiantes");

// Elementos readonly de resultado
const inputPromedio = document.getElementById("promedio");
const inputMejorEstudiante = document.getElementById("mejorEstudiante");
const inputPeorEstudiante = document.getElementById("peorEstudiante");

/**
 * Función para registrar un nuevo estudiante como objeto
 */
btnAgregar.addEventListener("click", () => {
  const nombre = inputNombre.value.trim();
  const calificacion = parseFloat(inputCalificacion.value);

  // Validación de datos
  if (nombre === "" || isNaN(calificacion)) {
    alert("Por favor ingresa un nombre y una calificación válida.");
    return;
  }

  if (calificacion < 0 || calificacion > 100) {
    alert("La calificación debe estar entre 0 y 100.");
    return;
  }

  // 1. Creación del objeto estudiante conforme al ejercicio
  const nuevoEstudiante = {
    nombre: nombre,
    calificacion: calificacion
  };

  // 2. Inserción del objeto al arreglo
  estudiantes.push(nuevoEstudiante);

  // Actualizar la lista visual
  actualizarLista();

  // Limpiar inputs
  inputNombre.value = "";
  inputCalificacion.value = "";
  inputNombre.focus();
});

/**
 * Muestra los estudiantes registrados en pantalla
 */
function actualizarLista() {
  listaEstudiantes.innerHTML = "";

  estudiantes.forEach((estudiante) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${estudiante.nombre}</span> <strong>${estudiante.calificacion}</strong>`;
    listaEstudiantes.appendChild(li);
  });
}

/**
 * Realiza las operaciones solicitadas recorriendo los objetos del arreglo
 */
btnCalcular.addEventListener("click", () => {
  if (estudiantes.length === 0) {
    alert("Debes ingresar al menos un estudiante antes de realizar las operaciones.");
    return;
  }

  let sumaCalificaciones = 0;
  let estudianteMayor = estudiantes[0];
  let estudianteMenor = estudiantes[0];

  // Recorrido de los objetos para calcular promedio, mayor y menor
  for (let i = 0; i < estudiantes.length; i++) {
    const actual = estudiantes[i];

    // Acumulador de promedio
    sumaCalificaciones += actual.calificacion;

    // Comparación para la calificación más alta
    if (actual.calificacion > estudianteMayor.calificacion) {
      estudianteMayor = actual;
    }

    // Comparación para la calificación más baja
    if (actual.calificacion < estudianteMenor.calificacion) {
      estudianteMenor = actual;
    }
  }

  const promedio = (sumaCalificaciones / estudiantes.length).toFixed(2);

  // Asignar los valores a los inputs readonly
  inputPromedio.value = promedio;
  inputMejorEstudiante.value = `${estudianteMayor.nombre} (${estudianteMayor.calificacion})`;
  inputPeorEstudiante.value = `${estudianteMenor.nombre} (${estudianteMenor.calificacion})`;
});