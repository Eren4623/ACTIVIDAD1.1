const formulario = document.getElementById('formulario-voto');
const edadInput = document.getElementById('edadInput');
const resultadoOutput = document.getElementById('resultadoOutput');
const errorTexto = document.getElementById('errorTexto');

formulario.addEventListener('submit', function (e) {
  e.preventDefault();

  const valorTexto = edadInput.value.trim();
  const edad = Number(valorTexto);

  if (valorTexto === '' || isNaN(edad) || edad <= 0 || !Number.isInteger(edad)) {
    errorTexto.style.display = 'block';
    resultadoOutput.value = '';
    return;
  }

  errorTexto.style.display = 'none';

  if (edad >= 18) {
    resultadoOutput.value = 'Puedes votar';
  } else {
    resultadoOutput.value = 'No puedes votar';
  }
});
