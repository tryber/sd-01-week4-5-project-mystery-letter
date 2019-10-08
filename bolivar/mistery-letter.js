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
    fontSize();
}

function randomNumber(limit){
    var num = Math.floor(Math.random() * limit) + 20;
    return num
}

function fontSize(){
    for (i = 0; i < document.getElementById("main-table-body").childElementCount; i++){
        var collum = document.getElementById("collum" + i)
        collum.style.fontSize = randomNumber(70) + "px"
    }
}