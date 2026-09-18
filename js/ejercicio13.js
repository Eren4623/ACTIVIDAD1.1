// Referencias a los elementos del DOM
const formulario = document.getElementById('formulario-voto');
const edadInput = document.getElementById('edadInput');
const resultadoOutput = document.getElementById('resultadoOutput');
const errorTexto = document.getElementById('errorTexto');

formulario.addEventListener('submit', function (e) {
  e.preventDefault(); // Evita recargar la página

  const valorTexto = edadInput.value.trim();
  const edad = Number(valorTexto);

  // 1. Validaciones: que no esté vacío, sea numérico, positivo y entero
  if (valorTexto === '' || isNaN(edad) || edad <= 0 || !Number.isInteger(edad)) {
    errorTexto.style.display = 'block';
    resultadoOutput.value = '';
    return;
  }

  // Ocultar mensaje de error tras pasar las validaciones
  errorTexto.style.display = 'none';

  // 2. Condición de validación: >= 18 años
  if (edad >= 18) {
    resultadoOutput.value = 'Puedes votar';
  } else {
    resultadoOutput.value = 'No puedes votar';
  }
});
