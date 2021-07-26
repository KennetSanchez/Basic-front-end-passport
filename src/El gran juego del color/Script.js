
var num = 6;
var backgroundColorDefault = "#232323";
var colors = generateColors();
var selectedColor = randomColor();

var buttons = document.getElementsByClassName("bbtn");
var msg = document.getElementById("message");
var container = document.getElementById("boxes");

var displayedColor = document.getElementById("display");


var resetbtn = document.getElementsByName("#bt1");

function restart(x = 6){
    num = x;

    setUp();
    displayedColor.textContent = selectedColor;
    colors = generateColors();
    selectedColor = pickedColor();

    container.style.background = backgroundColorDefault;
    for(let i = 0; i < buttons.length ; i++){
        buttons[i].style.backgroundColor = colors[i];
    }
}

function generateColors(){
    var arr = []
    for(let i = 0 ; i < num ; i++){
        arr.push(randomColor());
    }
    return arr;    
}

function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b +")";
}

function pickedColor(){
    let s = Math.floor(Math.random() * colors.length);
    return colors[s];
}

function check(x){
    var clickedColor = x.style.backgroundColor;
    if(clickedColor === selectedColor){
        msg.textContent = "¡Ganaste!";
        won();
    }else{
        x.style.backgroundColor = backgroundColorDefault;
        msg.textContent = "Intenta de nuevo";
    }
}

function won(){
    for(let i = 0; i < buttons.length ; i++){
        buttons[i].style.backgroundColor = selectedColor;       
    }
    container.style.backgroundColor = selectedColor;
    setTimeout(restartWithDelay, 1000); 
}

function restartWithDelay(){
    restart(num);
}

function beginner(){
    num = 3;
    restart(3);
}

function professional(){
    num = 6;
    restart(6);
}

function setUpButtons(){
    for(let i = 0; i < buttons.length ; i++){
        buttons[i].addEventListener("click", function(){
            buttons[0].classList.remove("selected");
            buttons[1].classList.remove("selected");
            this.classList.add("selected");
        })
    }
}


function setUpColors(){
    for(let i = 0; i < buttons.length ; i ++){
        buttons[i].style.backgroundColor = colors[i];
    }
}

function setUp(){
    msg.textContent = "";
    if(num == 3){
        for(let i = num ; i < buttons.length ; i++){
            buttons[i].style.display = "none";
        }
    }else{
        for(let i = 0 ; i < buttons.length ; i++){
            buttons[i].style.display = "inline-block";
        }
    }
}

restart();
setUpButtons();
setUpColors();