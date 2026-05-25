function classificarFilme() {

    let classificacao = document.getElementById("classificacao").value;
    let resultado = document.getElementById("resultado");
    let divResultado = document.querySelector(".divresultado");

    switch (classificacao) {

        case "Livre":
            resultado.innerHTML = "Apropriado para todos os públicos.";
            divResultado.style.backgroundColor = "rgb(42, 193, 39)";
            break;

        case "Violência":
            resultado.innerHTML = "Recomendado para maiores de 12 anos.";
            divResultado.style.backgroundColor = "rgb(230, 241, 30)";
            break;

        case "Adulto":
            resultado.innerHTML = "Recomendado para maiores de 18 anos.";
            divResultado.style.backgroundColor = "rgb(255, 0, 0)";
            break;

        default:
            resultado.innerHTML = "Classificação inválida.";
    }
}