let numeroSecreto;
let tentativas;
let limiteTentativas = 5;

// Elementos
let mensagem = document.getElementById("mensagem");
let tentativasTexto = document.getElementById("tentativas");
let dificuldade = document.getElementById("dificuldade");
let palpite = document.getElementById("palpite");
let info = document.getElementById("info");
let botaoReiniciar = document.getElementById("reiniciar");

// Inicia o jogo
function iniciarJogo() {

    let maximo = Number(dificuldade.value);

    numeroSecreto = Math.floor(Math.random() * maximo) + 1;

    tentativas = 0;

    tentativasTexto.textContent = tentativas;

    mensagem.textContent = "";

    info.textContent = `Tente adivinhar um número entre 1 e ${maximo}`;

    palpite.disabled = false;

    botaoReiniciar.style.display = "none";

    palpite.value = "";

    console.log("Número secreto:", numeroSecreto);
    alert("Número secreto: " + numeroSecreto);
}

// Verifica palpite
function verificarPalpite() {

    let valor = Number(palpite.value);

    if (palpite.value === "") {
        mensagem.textContent = "Digite um número!";
        return;
    }

    tentativas++;
    if (tentativas === 2) {
        document.getElementById("tentativas-info").style.backgroundColor = "yellow";
    }
    if (tentativas === 4) {
        document.getElementById("tentativas-info").style.backgroundColor = "red";
    }


    tentativasTexto.textContent = tentativas;

    if (valor > numeroSecreto) {
        mensagem.textContent = "📈 Muito alto!";
    }
    else if (valor < numeroSecreto) {
        mensagem.textContent = "📉 Muito baixo!";
    }
    else {
        mensagem.textContent = "🎉 Parabéns! Você acertou!";
        finalizarJogo();
        return;
    }

    if (tentativas >= limiteTentativas) {
        mensagem.textContent =
            `❌ Fim de jogo! O número era ${numeroSecreto}.`;

        finalizarJogo();
    }

    palpite.value = "";
    palpite.focus();
}

// Finaliza jogo
function finalizarJogo() {
    palpite.disabled = true;
    botaoReiniciar.style.display = "inline-block";
}

// Reinicia jogo
function reiniciarJogo() {
    iniciarJogo();
}

// Quando trocar a dificuldade
dificuldade.addEventListener("change", iniciarJogo);

// Iniciar automaticamente
iniciarJogo();