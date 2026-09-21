const form = document.getElementById('formulario-conversion');
const kmInput = document.getElementById('kmInput');
const millasOutput = document.getElementById('millasOutput');
const mensajeError = document.getElementById('mensajeError');

// Evento de envío del formulario
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const valorTexto = kmInput.value.trim();

  if (valorTexto === '' || isNaN(valorTexto)) {
    mensajeError.style.display = 'block';
    millasOutput.value = '';
    return;
  }

  mensajeError.style.display = 'none';

  const kilometros = parseFloat(valorTexto);
  const factorConversion = 0.621371;
  const millas = kilometros * factorConversion;

  millasOutput.value = millas + ' millas';
});