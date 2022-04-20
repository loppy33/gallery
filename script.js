let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let card4 = document.getElementById("card4");
let card5 = document.getElementById("card5");
let card6 = document.getElementById("card6");
let card7 = document.getElementById("card7");
let card8 = document.getElementById("card8");
let card9 = document.getElementById("card9");

let modal = document.getElementById("modal");
let modalImg = document.getElementById("modalImg");

let btnl = document.getElementById("btn-l");
let btnr = document.getElementById("btn-r");

let currentImg = 0 

let paintings = document.getElementsByClassName('paintings')[0]

modal.onclick = function(){
    modal.style.transform = 'translateY(100%)'
}

function openImg(imgNumber){
   modalImg.src = "img/"+imgNumber+".jpg";
   modal.style.transform = "translateY(0%)";
   currentImg = imgNumber;
}

btnl.onclick = function(event){
    event.stopPropagation();

    currentImg--
    if(currentImg == -1){
        currentImg = paintings.children.length - 1
    }

    modalImg.src = "img/"+currentImg+".jpg";
}

btnr.onclick = function(event){
    // Чтобы не закрывался модал по нажатию на кнопку право
    event.stopPropagation();

    // currentImage++ or currentImg += 1
    currentImg = currentImg+1
    if(currentImg == paintings.children.length){
        currentImg = 0;
    }

    modalImg.src = "img/"+currentImg+".jpg";

}

