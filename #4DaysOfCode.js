let tentativas = 0;
const numeroSecreto = Math.floor(Math.random() * 11);

while (tentativas < 3) {

    const tentativa = prompt("Chute um número de 0 a 10:");

    const numeroTentativa = parseInt(tentativa);


    if (numeroTentativa === numeroSecreto) {
        alert("Parabéns! Você acertou o número.");
        break;
    } else {
        alert("Tente novamente.");
        tentativas++;
    }
}

if (tentativas === 3) {
    alert(`Você não conseguiu acertar. O número secreto era ${numeroSecreto}.`);
}