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