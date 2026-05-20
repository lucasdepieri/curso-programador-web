function classificarFilme() {

    let classificacao = document.getElementById("classificacao").value;
    let resultado = document.getElementById("resultado");

    switch (classificacao) {

        case "Livre":
            resultado.innerHTML = "Apropriado para todos os públicos.";
            break;

        case "Violência":
            resultado.innerHTML = "Recomendado para maiores de 12 anos.";
            break;

        case "Adulto":
            resultado.innerHTML = "Recomendado para maiores de 18 anos.";
            break;

        default:
            resultado.innerHTML = "Classificação inválida.";
    }
}