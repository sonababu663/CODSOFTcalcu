// script.js

let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let calculator = {
    displayValue: '',
    firstOperand: null,
    secondOperand: null,
    operator: null,
};

buttons.forEach(button => {
    button.addEventListener('click', handleButtonPress);
});

function handleButtonPress(event) {
    let buttonValue = event.target.textContent;

    if (buttonValue === 'C') {
        calculator.displayValue = '';
        calculator.firstOperand = null;
        calculator.secondOperand = null;
        calculator.operator = null;
    } else if (buttonValue === '=' && calculator.operator) {
        calculator.secondOperand = parseFloat(calculator.displayValue);
        let result = calculate(calculator.firstOperand, calculator.secondOperand, calculator.operator);
        calculator.displayValue = result.toString();
        calculator.firstOperand = null;
        calculator.secondOperand = null;
        calculator.operator = null;
    } else if (buttonValue === '.' && !calculator.displayValue.includes('.')) {
        calculator.displayValue += '.';
    } else if (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/') {
        calculator.firstOperand = parseFloat(calculator.displayValue);
        calculator.operator = buttonValue;
        calculator.displayValue = '';
    } else {
        calculator.displayValue += buttonValue;
    }

    display.value = calculator.displayValue;
}

function calculate(firstOperand, secondOperand, operator) {
    switch (operator) {
        case '+':
            return firstOperand + secondOperand;
        case '-':
            return firstOperand - secondOperand;
        case '*':
            return firstOperand * secondOperand;
        case '/':
            return firstOperand / secondOperand;
        default:
            return null;
    }
}