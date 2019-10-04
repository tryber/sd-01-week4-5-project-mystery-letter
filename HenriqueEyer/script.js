





function put_atribute_font_style_on_element(element){
    let styles=['italic','normal','oblique'];
    element.style.fontStyle=styles[random_number(3)];
}


function put_atribute_fontColor_on_element(element){
    element.style.color="rgb("+random_number(255)+","+random_number(255)+","+random_number(255)+")";
}

function put_atribute_fontsize_on_element(element){
    let tamanho=random_number(50)
    if(tamanho<10){
        tamanho=10;
    }
    element.style.fontSize=tamanho;
}

function random_number(intervalo){
    let num;
    num=Math.floor(Math.random()*intervalo)
    return num;
}

function create_div(){
    let div;
    div=document.createElement('div');
    return div;
}

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