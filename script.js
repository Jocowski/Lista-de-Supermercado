let items = []

document.querySelector(".lista-cadastro__botao-cadastrar").addEventListener("click", function() {
    let nomeProduto = document.querySelector("input[name=nome_produto]");
    let valorProduto = document.querySelector("input[name=valor_produto]");

    if (nomeProduto.value == "" || valorProduto.value == "") {
        alert("Coloque o nome e valor do produto corretamente.");
    } else {
        items.push({
            nome: nomeProduto.value,
            valor: valorProduto.value,
        });
    }

    let listaProdutos = document.querySelector(".lista-produtos");
    listaProdutos.innerHTML = "";

    let valorTotalTexto = document.querySelector(".valor-total__texto");
    let valorTotal = 0;

    items.map(function(item) {
        valorTotal += parseFloat(item.valor);
        listaProdutos.innerHTML += `
            <div class="lista-produtos__produto">
                <p class="lista-produtos__nome">${item.nome}</p>
                <p class="lista-produtos__valor"><span>R$${item.valor}</span></p>
            </div>
        `;
    });

    todosProdutos = document.querySelectorAll(".lista-produtos__produto");
    todosProdutos.forEach(function(produto, index) {
        produto.addEventListener("click", function() {
            valorTotal -= parseFloat(items[index].valor);
            valorTotal = valorTotal.toFixed(2);
            valorTotalTexto.innerHTML = `Total: R$${valorTotal}`;

            produto.parentNode.removeChild(produto);
            items.splice(index, 1);
        });
    });

    valorTotal = valorTotal.toFixed(2);

    nomeProduto.value = "";
    valorProduto.value = "";

    valorTotalTexto.innerHTML = `Total: R$${valorTotal}`;
});


document.querySelector(".botao-limpar").addEventListener("click", function() {
    items = [];

    document.querySelector(".lista-produtos").innerHTML = "";
    document.querySelector(".valor-total__texto").innerHTML = "Total: R$0.00"
});