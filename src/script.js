document.getElementById('formulario').addEventListener('submit', function (e) {
  e.preventDefault();
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(num1) || isNaN(num2)) {
    resultado.textContent = "❌ Ingresá dos números válidos.";
    resultado.style.color = "red";
    return;
  }

  resultado.textContent = "Resultado: " + (num1 + num2);
  resultado.style.color = "#28a745";
});
