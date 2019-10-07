//função gera texto em div a partir do input.

let input = document.querySelector(".input-letter");
input.addEventListener("change", function() {
    let letterContainer = document.querySelector(".container-result");
    letterContainer.innerText=input.value;
});

//função tamanho de letra aleatório
