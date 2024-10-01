const errorCodes = {
    NO_SUCH_OPERATOR: "NO_SUCH_OPERATOR",
}

const numBlock = document.querySelector("#num-block");
const operatorBtns = document.querySelectorAll(".operator-button");
const equalsBtn = document.querySelector("#equals-button");
const clearBtn = document.querySelector("#clear-button");
const signBtn = document.querySelector("#clear-button");
const display = document.querySelector("#display");

class operation {
    constructor(num1, num2, operator){
        this.num1 = num1;
        this.num2 = num2;
        this.operator = operator;
    }
}

let clearDisplayOnInput = false;
let operationInput = new operation(NaN, NaN, "+");

numBlock.addEventListener("click", (event) => {
    if(event.target == numBlock)
        return;

    if(clearDisplayOnInput){
        clearDisplayOnInput = false;
        clearDisplay();
    }

    switch(event.target.id){
        case "delete-button":
                display.textContent = display.textContent.slice(0, -1);
            break;
        case "comma-button":
            return;
        default:
        display.textContent += event.target.textContent;
    }

});

operatorBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        if(isNaN(operationInput.num1)){
            operationInput.num1 = +display.textContent;
            operationInput.operator = event.target.textContent;
            clearDisplayOnInput = true;
        }else{
            if(clearDisplayOnInput){
                display.textContent = NaN;
            }else{
                operationInput.num2 = +display.textContent;
                display.textContent = operate(operationInput);
                operationInput = new operation(NaN, NaN, "+");
            }
        }
    });
});

equalsBtn.addEventListener("click", () => {
    if(clearDisplayOnInput){
        display.textContent = NaN;
    }else{
        operationInput.num2 = +display.textContent;
        display.textContent = operate(operationInput);
        operationInput = new operation(NaN, NaN, "+");
    }
});

function clearDisplay(){
    display.textContent = "";
}

function operate(operation){
    switch(operation.operator){
        case "+":
            return add(operation.num1, operation.num2);
        case "-":
            return subtract(operation.num1, operation.num2);
        case "*":
            return multiply(operation.num1, operation.num2);
        case "/":
            return divide(operation.num1, operation.num2);
        case "%":
            return modulo(operation.num1, operation.num2);
        default:
            return errorCodes.NO_SUCH_OPERATOR;
    }
}

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function modulo(a, b){
    return a % b;
}
