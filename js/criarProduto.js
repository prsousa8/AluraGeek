import { conectaAPI } from "./conectaAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function criarProduto(evento) {

    const nome = document.querySelector("[data-nome]").value;
    const valor = document.querySelector("[data-valor]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    await conectaAPI.criarProduto(nome, valor, imagem);
}

formulario.addEventListener('submit', () => criarProduto());