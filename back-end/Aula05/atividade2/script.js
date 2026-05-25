function mostrarPares() {

    let numero = Number(document.getElementById("numero").value);

    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

    let contador = 0;

    while (contador <= numero) {

        if (contador % 2 == 0) {
            resultado.innerHTML += contador + "<br>";
        }
        

        contador++;
    }
}