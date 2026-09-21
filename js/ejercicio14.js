const formulario = document.getElementById('formulario-numeros');
const numerosInput = document.getElementById('numerosInput');
const mayorOutput = document.getElementById('mayorOutput');
const menorOutput = document.getElementById('menorOutput');
const promedioOutput = document.getElementById('promedioOutput');
const errorTexto = document.getElementById('errorTexto');

formulario.addEventListener('submit', function (e) {
  e.preventDefault();

  const valorTexto = numerosInput.value.trim();

  if (valorTexto === '') {
    mostrarError();
    return;
  }

  const partes = valorTexto.split(',');
  const numeros = partes.map(function (item) {
    return Number(item.trim());
  });

  const hayInvalido = numeros.some(function (num) {
    return isNaN(num) || num === null;
  });

  if (numeros.length === 0 || hayInvalido) {
    mostrarError();
    return;
  }

  errorTexto.style.display = 'none';

  const mayor = Math.max(...numeros);
  const menor = Math.min(...numeros);
  const suma = numeros.reduce(function (acumulador, actual) {
    return acumulador + actual;
  }, 0);
  const promedio = suma / numeros.length;

  mayorOutput.value = mayor;
  menorOutput.value = menor;
  promedioOutput.value = Number.isInteger(promedio) ? promedio : promedio.toFixed(2);
});

function mostrarError() {
  errorTexto.style.display = 'block';
  mayorOutput.value = '';
  menorOutput.value = '';
  promedioOutput.value = '';
}
