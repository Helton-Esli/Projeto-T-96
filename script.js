
function onClick(element){
    document.getElementById( "img01") .src = element.src;
    document.getElementById("modal01").style.display = "block";
}

const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrosel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0; 
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`

}

setInterval(carrosel, 1800); 

var total = 0 

function adicionarPedido(valor, checkbox){

    if( checkbox.checked == false){
       total = Number(total - valor)
       document.querySelector('#total').innerHTML = `total R$ ${total.toFixed(2)}`
    }else{
        total = Number(total + valor)
        document.querySelector('#total').innerHTML = `total R$ ${total.toFixed(2)}`
    }


}

