async function pegarProdutos() {
    const conexao = await fetch('http://localhost:3000/produtos');
    const produtosConvertidos = await conexao.json();
    return produtosConvertidos;
}

async function criarProduto(nome,valor,imagem) {
    const conexao = await fetch('http://localhost:3000/produtos', {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            "nome":nome,
            "valor":valor,
            "imagem":imagem
        })
    });
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function deletarProduto(id) {
    const conexao = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json" }
    });

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

export const conectaAPI = {
    pegarProdutos,
    criarProduto,
    deletarProduto
}