let display = document.getElementById('result');
let operand = '';
let result = 0;

function clearDisplay() {
    display.value = '';
    operand = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
    operand = display.value;
}

function appendToDisplay(value) {
    display.value += value;
    operand += value;
}

function calculate() {
    try {
        result = eval(operand);
        display.value = result;
        operand = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
}
