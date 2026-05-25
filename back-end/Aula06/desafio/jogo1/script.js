let maxNumero = 100;
let numeroSecreto = gerarNumero();
let tentativasRestantes = 5;

function gerarNumero() {
   
    return Math.floor(Math.random() * maxNumero) + 1;
}

function verificarPalpite() {
    let palpite = parseInt(document.getElementById("palpite").value);
    let mensagem = document.getElementById("mensagem");
    let tentativas = document.getElementById("tentativas");

    if (isNaN(palpite)) {
        mensagem.innerHTML = "Digite um número válido!";
        return;
    }

    if (tentativasRestantes <= 0) {
        mensagem.innerHTML = `Fim de jogo! O número era ${numeroSecreto}.`;
        return;
    }

    tentativasRestantes--;
    if (tentativasRestantes ===4) {
        tentativas.style.backgroundColor = "#4deb14";}
        else if (tentativasRestantes === 3) {
            tentativas.style.backgroundColor = "#f5e50a";
        } else if (tentativasRestantes === 1) {
            tentativas.style.backgroundColor = "#e33821";
        }

    if (palpite > numeroSecreto) {
        mensagem.innerHTML = "📈 Muito alto!";
    } 
    else if (palpite < numeroSecreto) {
        mensagem.innerHTML = "📉 Muito baixo!";
    } 
    else {
        mensagem.innerHTML = "🎉 Parabéns! Você acertou!";
        tentativas.innerHTML = `Tentativas restantes: ${tentativasRestantes}`;
        return;
    }

    tentativas.innerHTML = `Tentativas restantes: ${tentativasRestantes}`;

    if (tentativasRestantes === 0) {
        mensagem.innerHTML = `❌ Fim de jogo! O número era ${numeroSecreto}.`;
    }

    document.getElementById("palpite").value = "";
}

function reiniciarJogo() {
    tentativasRestantes = 5;
    numeroSecreto = gerarNumero();

    document.getElementById("mensagem").innerHTML = "";
    document.getElementById("tentativas").innerHTML = "Tentativas restantes: 5";
    document.getElementById("palpite").value = "";
}