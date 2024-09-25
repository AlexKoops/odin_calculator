function add(a, b) {
    displayValue = a + b;
    return displayValue;
}

function subtract(a, b) {
    displayValue = a - b;
    return displayValue;
}

function multiply(a, b) {
    displayValue = a * b;
    return displayValue;
}

function divide(a, b) {
    displayValue =  a / b;
    return displayValue;
}

let firstNumber;
let operator;
let secondNumber;

function operate(number1, number2, operator) {
    switch(operator) {
        case "+":
            add(number1, number2);
            break;
        case "-":
            subtract(number1, number2);
            break;
        case "*":
            multiply(number1, number2);
            break;
        case "/":
            divide(number1, number2);
            break;
    }
}

function addTextToInput(text) {
    const inputField = document.getElementById('result');
    inputField.value = text;
  }

let displayValue;

const textDisplay = document.querySelector('#result');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = button.innerText;

        if(button.id === "clear") {
            textDisplay.value = '';
        }

        else if(button.id === "equal") {
            // calculate with operate
        }

        else {
            textDisplay.value += value;
        }
    })
})

