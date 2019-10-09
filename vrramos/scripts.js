function clicarGerar() {
    let btn = document.querySelector('#button')
    let resultado = document.querySelector('#resultado')

    btn.addEventListener('click', function(){
        resultado.textContent = " "
        
        pegarInput()
        classesCss()
        inserirClasses()

    })    
}    

function pegarInput() {   
    let inputFrase = document.querySelector('#input-frase').value
    inputSplit = inputFrase.split(" ")
    return inputSplit
}

function classesCss() {
    let bg = ["classe-1", "classe-2", "classe-3",  "classe-4","classe-5", "classe-6"]
    return bg
} 

function inserirClasses() {
    let resultado = document.querySelector('#resultado')

    for(let i = 0; i < inputSplit.length; i++){  
        
        let randomValue = Math.floor(Math.random() * classesCss().length)
        let span = document.createElement('span')         
        resultado.appendChild(span)
        let classeBg = classesCss()[randomValue]
        span.className = classeBg           
        span.textContent = inputSplit[i]
    }        
}

clicarGerar()
