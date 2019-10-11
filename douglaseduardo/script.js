let caixaTexto = document.getElementById("caixaTexto")
let nóPai = document.querySelector("#cartaMisteriosa")

function escolherAleatorioFundo() {
    let fundoDasFrases = {
        0: "url(imagem/fundo8.png)",
        1: "url(imagem/fundo1.png)",
        2: "url(imagem/fundo2.png)",
        3: "url(imagem/fundo3.png)",
        4: "url(imagem/fundo4.png)",
        5: "url(imagem/fundo5.png)",
        6: "url(imagem/fundo6.png)",
        7: "url(imagem/fundo7.png)"
    }
    let randomico = Math.floor(Math.random() * 8)
    return fundoDasFrases[randomico]
}

function tamanhoFonte() {
    let size = Math.floor(Math.random() * 70) + 20
    let sizeFonte = size + "px"
    return sizeFonte
}

function estiloFonte() {
    let fontestyle = [
        "inherit", "initial",
        "italic", "normal",
        "oblique", "unset"
    ]
    let valor = Math.floor(Math.random() * 6)
    let estiloEscolhido = fontestyle[valor]
    return estiloEscolhido
}

function corFonte() {
    let a = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    let c = Math.floor(Math.random() * 256)
    let lista = [a.toString(), b.toString(), c.toString()]
    return "rgb(" + lista[0] + ", " + lista[1] + ", " + lista[2] + ")"
}

function adicionarElemento(palavra) {
    let cartaMisteriosa = document.getElementById("cartaMisteriosa")
    let spanNovo = document.createElement("span")
    spanNovo.setAttribute("class", "cartas")
    cartaMisteriosa.appendChild(spanNovo)
    spanNovo.insertAdjacentHTML('afterbegin', palavra)
    spanNovo.style.backgroundImage = escolherAleatorioFundo()
    spanNovo.style.fontSize = tamanhoFonte()
    spanNovo.style.color = corFonte()
    spanNovo.style.fontStyle = estiloFonte()
}

function myFunction() {
    apagarCarta(nóPai)
    let listaComAsPalavras = caixaTexto.value.split(" ")
    for (const i of listaComAsPalavras) {
        adicionarElemento(i)
    }
    caixaTexto.value = ""
}

function apagarCarta(pai) {
    let span = document.getElementsByTagName("span")
    let tamanhoSpan = span.length - 1
    for (let i = tamanhoSpan; i >= 0; i--) {
        let elemento = span[i]
        pai.removeChild(elemento)
    }
}