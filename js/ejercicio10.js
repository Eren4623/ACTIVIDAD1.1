// Referencias a los elementos del DOM
const formulario = document.getElementById('formulario-temperatura');
const celsiusInput = document.getElementById('celsiusInput');
const fahrenheitOutput = document.getElementById('fahrenheitOutput');
const errorTexto = document.getElementById('errorTexto');

formulario.addEventListener('submit', function (e) {
  e.preventDefault(); // Evita que la página se recargue

  const valorTexto = celsiusInput.value.trim();

  // 1. Validaciones: verificar que no esté vacío y que sea un número válido
  if (valorTexto === '' || isNaN(valorTexto)) {
    errorTexto.style.display = 'block';
    fahrenheitOutput.value = '';
    return;
  }

  // Ocultar mensaje de error si pasa la validación
  errorTexto.style.display = 'none';

  // 2. Realizar el cálculo mediante la fórmula: F = (C * 9/5) + 32
  const celsius = parseFloat(valorTexto);
  const fahrenheit = (celsius * 9 / 5) + 32;

  // 3. Mostrar el resultado en el campo readonly con el sufijo °F
  fahrenheitOutput.value = fahrenheit + '°F';
});
