//função gera texto em div a partir do input.

let input = document.querySelector(".input-letter");
input.addEventListener("change", function() {
    letterContainer = document.querySelector(".container-result");
    stringFormation();
    randomSize();
    
});

//formação de array de palavras
function stringFormation () {
    stringArray = [];
    stringArray.push(input.value.toString().split(" "));
}

//função tamanho de letra aleatório

function randomSize() {
    for (let word of stringArray[0]) {
        let wordSpan = document.createElement("span");
        let randomSize = ((Math.random()*3)+1);
        wordSpan.style.fontSize=randomSize+"em";
        wordSpan.innerHTML=word+" ";
        console.log(wordSpan)
        letterContainer.appendChild(wordSpan);
    }
}