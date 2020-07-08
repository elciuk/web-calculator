const resultWindow = document.querySelector(".results");
const inputField = document.querySelector(".input_field");

const one = document.querySelector('#one');
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const add = document.querySelector("#add");
const substract = document.querySelector("#substract");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const remainder = document.querySelector("#remainder");
const decimal = document.querySelector("#decimal");
const getResult = document.querySelector("#get_result");
const clear = document.querySelector("#clear");


one.onclick = function(){
    inputField.value += "1";
}
two.onclick = function(){
    inputField.value += "2";
}
three.onclick = function(){
    inputField.value += "3";
}
four.onclick = function(){
    inputField.value += "4";
}
five.onclick = function(){
    inputField.value += "5";
}
six.onclick = function(){
    inputField.value += "6";
}
seven.onclick = function(){
    inputField.value += "7";
}
eight.onclick = function(){
    inputField.value += "8";
}
nine.onclick = function(){
    inputField.value += "9";
}
zero.onclick = function(){
    inputField.value += "0";
}
decimal.onclick = function(){
    inputField.value += ".";
}
remainder.onclick = function(){
    inputField.value += "%";
}
multiply.onclick = function(){
    inputField.value += "*";
}
substract.onclick = function(){
    inputField.value += "-";
}
add.onclick = function(){
    inputField.value += "+";
}
divide.onclick = function(){
    inputField.value += "/";
}
clear.onclick = function(){
    inputField.value = "";
    resultWindow.value = "";
}
getResult.onclick = function(){
    resultWindow.textContent = eval(inputField.value);
    console.log("pressed result");
}




