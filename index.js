'use strict'

import{produtos} from "./produtos.js"
import "./main.js"

const criarCard = (produto) => {
    const card = document.createElement('card-mumu')
    card.classList.add('card')
    
    const foto = document.createElement('img')
    foto.classList.add('card__image')
    card.foto = `./img/${produto.image}`

    const titulo = document.createElement('h5')
    titulo.classList.add('card__title')
    card.titulo = produto.nome

    const descricao = document.createElement('p')
    descricao.classList.add('card__description')
    descricao.textContent = produto.description

    const preco = document.createElement('spam')
    preco.classList.add('card__price')
    preco.textContent = `R$ ${produto.price}`

    card.append(foto, titulo, descricao, preco)

    return card
}

const carregarProdutos = () => {
    const container = document.getElementById('container')
    const cards = produtos.map(criarCard)

    container.replaceChildren(...cards)
}

carregarProdutos()
// const valores = [34, 54, 32, 43, 90, 50, 23, 45]

// const limite = valores.length

// let i = 0

// const valoresFrete = []

// const valorFrete = 2

// while (i < limite) {
//     valoresFrete[i] = valores[i] + valorFrete
//     i++
// }

// const limite = valores.length
// const valoresFrete = []
// for (let i = 0; i < limite; i++) {
//     valoresFrete[i] = valores[i] + 2;
    
// }
// const adicionarFrete = (valor) => valor + 2
// const valoresFrete = valores.map(adicionarFrete)

// console.log(valoresFrete);

// const nome = [2, 'SENAI', true, 78]

// console.log(nome[1]);

// const aluno = {nome: 'Muryllo', nota:10 , aprovado: true}

// console.log(aluno.nota);

// const ds2t = [
//     {nome: 'Muryllo', nota:10, aprovado: true, UC: ['PWFE', 'PWBE', 'BCD', 'INDMO']},
//     {nome: 'Muryllo2', nota:4, aprovado: false},
// ]