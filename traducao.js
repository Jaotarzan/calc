const portuga = document.createElement("script");
portuga.src = "./idiomas/portugeus.js";
document.head.appendChild(portuga);

const espanhol = document.createElement("script");
espanhol.src = "./idiomas/epanol.js";
document.head.appendChild(espanhol);

const francais = document.createElement("script");
francais.src = "./idiomas/fracais.js";
document.head.appendChild(francais);

const english = document.createElement("script");
english.src = "./idiomas/english.js";
document.head.appendChild(english);

let selectIdioma = document.querySelector('#idioma');
selectIdioma.addEventListener("change", function () {
    translate(this.value);
})

function translate(idioma) {
    const traducao = (idioma == "br") ? portugues() : (idioma == "es") ? espanol() : (idioma == "fr") ? frances() : (idioma == "en") ? englesh() : null;
    setLanguage(traducao);
}

function setLanguage(traducao) {
    btsoma = document.getElementById('btsoma');
    btsubtracao = document.getElementById('btsubtracao');
    btdivisao = document.getElementById('btdivisao');
    btmultplicacao = document.getElementById('btmultplicacao');
    titulo = document.getElementById('titulo');
    texto = document.getElementById('texto');
    
    btsoma.value = traducao.soma;
    btsubtracao.value = traducao.subtracao;
    btdivisao.value = traducao.divisao;
    btmultplicacao.value = traducao.multplicacao;
    titulo.textContent = traducao.titulo;
    texto.textContent = traducao.texto;
}