var btn = document.getElementById("btn");
btn.addEventListener("click", function clickMouseLocation() {
    return showText();
}) 
function showText() {
    let text1 = document.getElementById('typeText').value;
    let showText = document.getElementById('showText');
    showText.innerHTML = text1;
}
