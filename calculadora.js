let valor1 = document.querySelector('#valor1');
let valor2 = document.querySelector('#valor2');
let resul = document.querySelector('#resul');

let btsoma = document.querySelector('#btsoma')
btsoma.addEventListener("click", function() {
    soma(Number(valor1.value), Number(valor2.value))
})

function soma(a, b) {
    resul.textContent = (a + b)
}

let btsubtracao = document.querySelector('#btsubtracao')
btsubtracao.addEventListener("click", function() {
    subtracao(Number(valor1.value), Number(valor2.value))
})

function subtracao(a, b) {
    resul.textContent = (a - b)
}

let btdivisao = document.querySelector('#btdivisao')
btdivisao.addEventListener("click", function() {
    divisao(Number(valor1.value), Number(valor2.value))
})

function divisao(a, b) {
    resul.textContent = (a / b)
}

let btmultplicacao = document.querySelector('#btmultplicacao')
btmultplicacao.addEventListener("click", function() {
    multiplica(Number(valor1.value), Number(valor2.value))
})

function multiplica(a, b) {
    resul.textContent = (a * b)
}

let selectIdioma = document.querySelector('#idioma');
selectIdioma.addEventListener("change", function() {
    if (this.value == 'br') {
        btsoma.value = "somar";
        btsubtracao.value = 'subtração'
        btdivisao.value = 'divisão'
        btmultplicacao.value = 'multiplição'
    }
    else if (this.value == 'es') {
        btsoma.value = "sumar"
        btsubtracao.value = 'subtracion'
        btdivisao.value = 'division'
        btmultplicacao.value = 'multiplicacion'
    }
    else if (this.value == 'en') {
        btsoma.value = "sum"
        btsubtracao.value = 'subtration'
        btdivisao.value = 'division'
        btmultplicacao.value = 'multiplication'
    }
    else if (this.value == 'fr') {
        btsoma.value = "somar francesa"
        btsubtracao.value = 'subtração francesa '
        btdivisao.value = 'divisãon francesa'
        btmultplicacao.value = 'multiplicação francesa'
    }
})