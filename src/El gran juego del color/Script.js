
var colors = generateColors();
var buttons = document.getElementsByClassName(".bbtn");
var msg = document.getElementById("#message");
console.log(msg);
var num = 6;

var selectedColor = randomColor();
var displayedColor = document.getElementById("#display");
console.log(displayedColor);
displayedColor[0].innerText = selectedColor;

var resetbtn = document.getElementsByName("#bt1");


for(let i = 0; i < buttons.length ; i++){
    buttons[i].style.backgroundColor = colors[i];
}

function changeColors(){
    let h1 = document.querySelector("h1");
    for(let i = 0 ; i < buttons.length ; i++){
        buttons[i].style.backgroundColor = color;
    }
    h1.style.backgroundColor = color;
}

function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b +")";
}

function generateColors(){
    var arr = []
    for(let i = 0 ; i < num ; i++){
        arr.push(randomColor());
    }
    return arr;    
}

function pickedColor(){
    let s = Math.floor(Math.random() * colors.length);
    return colors[s];
}

function restart(){
  
    colors = generateColors();
    selectedColor = pickedColor();

    for(let i = 0; i < buttons.length ; i++){
        buttons[i].style.backgroundColor = colors[i];
        
        if(colors[i]){
            buttons[i].style.backgroundColor = colors[i];
            buttons.style.display = "block";
        }else{
            buttons.style.display = "none";
        }
    }
}

function setUpButtons(){
    for(let i = 0; i < buttons.length ; i++){
        modeBtns[i].addEventListener("click", function(){
            modeBtns[0].classList.remove("selected");
            modeBtns[1].classList.remove("selected");
            this.classList;
        })
    }
}

function check(x){
    var clickedColor = x.style.backgroundColor;
    if(clickedColor === selectedColor){
        msg[0].textContent = "Intenta de nuevo";
    }else{
        x.style.backgroundColor = "#232323";
    }
}
restart();
setUpButtons();
//setUpColors();