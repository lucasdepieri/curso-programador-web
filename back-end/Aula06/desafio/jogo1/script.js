let numeroSecreto;
let tentativas;
let limiteTentativas = 5;

// Elementos
const mensagem = document.getElementById("mensagem");
const tentativasTexto = document.getElementById("tentativas");
const dificuldade = document.getElementById("dificuldade");
const palpite = document.getElementById("palpite");
const info = document.getElementById("info");
const botaoReiniciar = document.getElementById("reiniciar");

// Inicia o jogo
function iniciarJogo() {

    const maximo = Number(dificuldade.value);

    numeroSecreto = Math.floor(Math.random() * maximo) + 1;

    tentativas = 0;

    tentativasTexto.textContent = tentativas;

    mensagem.textContent = "";

    info.textContent = `Tente adivinhar um número entre 1 e ${maximo}`;

    palpite.disabled = false;

    botaoReiniciar.style.display = "none";

    palpite.value = "";

    console.log("Número secreto:", numeroSecreto);
}

// Verifica palpite
function verificarPalpite() {

    const valor = Number(palpite.value);

    if (palpite.value === "") {
        mensagem.textContent = "Digite um número!";
        return;
    }

    tentativas++;

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