'use strict'

class card extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.foto = null
        this.titulo = 'Meus Produtos'
        this.descricao = 'descrição produto'
        this.preco = '00,00'
    }

    static get observedAttributes() {
        return [ 'foto', 'titulo', 'descricao', 'preco' ]
    }

    attributeChangedCallback(nameAttr, oldValue, newValue) {
        this[nameAttr] = newValue
    }

    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }

    styles() {
        const css = document.createElement('style')
        css.textContent = `
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .container{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 16px;
            padding: 16px;
        }
        .card{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            gap: 12px;
            border: 1px solid #fff;
            border-radius: 5px;
            box-shadow: 0px 0px 8px #0006;
        }
        .card:hover{
            box-shadow: 0px 0px 8px #00F6;
        }
        .card__image{
            width: 200px;
            height: 200px;
            object-fit: contain;
            background-image: url(${this.foto});
            background-size: cover;
        }
        .card__title{
            font-size: 1.5rem;
        }
        .card__description{
            font-size: 1rem;
        }
        .card__price{
            text-align: center;
            width: 100%;
            font-size: 1.5rem;
            font-weight: 900;
        }
        `
        return css
    }

    component() {
        const card = document.createElement('div')
        card.classList.add('card')

        const foto = document.createElement('img')
        foto.classList.add('card__image')

        const titulo = document.createElement('h5')
        titulo.classList.add('card__title')
        titulo.textContent = this.titulo

        const descricao = document.createElement('p')
        descricao.classList.add('card__description')
        descricao.textContent = this.descricao

        const preco = document.createElement('spam')
        preco.classList.add('card__price')
        preco.textContent = `R$ ${this.preco}`

        card.append(foto, titulo, descricao, preco)

        return card
    }
}

customElements.define('card-mumu', card)