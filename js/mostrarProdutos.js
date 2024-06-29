import { conectaAPI } from "./conectaAPI.js"; 

const areaProdutos = document.querySelector(".produtos-cards");


function constroiCard(imagem, nome, valor,id) {
    const card = document.createElement("div");
    card.className = "card";
    let img = document.createElement("img");
    let div = document.createElement("div");
    div.className = "card-description";
    div.innerHTML = `<p>$ ${valor}</p>`;
    img.alt = "lixo";
    img.className = "lixo-icon";
    img.src = "assets/trash.svg";
    img.addEventListener('click', () => {
        conectaAPI.deletarProduto(id);
    })
    div.appendChild(img);
    card.innerHTML = `<img src="assets/${imagem}">
                    <p class="title-card">${nome}</p>`;
    card.appendChild(div);
    return card;
}

async function listarProdutosNoHTML() {
    const listaAPI = await conectaAPI.pegarProdutos();
    listaAPI.forEach(elemento => areaProdutos.appendChild(constroiCard(elemento.imagem, elemento.nome, elemento.valor,elemento.id)));
}

listarProdutosNoHTML();