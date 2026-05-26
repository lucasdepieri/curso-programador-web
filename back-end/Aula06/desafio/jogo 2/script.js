let vidas = 3;
let pontos = 0;

let numero1;
let numero2;
let respostaCorreta;
let operador;

// Elementos
let vidasTexto = document.getElementById("vidas");
let pontosTexto = document.getElementById("pontos");
let perguntaTexto = document.getElementById("pergunta");
let mensagemTexto = document.getElementById("mensagem");
let inputResposta = document.getElementById("resposta");
let botaoReiniciar = document.getElementById("reiniciar");

// Gera pergunta aleatória
function gerarPergunta() {

    numero1 = Math.floor(Math.random() * 10) + 1;
    numero2 = Math.floor(Math.random() * 10) + 1;

    // Operações possíveis
    let operadores = ["+", "-", "*"];

    operador = operadores[Math.floor(Math.random() * operadores.length)];

    if (operador === "+") {
        respostaCorreta = numero1 + numero2;
    } 
    else if (operador === "-") {
        respostaCorreta = numero1 - numero2;
    } 
    else {
        respostaCorreta = numero1 * numero2;
    }

    perguntaTexto.textContent = `${numero1} ${operador} ${numero2} = ?`;
}

// Verifica resposta
function verificarResposta() {

    let respostaUsuario = Number(inputResposta.value);

    if (inputResposta.value === "") {
        mensagemTexto.textContent = "Digite uma resposta!";
        return;
    }

    if (respostaUsuario === respostaCorreta) {
        pontos++;
        mensagemTexto.textContent = "✅ Acertou!";
    } else  {
        vidas--;
        mensagemTexto.textContent =
            `❌ Errou! A resposta era ${respostaCorreta}`;
    }
    if (vidas === 1) {
        mensagemTexto.textContent = "⚠️ Cuidado! Você tem apenas uma vida restante.";
       
    }

    atualizarPainel();

    inputResposta.value = "";
    inputResposta.focus();''

    if (vidas > 0) {
        gerarPergunta();
    } else {
        fimDeJogo();
    }
}

// Atualiza pontos e vidas
function atualizarPainel() {
    vidasTexto.textContent = vidas;
    pontosTexto.textContent = pontos;
}

// Finaliza jogo
function fimDeJogo() {

    perguntaTexto.textContent = "🎮 Game Over!";

    mensagemTexto.textContent =
        `Sua pontuação final foi ${pontos} pontos.`;

    inputResposta.disabled = true;

    botaoReiniciar.style.display = "inline-block";
}

// Reinicia jogo
function reiniciarJogo() {

    vidas = 3;
    pontos = 0;

    atualizarPainel();

    inputResposta.disabled = false;

    mensagemTexto.textContent = "";

    botaoReiniciar.style.display = "none";

    gerarPergunta();
}

// Inicia jogo
gerarPergunta();