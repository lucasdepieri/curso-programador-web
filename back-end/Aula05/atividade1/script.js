function calcularTabuada() {

    let numero = Number(document.getElementById("numero").value);

    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

    let contador = 1;

    while (contador <= 10) {

        resultado.innerHTML +=
            numero + " x " + contador + " = " + (numero * contador) ;
            if ((contador*numero)% 2 == 0) {
             
            resultado.innerHTML += "  É par 👍 🔵!<br>";
            resultado.style.color = "blue";
            
        } else {
            
            resultado.innerHTML += "  É impar 👎 🔴 !<br>";
            resultado.style.color = "red";
            
           
        }

        contador++;

    }
}