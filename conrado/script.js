var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    createAllElements(showText());  
}) 
function createAllElements(frase){
    for (let i = 0; i < frase.length; i++){
        console.log("oi");
        createDivWord(frase[i]);
    }
}
function showText() {
    text1 = document.getElementById('typeText').value;
    let showText = document.getElementById('showText');
    showText.innerHTML = text1;
    put_attribute_imgbackground_on_element(showText);
    return textSplit(text1);
    
}
function textSplit(text1){
    text1 = document.getElementById('typeText').value;
    textSplit1 = text1.split(" ");
    return textSplit1;
}
function put_attribute_imgbackground_on_element(element){
    element.style.backgroundImage="url('image/"+randomNumber(4)+".png')";
}
function createElement(){
    let createDiv = document.createElement('div');
    return createDiv;
}
function createTextDiv(element, content){
    element.innerHTML = content;

}
function createDivWord(texto){
    let divt =createElement();
    put_attribute_imgbackground_on_element(divt);
    createTextDiv(divt, texto);
    console.log(divt);
}

// function randomImage(){
//     for (i = 0; i < 4; i++){
//         bg = showText.style.backgroundImage = "url(image/"+i+".png)";
//         console.log(bg);
//     }
// }

function randomNumber(intervalo){
    let num;
    num=Math.floor(Math.random()*intervalo)
    return num;
}
