// Referencias a los elementos del DOM
const formulario = document.getElementById('formulario-numeros');
const numerosInput = document.getElementById('numerosInput');
const mayorOutput = document.getElementById('mayorOutput');
const menorOutput = document.getElementById('menorOutput');
const promedioOutput = document.getElementById('promedioOutput');
const errorTexto = document.getElementById('errorTexto');

formulario.addEventListener('submit', function (e) {
  e.preventDefault(); // Evita recargar la página

  const valorTexto = numerosInput.value.trim();

  // 1. Validar que no esté vacío
  if (valorTexto === '') {
    mostrarError();
    return;
  }

  // 2. Uso de split() para separar por comas y map() para convertir a Number
  const partes = valorTexto.split(',');
  const numeros = partes.map(function (item) {
    return Number(item.trim());
  });

  // Validar que existan elementos y que ninguno sea NaN
  const hayInvalido = numeros.some(function (num) {
    return isNaN(num) || num === null;
  });

  if (numeros.length === 0 || hayInvalido) {
    mostrarError();
    return;
  }

  // Ocultar mensaje de error tras validar exitosamente
  errorTexto.style.display = 'none';

  // 3. Cálculos: mayor, menor y promedio
  const mayor = Math.max(...numeros);
  const menor = Math.min(...numeros);
  const suma = numeros.reduce(function (acumulador, actual) {
    return acumulador + actual;
  }, 0);
  const promedio = suma / numeros.length;

  // 4. Mostrar resultados en las cajas readonly
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
