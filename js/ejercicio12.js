const formulario = document.getElementById('formulario-divisas');
const mxnInput = document.getElementById('mxnInput');
const usdOutput = document.getElementById('usdOutput');
const errorTexto = document.getElementById('errorTexto');

const TASA_DE_CAMBIO = 0.055;

formulario.addEventListener('submit', function (e) {
  e.preventDefault(); 

  const valorTexto = mxnInput.value.trim();
  const pesos = parseFloat(valorTexto);

  if (valorTexto === '' || isNaN(pesos) || pesos <= 0) {
    errorTexto.style.display = 'block';
    usdOutput.value = '';
    return;
  }

  errorTexto.style.display = 'none';

  const dolares = pesos * TASA_DE_CAMBIO;

  usdOutput.value = dolares.toFixed(2) + ' USD';
});
