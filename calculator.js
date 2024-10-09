//operation variables
let num1;
let num2;
let opSymbol;

//operation functions
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
    } else {
        return num1
    }
}

const display = document.querySelector('#display');

//Enable/disable functions
function enableAllBtn() {
    let allBtn = document.querySelectorAll('button');
    allBtn.forEach(btn => {
        btn.classList.remove("disabled");
    })
}



//Number button display function
const numBtn = document.querySelectorAll('.numberBtn');

numBtn.forEach(button => {
    button.addEventListener('click', () =>{
        display.textContent += button.textContent;
        enableAllBtn();
    })
});


//operation button functions

const opBtn = document.querySelectorAll('.opBtn');
opBtn.forEach(button => {
    button.addEventListener('click', () =>{
        console.table({opSymbol,num1,num2})
        enableAllBtn(); 
        if (!opSymbol){
        opSymbol = button.dataset.value;
        } 
        
        
        if (!num1){
            num1 = Number(display.textContent);
            display.textContent = '';
            
        } else if (!num2){
            num2 = Number(display.textContent);
            display.textContent = '';
            num1 = Number(operate(opSymbol,num1,num2))
            num2 ='';
            opSymbol = button.dataset.value;
            
        } else {
            num1 = Number(display.textContent);
            num2 ='';
            display.textContent = '';
            
        }
        console.table({opSymbol,num1,num2}) 
        button.classList.add("disabled");
    })
});


const equalBtn = document.querySelector('#equal');

function equals(){
    if (!num1){
        num1 = Number(display.textContent);
    } else {
        num2 = Number(display.textContent);
        display.textContent = operate(opSymbol,num1,num2)
        num1 = Number(display.textContent);
        opSymbol = '';
    }
    console.table({opSymbol,num1,num2}) 
}

equalBtn.addEventListener('click', () => {
    enableAllBtn()
    equals()
    equalBtn.classList.add("disabled")
    const numbersAnddeci = document.querySelectorAll('.numberBtn', '.del');
    numbersAnddeci.forEach(button => {
        button.classList.add("disabled")
    })
    
})


//other button functions
const numDel = document.querySelector('#del');
numDel.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0,-1)
});

const numAc = document.querySelector('#AC');
numAc.addEventListener('click', () => {
    display.textContent = '';
    num1 = undefined;
    num2 = undefined;
    opSymbol = undefined;
    console.table({opSymbol,num1,num2})
    enableAllBtn()
})

