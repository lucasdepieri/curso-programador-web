// 1. Verificador de Idade
function verificarIdade() {

    let idade = parseInt(prompt("Digite sua idade:"));

    if (idade >= 18) {
        document.getElementById("resultado").innerHTML =
            "Você pode tirar a carteira de motorista.";
    } else {
        document.getElementById("resultado").innerHTML =
            "Você ainda não pode tirar a carteira de motorista.";
            function  exibirGif() {
              let img = document.getElementById("imgResultado");
              img.src = "https://media.tenor.com/lRavW6PI0XUAAAAM/xd.gif";
            }
            exibirGif();
    }
}


// 2. Número Par ou Ímpar
function verificarParImpar() {

    let numero = parseInt(prompt("Digite um número inteiro:"));

    if (numero % 2 == 0) {
        document.getElementById("resultado").innerHTML =
            `O número ${numero} é par.`;
    } else {
        document.getElementById("resultado").innerHTML =
            `O número ${numero} é ímpar.`;
    }
}


// 3. Calculadora de Desconto
function calcularDesconto() {

    let valor = parseFloat(prompt("Digite o valor da compra:"));

    let desconto = 0;

    if (valor > 500) {
        desconto = 0.20;
    }
    else if (valor > 300) {
        desconto = 0.15;
    }
    else if (valor > 100) {
        desconto = 0.10;
    }

    let valorFinal = valor - (valor * desconto);

    document.getElementById("resultado").innerHTML =
        "Valor final da compra: R$ " + valorFinal.toFixed(2);
}


// 4. Estado da Água
function estadoAgua() {

    let temperatura = parseFloat(
        prompt("Digite a temperatura da água em °C:")
    );

    if (temperatura < 0) {
        document.getElementById("resultado").innerHTML =
            "Estado da água: sólido";
    }
    else if (temperatura < 100) {
        document.getElementById("resultado").innerHTML =
            "Estado da água: líquido";
    }
    else {
        document.getElementById("resultado").innerHTML =
            "Estado da água: gasoso";
    }
}