// Referencias a los elementos del DOM
const formulario = document.getElementById('formulario-divisas');
const mxnInput = document.getElementById('mxnInput');
const usdOutput = document.getElementById('usdOutput');
const errorTexto = document.getElementById('errorTexto');

// Tasa de cambio predefinida (1 USD ≈ 18.18 MXN)
const TASA_DE_CAMBIO = 0.055;

formulario.addEventListener('submit', function (e) {
  e.preventDefault(); // Evita recargar la página

  const valorTexto = mxnInput.value.trim();
  const pesos = parseFloat(valorTexto);

  // 1. Validaciones: no vacío, valor numérico y estrictamente positivo (> 0)
  if (valorTexto === '' || isNaN(pesos) || pesos <= 0) {
    errorTexto.style.display = 'block';
    usdOutput.value = '';
    return;
  }

  // Ocultar mensaje de error tras pasar la validación
  errorTexto.style.display = 'none';

  // 2. Realizar la conversión: USD = MXN * tasa_de_cambio
  const dolares = pesos * TASA_DE_CAMBIO;

  // 3. Mostrar el resultado en el campo readonly con 2 decimales
  usdOutput.value = dolares.toFixed(2) + ' USD';
});
