add_event_click_btn_input();

function create_carta(frase){
    
    let i;
    for(i=0;i<frase.length;i++){
        let div=create_div();
        put_attribute_fontColor_on_element(div);
        put_attribute_font_style_on_element(div);
        put_attribute_fontsize_on_element(div);
        put_attribute_imgbackground_on_element(div)
        add_element_in_div(div);
    }
}

function add_element_in_div(element){
    let div=document.getElementsByClassName('div-output')[0];
    div.appendChild(element);
}



function put_attribute_imgbackground_on_element(element){
    element.style.backgroundImage="url(/img"+random_number(4)+".png)";
}

function put_attribute_font_style_on_element(element){
    let styles=['italic','normal','oblique'];
    element.style.fontStyle=styles[random_number(3)];
}


function put_attribute_fontColor_on_element(element){
    element.style.color="rgb("+random_number(255)+","+random_number(255)+","+random_number(255)+")";
}

function put_attribute_fontsize_on_element(element){
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
    txt=txt.split(" ");
    return txt;
}


function add_event_click_btn_input(){
    return_btn_input().addEventListener('click', function(){
        create_carta(split_frase(get_txt_input()));
    })
}


function return_btn_input(){
    let btn_input=document.getElementById('btn_input')
    return btn_input;
}

function get_txt_input(){
    let txt_input=document.getElementById('txt_input');
    return txt_input.value;
}