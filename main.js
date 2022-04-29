const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');
const button = document.getElementById('container');

let target_value ="";
let oper = ["+","-","*","/","."];

function buttonPressed(event){

const text = event.target.innerHTML;

 if(text == "=") {
   target_value = eval(target_value);    
 } else if(text == "AC") {
   target_value = "";
 } else if(target_value == "0"||target_value == "00") {
   target_value = text;
 } else if (oper.includes(text) == oper.includes(target_value.slice(-1)) && (text == "+" || text == "-" || text == "*" || text == "/"|| text ==".")){
   target_value = target_value.slice(0,-1) + text;
 } else {
   target_value = target_value + text;
 }
   result.innerHTML = target_value;
}

button.addEventListener('click', buttonPressed);











   