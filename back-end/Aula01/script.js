let nome = prompt("Digite o nome do aluno:");

    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);

    let media = (nota1 + nota2 + nota3) / 3;
    document.write(`Aluno: ${nome}  tirou as  notas<br> ${nota1}<br> ${nota2} <br>${nota3}<br> Média:<br> ${media.toFixed(2)}`);