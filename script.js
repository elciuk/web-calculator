const resultWindow = document.querySelector(".results");
const inputField = document.querySelector(".input_field");


const getResult = document.querySelector("#get_result");
const clear = document.querySelector("#clear");

// Button class assigned as buttons const, that is all buttons except C and =
const buttons = document.querySelectorAll(".button");

//assign a function onclick to all "buttons" items, that adds a button.value
// to inputField.value
buttons.forEach(buttonClick);
function buttonClick(btn){
    btn.onclick = function(){
        inputField.value += btn.value;
        inputField.focus();
    }
}

// upon clicking "=" button, evaluate the inputField and clear inputField
getResult.onclick = function(){
    resultWindow.textContent = eval(inputField.value);
    inputField.value = "";
    inputField.focus();
}

//upon clicking "C" button, clear inputField
clear.onclick = function(){
    inputField.value = "";
    resultWindow.textContent = "";
    inputField.focus();
}

