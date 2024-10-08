const add = function(a,b) {
    return a + b
};

const subtract = function(a,b) {
  return a - b
};

const multiply = function(a,b) {
    return a * b
  };

const divide = function(a,b) {
    return a / b
  };


//operation variables
let num1;
let num2;
let opSymbol;

function operate(operator,firstNum,secondNum){
    if (operator === '+'){
        return add(firstNum,secondNum)
    }
    else if (operator === '-'){
        return subtract(firstNum,secondNum)
    }
    else if (operator === '*'){
        return multiply(firstNum,secondNum)
    }
    else if (operator === '/'){
        return divide(firstNum,secondNum)
    }
}