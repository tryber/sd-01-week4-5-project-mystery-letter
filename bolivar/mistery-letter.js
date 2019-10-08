function separeStrings(){
    var inputtext = document.getElementById("main-input").value
    var arraytext = inputtext.split(" ")
    return arraytext
}

function removeBlanks(){
    var array = separeStrings()
    var newarray = new Array()
    var ind = -1;
    for (i = 0; i < array.length; i++){
        if (array[i] !== ""){
            ind += 1
            newarray[ind] = array[i]
        }
    }
    countWords(newarray)
    return newarray
}

function tableSize(){
    clean()
    var array = removeBlanks();
    var select = document.getElementById("main-table-body");
    for (i = 0; i < array.length; i++){
        var collum = document.createElement("th");
        collum.className = "collum";
        collum.id = "collum" + i
        collum.innerHTML = array[i]
        select.appendChild(collum);
    }
    changeEverything();
    click();
}

function randomNumber(maxvalue,minvalue){
    var num = Math.floor(Math.random() * maxvalue) + minvalue;
    return num
}


function changeEverything(){
    var fontStyle = ["normal" , "italic" , "oblique" , "initial" , "inherit"]
    var fontsizefamilyname = ["Georgia" , "Palatino Linotype" , "Book Antiqua" , "Times New Roman" , "Arial" , "Helvetica" , "Arial Black" , "Impact" , "Lucida Sans Unicode" , "Tahoma" , "Verdana" , "Courier New" , "Lucida Console" , "initial"]
    var fontsizegenericfamily = ["serif" , "sans-serif" , "cursive" , "fantasy", "monospace"]
    var border = ["dotted" , "dashed" , "solid" , "double" , "none" ]
    for (i = 0; i < document.getElementById("main-table-body").childElementCount; i++){
        var collum = document.getElementById("collum" + i)
        collum.style.fontSize = randomNumber(70,20) + "px"
        collum.style.fontStyle = fontStyle[randomNumber(fontStyle.length,0)]
        collum.style.fontFamily = fontsizefamilyname[randomNumber(fontsizefamilyname.length,0)] + "," + fontsizegenericfamily[randomNumber(fontsizegenericfamily.length,0)]
        if (randomNumber(10,1) % 2 == 0){
            collum.style.backgroundColor = 'rgb(' + randomNumber(255,1) + ',' + randomNumber(255,1) + ',' + randomNumber(255,1) + ')'
        }
        else {
            collum.style.backgroundImage = "url( " + setImage() + ")"
        }
        collum.style.color = 'rgb(' + randomNumber(255,1) + ',' + randomNumber(255,1) + ',' + randomNumber(255,1) + ')'
        collum.style.border = (randomNumber(7,0) + "px") + " " + border[randomNumber(border.length,0)] + " " + 'rgb(' + randomNumber(255,1) + ',' + randomNumber(255,1) + ',' + randomNumber(255,1) + ')'
    }
}

function setImage(){
    var num = randomNumber(1000,1)
    var url = ("https://source.unsplash.com/random/1×1/?random" + num)
    return url
}

function countWords(array){
    var characters = new String()
    for (i = 0; i < array.length; i++){
        characters += array[i]
    }
    if (characters.length == 1){
        document.getElementById("count-words").innerText = characters.length + " word"
    }
    else{
        document.getElementById("count-words").innerText = characters.length + " words"
    }
}


function click(){
    for (i = 0; i < document.getElementById("main-table-body").childElementCount; i++){
        var collum = document.getElementById("collum" + i)
        var fontStyle = ["normal" , "italic" , "oblique" , "initial" , "inherit"]
        var fontsizefamilyname = ["Georgia" , "Palatino Linotype" , "Book Antiqua" , "Times New Roman" , "Arial" , "Helvetica" , "Arial Black" , "Impact" , "Lucida Sans Unicode" , "Tahoma" , "Verdana" , "Courier New" , "Lucida Console" , "initial"]
        var fontsizegenericfamily = ["serif" , "sans-serif" , "cursive" , "fantasy", "monospace"]
        var border = ["dotted" , "dashed" , "solid" , "double" , "none" ]
        collum.addEventListener("click", function(){
            this.style.fontSize = randomNumber(70,20) + "px"
            this.style.fontStyle = fontStyle[randomNumber(fontStyle.length,0)]
            this.style.fontFamily = fontsizefamilyname[randomNumber(fontsizefamilyname.length,0)] + "," + fontsizegenericfamily[randomNumber(fontsizegenericfamily.length,0)]
            if (randomNumber(10,1) % 2 == 0){
                this.style.backgroundColor = 'rgb(' + randomNumber(255,1) + ',' + randomNumber(255,1) + ',' + randomNumber(255,1) + ')'
            }
            else {
                this.style.backgroundImage = "url( " + setImage() + ")"
            }
                this.style.color = 'rgb(' + randomNumber(255,1) + ',' + randomNumber(255,1) + ',' + randomNumber(255,1) + ')'
                this.style.border = (randomNumber(7,0) + "px") + " " + border[randomNumber(border.length,0)] + " " + 'rgb(' + randomNumber(255,1) + ',' + randomNumber(255,1) + ',' + randomNumber(255,1) + ')'
        })
    }
}

function initialText(){
    document.getElementById("main-input").value = "Boys only want love if it's torture"
}

function bodyCollor(){
    document.body.style.backgroundColor = 'rgb(' + randomNumber(255,1) + ',' + randomNumber(255,1) + ',' + randomNumber(255,1) + ')'
}

function clean(){
    var limit = document.getElementById("main-table-body").childElementCount
    for (i = 0; i < limit; i++){
    document.getElementById("main-table-body").removeChild(document.getElementById("collum" + i))
    }
}

window.onload = function () {
    initialText()
    bodyCollor()
} 