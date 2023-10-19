const variaveis = [
    { nome: 'numeroUm', valor: 1 },
    { nome: 'stringUm', valor: '1' },
    { nome: 'numeroTrinta', valor: 30 },
    { nome: 'stringTrinta', valor: '30' },
    { nome: 'numeroDez', valor: 10 },
    { nome: 'stringDez', valor: '10' },
];

for (let i = 0; i < variaveis.length; i++) {
    for (let j = i + 1; j < variaveis.length; j++) {
        const varA = variaveis[i];
        const varB = variaveis[j];

        const igual = varA.valor == varB.valor;
        const mesmoTipo = typeof varA.valor === typeof varB.valor;

        const mensagem = igual && mesmoTipo ?
            `As variáveis ${varA.nome} e ${varB.nome} têm o mesmo valor e o mesmo tipo` :
            igual ?
            `As variáveis ${varA.nome} e ${varB.nome} têm o mesmo valor, mas tipos diferentes` :
            mesmoTipo ?
            `As variáveis ${varA.nome} e ${varB.nome} têm valores diferentes, mas o mesmo tipo` :
            `As variáveis ${varA.nome} e ${varB.nome} têm valores e tipos diferentes`;

        console.log(mensagem);
    }
}