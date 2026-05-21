function calcularTarifa() {

    let tipo = document.getElementById("tipoPassageiro").value;

    let mensagem = "";

    switch (tipo) {

        case "estudante":
            mensagem = "Recebe 50% de desconto na tarifa padrão.";
            break;

        case "idoso":
            mensagem = "Viagem gratuita.";
            break;

        case "adulto":
            mensagem = "Tarifa padrão.";
            break;

        case "funcionario":
            mensagem = "Viagem gratuita.";
            break;

        default:
            mensagem = "Tipo de passageiro inválido.";
    }

    document.getElementById("resultado").innerHTML = mensagem;
}