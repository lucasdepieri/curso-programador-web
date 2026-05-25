function calcular() {

    let valor1 = Number(document.getElementById("valor1").value);
    let valor2 = Number(document.getElementById("valor2").value);
    let operacao = document.getElementById("operacao").value;

    let resultado;

    switch (operacao) {

        case "+":
            resultado = valor1 + valor2;
            break;

        case "-":
            resultado = valor1 - valor2;
            break;

        case "*":
            resultado = valor1 * valor2;
            break;

        case "/":
            if (valor2 === 0) {
                resultado = "Não é possível dividir por zero!";
            } else {
                resultado = valor1 / valor2;
            }
            break;

        default:
            resultado = "Operação inválida!";
    }

    document.getElementById("resultado").innerHTML =
        "Resultado: " + resultado;
}