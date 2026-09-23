// ==========================================
// 1. FUNCIONES FLECHA PARA CADA OPERACIÓN
// ==========================================
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

// ==========================================
// 2. REFERENCIAS A ELEMENTOS DEL DOM
// ==========================================
const inputNumero1 = document.getElementById("numero1");
const inputNumero2 = document.getElementById("numero2");
const inputResultado = document.getElementById("resultado");
const botones = document.querySelectorAll(".button-grid button");

// ==========================================
// 3. FUNCIÓN FLECHA PARA MOSTRAR MENSAJES CON SWEETALERT2
// ==========================================
const mostrarAlertaError = (mensaje) => {
  Swal.fire({
    icon: "error",
    title: "¡Error!",
    text: mensaje,
    confirmButtonColor: "#007bff"
  });
};

// ==========================================
// 4. FUNCIÓN PRINCIPAL DE GESTIÓN
// ==========================================
const ejecutarOperacion = (tipoOperacion) => {
  const val1 = inputNumero1.value.trim();
  const val2 = inputNumero2.value.trim();

  // Validación: campos vacíos
  if (val1 === "" || val2 === "") {
    mostrarAlertaError("Por favor completa ambos campos antes de realizar una operación.");
    inputResultado.value = "";
    return;
  }

  const num1 = parseFloat(val1);
  const num2 = parseFloat(val2);

  // Validación: entradas numéricas válidas
  if (isNaN(num1) || isNaN(num2)) {
    mostrarAlertaError("Ambos valores deben ser números válidos.");
    inputResultado.value = "";
    return;
  }

  let res = 0;

  // Llamada a la función flecha correspondiente
  switch (tipoOperacion) {
    case "sumar":
      res = sumar(num1, num2);
      break;

    case "restar":
      res = restar(num1, num2);
      break;

    case "multiplicar":
      res = multiplicar(num1, num2);
      break;

    case "dividir":
      // Validación especial: división entre cero
      if (num2 === 0) {
        mostrarAlertaError("No es posible dividir un número entre cero (0).");
        inputResultado.value = "";
        return;
      }
      res = dividir(num1, num2);
      break;

    default:
      mostrarAlertaError("Operación no reconocida.");
      return;
  }

  // Redondeo preventivo para decimales periódicos y asignación al campo readonly
  inputResultado.value = Number.isInteger(res) ? res : parseFloat(res.toFixed(4));
};

// ==========================================
// 5. ASIGNACIÓN DE EVENTOS A LOS BOTONES
// ==========================================
botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const operacion = boton.getAttribute("data-operacion");
    ejecutarOperacion(operacion);
  });
});