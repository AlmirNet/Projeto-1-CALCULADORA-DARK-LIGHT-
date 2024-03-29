const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");

buttons.forEach((item) => {
    item.addEventListener('click', () => {
        handleButtonClick(item.id);
    });
});

document.addEventListener('keydown', (event) => {
    const keyPressed = event.key;

    if (/[0-9+\-*/().=]|Enter|Backspace|Escape/.test(keyPressed)) {
        handleButtonClick(keyPressed);
    }

    event.preventDefault();
});

function handleButtonClick(buttonId) {
    switch (buttonId) {
        case 'clear':
            clearDisplay();
            break;
        case 'backspace':
            removeLastCharacter();
            break;
        case 'equal':
        case 'Enter':
            evaluateExpression();
            break;
        case 'Escape':
            clearEquation();
            break;
        default:
            appendToDisplay(buttonId);
    }
}

function clearDisplay() {
    display.innerText = '';
}

function removeLastCharacter() {
    let string = display.innerText.toString();
    display.innerText = string.substr(0, string.length - 1);
}

function evaluateExpression() {
    if (display.innerText !== '') {
        const result = calculate(display.innerText);
        display.innerText = result;
    } else {
        display.innerText = 'Empty!';
        setTimeout(() => (display.innerText = ''), 2000);
    }
}

function calculate(expression) {
    try {
        return eval(expression);
    } catch (error) {
        return 'Error';
    }
}

function appendToDisplay(value) {
    display.innerText += value;
}

function clearEquation() {
    display.innerText = '';
}

themeToggleBtn.addEventListener('click', toggleTheme);

function toggleTheme() {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
}
