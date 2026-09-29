let carrinho = [];


// ADICIONAR PRODUTO
function adicionarCarrinho(nome, preco) {

    const produto = {
        nome: nome,
        preco: preco
    };

    carrinho.push(produto);

    atualizarCarrinho();

    alert(nome + " foi adicionado ao carrinho!");
}


// ATUALIZAR CARRINHO
function atualizarCarrinho() {

    const quantidade =
        document.getElementById("quantidade-carrinho");

    quantidade.textContent = carrinho.length;


    const itens =
        document.getElementById("itens-carrinho");

    const total =
        document.getElementById("total-carrinho");


    if (carrinho.length === 0) {

        itens.innerHTML =
            "<p>Seu carrinho está vazio.</p>";

        total.textContent = "R$ 0,00";

        return;
    }


    itens.innerHTML = "";

    let valorTotal = 0;


    carrinho.forEach(function(produto, indice) {

        valorTotal += produto.preco;


        const item =
            document.createElement("div");

        item.className = "item-carrinho";


        item.innerHTML = `
            <span>
                ${produto.nome}
                <br>
                R$ ${produto.preco.toLocaleString(
                    "pt-BR",
                    {
                        minimumFractionDigits: 2
                    }
                )}
            </span>

            <button onclick="removerProduto(${indice})">
                Remover
            </button>
        `;


        itens.appendChild(item);

    });


    total.textContent =
        "R$ " +
        valorTotal.toLocaleString(
            "pt-BR",
            {
                minimumFractionDigits: 2
            }
        );
}


// REMOVER PRODUTO
function removerProduto(indice) {

    carrinho.splice(indice, 1);

    atualizarCarrinho();
}


// ABRIR CARRINHO
function abrirCarrinho() {

    document.getElementById(
        "modal-carrinho"
    ).style.display = "flex";

}


// FECHAR CARRINHO
function fecharCarrinho() {

    document.getElementById(
        "modal-carrinho"
    ).style.display = "none";

}


// FINALIZAR COMPRA
function finalizarCompra() {

    if (carrinho.length === 0) {

        alert("Seu carrinho está vazio.");

        return;
    }


    alert(
        "Compra finalizada com sucesso!"
    );


    carrinho = [];

    atualizarCarrinho();

    fecharCarrinho();
}


// BUSCA
function buscarProdutos() {

    const texto =
        document
            .getElementById("campo-busca")
            .value
            .toLowerCase();


    const produtos =
        document.querySelectorAll(".card");


    produtos.forEach(function(produto) {

        const nome =
            produto
                .dataset
                .nome
                .toLowerCase();


        if (nome.includes(texto)) {

            produto.style.display = "block";

        } else {

            produto.style.display = "none";

        }

    });

}


// FILTRO POR CATEGORIA
function filtrarCategoria(categoria) {

    const produtos =
        document.querySelectorAll(".card");


    produtos.forEach(function(produto) {

        const categoriaProduto =
            produto.dataset.categoria;


        if (
            categoria === "todos" ||
            categoriaProduto === categoria
        ) {

            produto.style.display = "block";

        } else {

            produto.style.display = "none";

        }

    });

}