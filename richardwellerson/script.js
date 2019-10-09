function capturarTexto() {
    botao = document.querySelector(".botao")
    botao.addEventListener('click', function(event){
    event.preventDefault()
    let valorEscrito = document.querySelector(".jscaptura").value
    let arraySepPalavras = valorEscrito.split(" ")
    }
)}

    capturarTexto()

for(i of arraySepPalavras){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let backgroundColorArray = "rgb(" + r +", " + g + ", " + b +")";
    let fontColor = "rgb(" + g +", " + b + ", " + r +")";
    let wordSize = Math.floor((Math.random()+20) * 3)+"px";
    arraySepPalavras[i].style.backgroundColor = backgroundColorArray;
    arraySepPalavras[i].style.color = fontColor;
    arraySepPalavras[i].style.fontSize = wordSize;
}



