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
    return newarray
}

function tableSize(){
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
}

function randomNumber(maxvalue,minvalue){
    var num = Math.floor(Math.random() * maxvalue) + minvalue;
    return num
}

function changeEverything(){
    var fontStyle = ["normal" , "italic" , "oblique" , "initial" , "inherit"]
    var fontsizefamilyname = ["Georgia" , "Palatino Linotype" , "Book Antiqua" , "Times New Roman" , "Arial" , "Helvetica" , "Arial Black" , "Impact" , "Lucida Sans Unicode" , "Tahoma" , "Verdana" , "Courier New" , "Lucida Console" , "initial"]
    var fontsizegenericfamily = ["serif" , "sans-serif" , "cursive" , "fantasy", "monospace"]
    for (i = 0; i < document.getElementById("main-table-body").childElementCount; i++){
        var collum = document.getElementById("collum" + i)
        collum.style.fontSize = randomNumber(70,20) + "px"
        collum.style.fontStyle = fontStyle[randomNumber(fontStyle.length,0)]
        collum.style.fontFamily = fontsizefamilyname[randomNumber(fontsizefamilyname.length,0)] + "," + fontsizegenericfamily[randomNumber(fontsizegenericfamily.length,0)]
    }
}
