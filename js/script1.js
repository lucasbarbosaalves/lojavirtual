const produtos = [];

function adicionarProduto() {
    const produto = document.getElementById("produto").value;
    const preco = document.getElementById("preco").value;

    if (produto === "" || preco === "") {
        alert("Por favor, preencha os campos Nome do Produto e Preço do Produto.");
        return;
    }

    const novoProduto = { produto, preco };
    produtos.push(novoProduto);

    atualizarTabela();

    limparProduto();
}

function limparProduto() {
    document.getElementById("produto").value = "";
    document.getElementById("preco").value = "";
}

function atualizarTabela() {
    const tbody = document.getElementById("tbody");

    tbody.innerHTML = "";

    produtos.forEach((produto, index) => {
        const tr = document.createElement("tr");

        const id = document.createElement("td");
        id.textContent = index + 1;

        const nome = document.createElement("td");
        nome.textContent = produto.produto;

        const preco = document.createElement("td");
        preco.textContent = produto.preco;

        const acoes = document.createElement("td");
        
        let imgEdit = document.createElement('img');
        imgEdit.src = "./imgs/edit.png";
        imgEdit.textContent = "Alterar";
        imgEdit.onclick = () => alert("Função indisponível no momento.");

        let imgDelete = document.createElement('img');
        imgDelete.src = "./imgs/delete.png";
        imgDelete.textContent = "Excluir";
        imgDelete.onclick = () => {
            produtos.splice(index, 1);
            atualizarTabela();
        };

        acoes.appendChild(imgEdit);
        acoes.appendChild(imgDelete);

        tr.appendChild(id);
        tr.appendChild(nome);
        tr.appendChild(preco);
        tr.appendChild(acoes);

        tbody.appendChild(tr);
    });
}