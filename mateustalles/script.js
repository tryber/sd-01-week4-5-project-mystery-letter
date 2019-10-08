//Carta inicial - Bonus 1
let letterInput = document.querySelector(".input-letter");
function coringaRi() {
    letterContainer = document.querySelector(".container-result");
    let placeholder = letterInput.placeholder;
    stringArray = [];
    stringArray.push(placeholder.toString().split(" "));
    console.log(stringArray);
    randomSize();
}
coringaRi();

//função gera texto em div a partir do input.


letterInput.addEventListener("change", function() {
    reset();
    stringFormation();
    randomSize();
    //randomColor();
});

//formação de array de palavras
function stringFormation () {
    stringArray = [];
    stringArray.push(letterInput.value.toString().split(" "));
}

//função tamanho de letra aleatório

function randomSize() {
    letterContainer = document.querySelector(".container-result");
    for (let word of stringArray[0]) {
        wordSpan = document.createElement("span");
        let randomSize = ((Math.random()*3)+1);
        wordSpan.style.fontSize=randomSize+"em";
        wordSpan.innerHTML=word+" ";
        wordSpan.className="current-word"
        //Cor aleatoria
        function randomColor() {
            let randomRGB1 = Math.floor((Math.random()*255))+1,
            randomRGB2 = Math.floor((Math.random()*255))+1,
            randomRGB3 = Math.floor((Math.random()*255))+1;
            wordSpan.style.backgroundColor="rgb("+randomRGB1+","+randomRGB2+","+randomRGB3+")";     
        }
        randomColor()
        
        //Aleatório: negrito, italico, etc
        function randomStyle() {
            var stylesObj = {
                0: "underlined",
                1: "overlined",
                2: "italic",
                3: "linethrough",
                4: "smallcaps",
                5: "bold",
                6: "lspacing-small",
                7: "lspacing-big",
                8: "capitalize",
                9: "neon",
                10: "flaming",
                11: "comic",
                12: "vegas",
                13: "deep",
                14: "canvas",
                15: "printout",
                16: "pink",
                17: "rough"
            };
                random = Math.floor(Math.random()*18);
                wordSpan.className+=" "+stylesObj[random];
                letterContainer.appendChild(wordSpan);
        }
            randomStyle();
    }
}

//Bonos 2 -  Menu de classes
function classMenu() {
    let currentWords = document.querySelectorAll(".current-word");   
    let tempDiv = document.querySelector(".temp-div")


    for (each of currentWords) {
        each.addEventListener("click", function() { 
                tempDiv.className="temp-div";
                this.appendChild(tempDiv);
                tempDiv.style="";
                tempDiv.style.left=0+"px";
                tempDiv.style.top=0+"px";
                //tempDiv.style.visibility="visible";
                tempDiv.style.display="inline-block";
            });
        
        }
        //Adiciona funcionalidade aos clicks:
        let styleDropdown = document.querySelector(".dropdown-style");
            styleDropdown.addEventListener("change", function() {
                let divWord = this.parentNode.parentNode;
                divWord.className=this.value;
    })

        //botão fechar
        let btnClose = document.querySelector(".btn-close")
        btnClose.addEventListener("click", function() {
        this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)
        });
}

classMenu();

//função reset
function reset() {
    letterContainer.remove();
    let newLetterContainer = document.createElement("div");
    newLetterContainer.className="container-result";
    let globalContainer=document.querySelector(".container");
    globalContainer.appendChild(newLetterContainer);
}
