function separeStrings(){
    var inputtext = document.getElementById("main-input").value
    var arraytext = inputtext.split(" ")
    console.log(arraytext)
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
}

function randomNumber(limit){
    var num = Math.floor(Math.random() * limit);
    return num
}
