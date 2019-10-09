var btn = document.getElementById("btn");
btn.addEventListener("click", function clickMouseLocation() {
    return showText();
}) 
function showText() {
    text1 = document.getElementById('typeText').value;
    let showText = document.getElementById('showText');
    showText.innerHTML = text1;
    return textSplit(text1);
    
}
function textSplit(text1){
    text1 = document.getElementById('typeText').value;
    textSplit1 = text1.split(" ");
    console.log(textSplit1[0]);
}