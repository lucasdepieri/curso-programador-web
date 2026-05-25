// script.js
function gerarTabuada() {
  let numero = Number(document.getElementById("numero").value);
  let resultado = document.getElementById("resultado");

  resultado.innerHTML = "";

  let contador = 1;

  while (contador <= 10) {
    resultado.innerHTML += `
      ${numero} x ${contador} = ${numero * contador}<br>
    `;
    
    contador++;
  }
}