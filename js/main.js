const robotron = document.querySelector('#robotron');
const braco = document.querySelector('#braco')
const controle = document.querySelectorAll('[data-controle]')
const estatistica = document.querySelectorAll('[data-estatistica]')
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

robotron.addEventListener('click', function () { //ou () =>
    console.log('Cliquei no robô')
})

function sayHi(name) {
    console.log('Oi' + ' ' + name)
    console.log('Bem-vindo ao Robotron 2000 ')
}

sayHi('Sarah')

controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulandoDados(evento.target.dataset.controle, evento.target.parentNode)// dataset está acessando todos os 'data-controle' e o  parentNode está acessando o pai do elemento
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})


function manipulandoDados(operacao, controle) { //controle é o pai do elemento que foi clicado
    const peca = controle.querySelector('[data-contador]')

    if (operacao === '-') {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca) {
    console.log(pecas[peca])

    estatistica.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}