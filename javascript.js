const errorCodes = {
    NO_SUCH_OPERATOR: "NO_SUCH_OPERATOR",
}

class operation {
    constructor(num1, num2, operator){
        this.num1 = num1;
        this.num2 = num2;
        this.operator = operator;
    }
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
