const listaDeCompras = {
    Frutas: [],
    Laticínios: [],
    Congelados: [],
    Doces: [],
    Outros: [],
};

function adicionarItem() {
    const resposta = prompt("Deseja adicionar um item à lista de compras? (sim/não)").toLowerCase();
    if (resposta === "sim") {
        const nomeItem = prompt("Qual comida você deseja inserir?");
        const categoria = prompt("Em qual categoria essa comida se encaixa (Frutas, Laticínios, Congelados, Doces, Outros)?").trim();

        if (listaDeCompras.hasOwnProperty(categoria)) {
            listaDeCompras[categoria].push(nomeItem);
            console.log(`${nomeItem} foi adicionado à categoria ${categoria}.`);
        } else {
            console.log("Categoria inválida. O item foi colocado na categoria 'Outros'.");
            listaDeCompras.Outros.push(nomeItem);
        }

        adicionarItem();
    }
}

adicionarItem();

console.log("Lista de compras:");
for (const categoria in listaDeCompras) {
    const itens = listaDeCompras[categoria];
    if (itens.length > 0) {
        console.log(`  ${categoria}: ${itens.join(', ')}`);
    }
}