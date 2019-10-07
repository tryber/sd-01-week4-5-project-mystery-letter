//função gera texto em div a partir do input.

let input = document.querySelector(".input-letter");
input.addEventListener("change", function() {
    letterContainer = document.querySelector(".container-result");
    letterContainer.innerHTML=input.value;
    stringFormation();
    console.log(stringArray);
});

//formação de array de palavras
function stringFormation () {
    stringArray = [];
    stringArray.push(input.value.toString().split(" "));
}

//função tamanho de letra aleatório

function randomSize() {
    let randomSize = (Math.random()*3)
    letterContainer.style.fontSize=randomSize+"em";
}