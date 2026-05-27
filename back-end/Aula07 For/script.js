function gerarTabuada() {
    let numero = Number(document.getElementById("numero").value);
    let resultado = document.getElementById("resultado");
  

    resultado.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        resultado.innerHTML += `${numero} x ${i} = ${numero * i}<br>`;
    }
}

function somarMultiplos() {
    let multiplosDe = Number(document.getElementById("multiplosDe").value);
    let intervalo = Number(document.getElementById("intervalo").value);
    let soma = 0;
    let resultado = document.getElementById("multiplosResultado");

    resultado.innerHTML = "";

    for (let i = 1; i <= intervalo; i++) {

        if (i % multiplosDe === 0) {
          resultado.innerHTML += `${i}; `;
            soma += i;
        }

    }

    document.getElementById("somaResultado").innerHTML =
        `A soma dos múltiplos de ${multiplosDe} entre 1 e ${intervalo} é: <strong>${soma}</strong>`;
}

function mostrarPares() {

    let inicio = Number(document.getElementById("valorInicial").value);
    let fim = Number(document.getElementById("valorFinal").value);

    let resultado = document.getElementById("paresResultado");
    let somanumerosapares = 0;

    resultado.innerHTML = "";

    for (let i = inicio; i <= fim; i++) {

        if (i % 2 === 0) {
            resultado.innerHTML += `${i}; `;
            somanumerosapares += i;
        }

    }
    resultado.innerHTML += `<br>Soma dos números pares entre ${inicio} e ${fim} é: ${somanumerosapares}`;  
}

function mostrarPrimos() {

    let inicio = Number(document.getElementById("valorInicialPrimo").value);
    let fim = Number(document.getElementById("valorFinalPrimo").value);

    let resultado = document.getElementById("primosResultado");

    resultado.innerHTML = "";

    for (let numero = inicio; numero <= fim; numero++) {

        let primo = true;

        if (numero < 2) {
            primo = false;
        }

        for (let i = 2; i < numero; i++) {

            if (numero % i === 0) {
                primo = false;
            }

        }

        if (primo) {
            resultado.innerHTML += `${numero}; `;
        }

    }
}







