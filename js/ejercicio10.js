const formulario = document.getElementById('formulario-temperatura');
const celsiusInput = document.getElementById('celsiusInput');
const fahrenheitOutput = document.getElementById('fahrenheitOutput');
const errorTexto = document.getElementById('errorTexto');

formulario.addEventListener('submit', function (e) {
  e.preventDefault(); 

  const valorTexto = celsiusInput.value.trim();

  if (valorTexto === '' || isNaN(valorTexto)) {
    errorTexto.style.display = 'block';
    fahrenheitOutput.value = '';
    return;
  }

  errorTexto.style.display = 'none';

  const celsius = parseFloat(valorTexto);
  const fahrenheit = (celsius * 9 / 5) + 32;

  fahrenheitOutput.value = fahrenheit + '°F';
});
