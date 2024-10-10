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
    if (b == 0){
        alert('NOOOOO!')
        clearEverything()
    } else{
        return a / b
    }
    
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
function enableAllBtn(exceptionBtn) {
    let allBtn = document.querySelectorAll('button');
    allBtn.forEach(btn => {
        if (btn != exceptionBtn){
            btn.classList.remove("disabled");
        }
    })
}



//Number button display function
const numBtn = document.querySelectorAll('.numberBtn');

numBtn.forEach(button => {
    button.addEventListener('click', () =>{
        display.textContent += button.textContent;
        enableAllBtn(decimalBtn);
    })
});

const decimalBtn = document.querySelector('#decimal');
decimalBtn.addEventListener('click', () => {
    display.textContent += decimalBtn.textContent;
    enableAllBtn()
    decimalBtn.classList.add('disabled');
})

//operation button functions

const opBtn = document.querySelectorAll('.opBtn');
opBtn.forEach(button => {
    button.addEventListener('click', () =>{
        console.table({opSymbol,num1,num2})
        enableAllBtn(numDel);
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
        const opBtnInside = document.querySelectorAll('.opBtn, .equal')
        opBtnInside.forEach(button => {button.classList.add("disabled")}); 
    })
});

function roundNumberDisplayed(){

}

const equalBtn = document.querySelector('#equal');

function equals(){
    if (!num1) {
        return;
    } else {
        num2 = Number(display.textContent);
        display.textContent = operate(opSymbol,num1,num2)
        if (opSymbol === undefined 
            && num1 === undefined
            && num2 === undefined
        ){
            return
        } else {
            num1 = Number(display.textContent);
            opSymbol = '';
        }
    }
    console.table({opSymbol,num1,num2}) 
}

equalBtn.addEventListener('click', () => {
    enableAllBtn()
    equalBtn.classList.add("disabled")
    const numbersAnddel = document.querySelectorAll('.numberBtn, .delete');
    numbersAnddel.forEach(button => {
        button.classList.add("disabled")
    })
    equals()
})


//other button functions
const numDel = document.querySelector('#del');
numDel.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0,-1)
    if (display.textContent.includes('.')){
        enableAllBtn(decimalBtn)
    } else {
        enableAllBtn()
    }
});

function clearEverything(){
    display.textContent = '';
    num1 = undefined;
    num2 = undefined;
    opSymbol = undefined;
    console.table({opSymbol,num1,num2})
    enableAllBtn()
    const opBtnInside = document.querySelectorAll('.opBtn')
    opBtnInside.forEach(button => {button.classList.add("disabled")}); 
}

const numAc = document.querySelector('#AC');
numAc.addEventListener('click', () => {
    clearEverything()
})

//keyboard link
document.addEventListener('keydown', function(event) {
    // Mapping numbers and decimal
    if (/\d|\./.test(event.key)) {  // If a number (0-9) or a decimal point is pressed
      const numberBtn = document.querySelector(`.numberBtn[value="${event.key}"]`);
      if (numberBtn && !numberBtn.classList.contains('disabled')) numberBtn.click(); // Trigger the corresponding button click
    }

    // Mapping operators and equals
    switch (event.key) {
        case '+':
        case '-':
        case '*':
        case '/':
            const opBtn = document.querySelector(`.opBtn[value="${event.key}"]`);
            if (opBtn && !opBtn.classList.contains('disabled')) opBtn.click(); // Trigger operator button click
            break;
        case 'Enter': // Enter key for equals ('=')
            const equalsBtn = document.querySelector(`#equal`);
            if (equalsBtn && !equalBtn.classList.contains('disabled')) equalsBtn.click(); // Trigger equals button click
            break;
        case 'Delete': 
            const ACBtn = document.querySelector(`#AC`);
            if (ACBtn && !ACBtn.classList.contains('disabled')) ACBtn.click(); 
            break;
        case 'Backspace': 
            const delBtn = document.querySelector(`#del`);
            if (delBtn && !delBtn.classList.contains('disabled')) delBtn.click(); 
            break;
        case '.':
            const decimalBtn = document.querySelector(`#decimal`);
            if (decimalBtn && !decimalBtn.classList.contains('disabled')) decimalBtn.click(); 
            break;
    }
})