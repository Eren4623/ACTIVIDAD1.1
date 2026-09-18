// Referencias a los elementos del DOM
const form = document.getElementById('formulario-conversion');
const kmInput = document.getElementById('kmInput');
const millasOutput = document.getElementById('millasOutput');
const mensajeError = document.getElementById('mensajeError');

// Evento de envío del formulario
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Evita recargar la página

  const valorTexto = kmInput.value.trim();

  // 1. Validar que no esté vacío y que sea un valor numérico
  if (valorTexto === '' || isNaN(valorTexto)) {
    mensajeError.style.display = 'block';
    millasOutput.value = '';
    return;
  }

  // Ocultar mensaje de error si la validación pasa
  mensajeError.style.display = 'none';

  // 2. Realizar la conversión matemática: M = K * 0.621371
  const kilometros = parseFloat(valorTexto);
  const factorConversion = 0.621371;
  const millas = kilometros * factorConversion;

  // 3. Escribir el resultado en la caja readonly
  millasOutput.value = millas + ' millas';
});