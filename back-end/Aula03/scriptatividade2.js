let formulario = document.getElementById("formulario");
let mensagem = document.getElementById("mensagem");
let imagem = document.getElementById("imagem");


formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let anoNascimento = Number(document.getElementById("anoNascimento").value);

    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - anoNascimento;
    let categoria = "";

    if (idade < 12) {
        categoria = "Criança";
        imagem.src = "https://media.tenor.com/GIDtqgMXFJEAAAAM/maggie-simpson.gif";
    } 
    else if (idade < 18) {
        categoria = "Adolescente";
        imagem.src = "https://media0.giphy.com/media/v1.Y2lkPTZjMDliOTUyemI5Y292OXg0eTI2cTVkaWpvNDZha3ozMHh3cmFwNXM0OWV0ZGlpZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ZJh42VKmeQ2yY/source.gif";
    } 
    else if (idade < 60) {
        categoria = "Adulto";
        imagem.src = "https://i.pinimg.com/originals/a6/20/be/a620be88694cafb7e2cc0d8ba1418852.gif";
    } 
    else {
        categoria = "Idoso";
        imagem.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExamhkc240djBwNmxzdmZ6ODFveWZjZ2c4bmhqNHFiaTNiNTBqMDgxeiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3orifbkvcmGkpOrEly/200.webp";
    }

    mensagem.innerHTML = `${nome}, você tem ${idade} anos e é classificado como <strong>${categoria}</strong>.`;

    imagem.src = imagemUrl;
  
});

      