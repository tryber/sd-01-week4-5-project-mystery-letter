





function split_frase(txt){
    let split_str=txt.split(" ");
    return split_str;
}


function add_event_click_btn_input(){
    return_btn_input().addEventListener('click', function(){
        //Chamar função para seperar o texto digitado em um vetor com cada palavra
        //Chamar funçao para chamar as divs ou cria las

    })
}


function return_btn_input(){
    let btn_input=document.getElementById('btn_input')
    return btn_input;
}

function get_txt_input(){
    let txt_input=document.getElementById('txt_input')
    return txt_input.value;
}