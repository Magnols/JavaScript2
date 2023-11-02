function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return "Erro: Divisão por zero!";
    }
    return a / b;
}

function calculadora() {
    while (true) {
        console.log("Opções disponíveis:");
        console.log("1. Soma");
        console.log("2. Subtração");
        console.log("3. Multiplicação");
        console.log("4. Divisão");
        console.log("5. Sair");

        const opcao = prompt("Escolha uma opção (1/2/3/4/5):");

        if (opcao === "5") {
            console.log("Até a próxima!");
            break;
        }

        if (!["1", "2", "3", "4"].includes(opcao)) {
            console.log("Opção inválida. Por favor, escolha uma opção válida.");
            continue;
        }

        const a = parseFloat(prompt("Digite o primeiro valor:"));
        const b = parseFloat(prompt("Digite o segundo valor:"));

        let resultado;

        if (opcao === "1") {
            resultado = soma(a, b);
        } else if (opcao === "2") {
            resultado = subtracao(a, b);
        } else if (opcao === "3") {
            resultado = multiplicacao(a, b);
        } else if (opcao === "4") {
            resultado = divisao(a, b);
        }

        console.log("Resultado:", resultado);
    }
}


calculadora();