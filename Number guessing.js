var targetNumber = Math.floor(Math.random() * 10) + 1;
var tryCounter = 0;
var forma;
var input;
var submit;
var win;
var error;
var loss;

function init () {
    forma = document.getElementById("myForm");
    input = document.getElementById("myInput");
    submit = document.getElementById("myButton");

    win = createElement("You win!", "#00ff00", "H1",  "none");
    error = createElement("Guess is incorrect!", "#ffff00", "H1",  "none");
    loss = createElement("Looooooser!", "#ff0000", "H1",  "none");

    document.body.insertBefore(win, forma);
    document.body.insertBefor(error, forma);
    document.body.insertBefore(loss, forma);

    submit.onclick = function(e){
        e.preventDefault();
        check(input.value);
    }
}

function check (value) {
    if(targetNumber == value){
        showWin();
    }else{
        if(tryCounter >= 4){
            showLoss();
        }else{
            showError();
        }
    }
    tryCounter++;
}

function showWin () {
    forma.style.display="none";
    error.style.display = "none";
    loss.style.display = "none";
    win.style.display = "block";
}

function showError () {
    error.style.display = "block";
    loss.style.display = "none";
    win.style.display = "none";
}

function showLoss () {
    forma.style.display="none";
    error.style.display = "none";
    loss.style.display = "block";
    win.style.display = "none";
}

function createElement(text, color, element, display){
    var element= document.createElement(element)
    element.appendChild(document.createTextNode(text));
    element.style.color = color;
    element.style.display = display;
    return element;
}

init();