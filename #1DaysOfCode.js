let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

const variaveis = [
    { nome: 'numeroUm', valor: numeroUm },
    { nome: 'stringUm', valor: stringUm },
    { nome: 'numeroTrinta', valor: numeroTrinta },
    { nome: 'stringTrinta', valor: stringTrinta },
    { nome: 'numeroDez', valor: numeroDez },
    { nome: 'stringDez', valor: stringDez },
];

for (let i = 0; i < variaveis.length; i++) {
    for (let j = i + 1; j < variaveis.length; j++) {
        const variavelA = variaveis[i];
        const variavelB = variaveis[j];

        const valorIgual = variavelA.valor == variavelB.valor;
        const tipoIgual = typeof variavelA.valor === typeof variavelB.valor;

        if (valorIgual && tipoIgual) {
            console.log(`As variáveis ${variavelA.nome} e ${variavelB.nome} têm o mesmo valor e o mesmo tipo`);
        } else if (valorIgual && !tipoIgual) {
            console.log(`As variáveis ${variavelA.nome} e ${variavelB.nome} têm o mesmo valor, mas tipos diferentes`);
        } else if (!valorIgual && tipoIgual) {
            console.log(`As variáveis ${variavelA.nome} e ${variavelB.nome} têm valores diferentes, mas o mesmo tipo`);
        } else {
            console.log(`As variáveis ${variavelA.nome} e ${variavelB.nome} têm valores e tipos diferentes`);
        }
    }
}