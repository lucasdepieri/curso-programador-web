// script.js

let pontosJogador = 0;
let pontosComputador = 0;
let empates = 0;
let rodadas = 0;

function jogar(escolhaJogador) {

  if (rodadas >= 5) {
    alert("O jogo acabou! Clique em 'Jogar Novamente'.");
    return;
  }

  let opcoes = ["Pedra", "Papel", "Tesoura"];

  let escolhaComputador =
    opcoes[Math.floor(Math.random() * 3)];

  let resultado = "";

  if (escolhaJogador === escolhaComputador) {
    resultado = "🤝 Empate!";
    empates++;

  } else if (
    (escolhaJogador === "Pedra" && escolhaComputador === "Tesoura") ||
    (escolhaJogador === "Papel" && escolhaComputador === "Pedra") ||
    (escolhaJogador === "Tesoura" && escolhaComputador === "Papel")
  ) {
    resultado = "🎉 Você venceu!";
    pontosJogador++;

  } else {
    resultado = "💻 Computador venceu!";
    pontosComputador++;
  }

  rodadas++;

  document.getElementById("jogador").innerHTML =
    "Jogador: " + escolhaJogador;

  document.getElementById("computador").innerHTML =
    "Computador: " + escolhaComputador;

  document.getElementById("mensagem").innerHTML =
    resultado;

  document.getElementById("pontosJogador").innerHTML =
    pontosJogador;

  document.getElementById("pontosComputador").innerHTML =
    pontosComputador;

  document.getElementById("empates").innerHTML =
    empates;

  document.getElementById("rodadas").innerHTML =
    rodadas;

  if (rodadas === 5) {

    let campeao = "";

    if (pontosJogador > pontosComputador) {
      campeao = "🏆 Você ganhou o Melhor de 5!";
    } else if (pontosComputador > pontosJogador) {
      campeao = "💻 O computador ganhou o Melhor de 5!";
    } else {
      campeao = "🤝 O Melhor de 5 terminou empatado!";
    }

    setTimeout(() => {
      alert(campeao);
    }, 200);
  }
}

function reiniciarJogo() {

  pontosJogador = 0;
  pontosComputador = 0;
  empates = 0;
  rodadas = 0;

  document.getElementById("jogador").innerHTML =
    "Jogador: ";

  document.getElementById("computador").innerHTML =
    "Computador: ";

  document.getElementById("mensagem").innerHTML =
    "Faça sua jogada!";

  document.getElementById("pontosJogador").innerHTML =
    0;

  document.getElementById("pontosComputador").innerHTML =
    0;

  document.getElementById("empates").innerHTML =
    0;

  document.getElementById("rodadas").innerHTML =
    0;
}