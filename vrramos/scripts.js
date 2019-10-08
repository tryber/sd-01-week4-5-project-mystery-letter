function pegarInput() {
    let btn = document.querySelector('#button')    
    let resultado = document.querySelector('#resultado')
    
    btn.addEventListener('click', function(event){
        event.preventDefault()
        let inputFrase = document.querySelector('#input-frase').value
        inputSplit = inputFrase.split(" ")
        console.log(inputSplit)
        
        let bg = [
            "classe-1", 
            "classe-2", 
            "classe-3", 
            "classe-4"
        ]       
        
        for(let i = 0; i < inputSplit.length; i++){  
            
            let randomValue = Math.floor(Math.random() * bg.length)
            let span = document.createElement('span')         
            resultado.appendChild(span)
            let classeBg = bg[randomValue]
            span.className = classeBg           
            span.textContent = inputSplit[i]
        }        
    })
}

pegarInput()
