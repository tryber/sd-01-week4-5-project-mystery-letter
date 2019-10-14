window.onload = generateLetter;

// Cria arrays para cada 'estilo'
var backgroundImg = ['background1.png', 'background2.png', 'background3.png', 'background4.png', ''];
var fontFamily = ['sans-serif', 'serif', 'monospace', 'cursive', 'fantasy'];
var fontWeight = ['normal', 'bold', 'bolder'];
var fontStyle = ['normal', 'italic', 'oblique', 'inherit', 'unset', 'initial'];
var fontVariant = ['normal', 'small-caps'];
var textDecoration = ['underline', 'line-through', 'none'];

function generateLetter() {
    let mysteryLetter = document.getElementById("mystery-letter");
    let inputText = document.getElementById('user-input').value;
    let splitedText = inputText.split(" ");
    let maxFontSize = 70;
    let minFontSize = 30;

    clearLetter()

    if (inputText == "") {
        document.getElementsByClassName("word-counter")[0].style.display = "none";
        alert("Por favor, digite sua carta!");
    } else {
        for (let word of splitedText) {
            let letterWord = document.createElement('span');
            letterWord.className = "mystery-letter";
            mysteryLetter.appendChild(letterWord);

            letterWord.innerHTML = word;

            letterWord.style.backgroundColor = generateRandomColor();
            letterWord.style.color = generateRandomColor();
            letterWord.style.fontSize = Math.floor(Math.random() * (maxFontSize - minFontSize) + minFontSize) + 'px';
            letterWord.style.backgroundImage = "url('img/" + randomize(backgroundImg) + "')";
            letterWord.style.fontFamily = randomize(fontFamily);
            letterWord.style.fontWeight = randomize(fontWeight);
            letterWord.style.fontStyle = randomize(fontStyle);
            letterWord.style.fontVariant = randomize(fontVariant);
            letterWord.style.textDecoration = randomize(textDecoration);
        }
        wordCounter(splitedText)
    }
}

function generateRandomColor() {
    return randomColor = '#' + (0x1000000 + Math.random() * 0xFFFFFF).toString(16).substr(1, 6);
}

function randomize(array) {
    return randomFeature = array[Math.floor(Math.random() * array.length)];
}

function clearLetter() {
    let mysteryLetter = document.getElementById("mystery-letter");
    let numberOfLetters = document.getElementsByClassName("mystery-letter").length;

    for (let i = 0; i < numberOfLetters; i++) {
        let firstChild = mysteryLetter.firstElementChild;
        mysteryLetter.removeChild(firstChild);
    }
}

function wordCounter(splitedText) {
    document.getElementsByClassName("word-counter-number")[0].innerHTML = splitedText.length;
}
