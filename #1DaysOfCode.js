let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

let variaveis = [numeroUm, stringUm, numeroTrinta, stringTrinta, numeroDez, stringDez];
let nomesVariaveis = ["numeroUm", "stringUm", "numeroTrinta", "stringTrinta", "numeroDez", "stringDez"];

for (let i = 0; i < variaveis.length; i++) {
    for (let j = i + 1; j < variaveis.length; j++) {
        if (variaveis[i] === variaveis[j]) {
            console.log(`As variáveis ${nomesVariaveis[i]} e ${nomesVariaveis[j]} têm o mesmo valor e mesmo tipo.`);
        } else if (variaveis[i] == variaveis[j]) {
            console.log(`As variáveis ${nomesVariaveis[i]} e ${nomesVariaveis[j]} têm o mesmo valor, mas tipos diferentes.`);
        } else {
            console.log(`As variáveis ${nomesVariaveis[i]} e ${nomesVariaveis[j]} têm valores e tipos diferentes.`);
        }
    }
}