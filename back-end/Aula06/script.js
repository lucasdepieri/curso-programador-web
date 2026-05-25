
function calcular() { 
let contador = 1;
let quantidadeNumeros = document.getElementById("quantidade").value;


while (contador <= quantidadeNumeros) {
  let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  document.write("Número aleatório gerado: " + numeroAleatorio + "<br>");
  contador++;
}
}

