const listaDeCompras = {
    Frutas: [],
    Laticínios: [],
    Congelados: [],
    Doces: [],
    Outros: [],
};

function adicionarItem() {
    const resposta = prompt("Deseja adicionar ou remover um item da lista de compras? (adicionar/remover/não)").toLowerCase();

    if (resposta === "adicionar") {
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
    } else if (resposta === "remover" && checkIfListNotEmpty()) {
        console.log("Itens na lista de compras:");
        listItems();
        const itemParaRemover = prompt("Qual item você deseja remover?").trim();
        const categoriaDoItem = findItemCategory(itemParaRemover);

        if (categoriaDoItem) {
            const index = listaDeCompras[categoriaDoItem].indexOf(itemParaRemover);
            listaDeCompras[categoriaDoItem].splice(index, 1);
            console.log(`${itemParaRemover} foi removido da categoria ${categoriaDoItem}.`);
        } else {
            console.log("Não foi possível encontrar o item dentro da lista.");
        }

        adicionarItem();
    } else {
        console.log("Lista de compras:");
        for (const categoria in listaDeCompras) {
            const itens = listaDeCompras[categoria];
            if (itens.length > 0) {
                console.log(`  ${categoria}: ${itens.join(', ')}`);
            }
        }
    }
}

function checkIfListNotEmpty() {
    for (const categoria in listaDeCompras) {
        if (listaDeCompras[categoria].length > 0) {
            return true;
        }
    }
    console.log("A lista de compras está vazia. Você não pode remover itens.");
    return false;
}

function listItems() {
    for (const categoria in listaDeCompras) {
        const itens = listaDeCompras[categoria];
        if (itens.length > 0) {
            console.log(`  ${categoria}: ${itens.join(', ')}`);
        }
    }
}

function findItemCategory(item) {
    for (const categoria in listaDeCompras) {
        if (listaDeCompras[categoria].includes(item)) {
            return categoria;
        }
    }
    return null;
}

adicionarItem();