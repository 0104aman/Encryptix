const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
let lastInputWasOperator = false;

function updateDisplay() {
    display.value = currentInput;
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        if (button.id === 'clear') {
            currentInput = '';
            updateDisplay();
            lastInputWasOperator = false;
        } else if (button.id === 'equals') {
            try {
                // Evaluate the expression
                currentInput = eval(currentInput.replace(/÷/g, '/').replace(/×/g, '*').replace(/−/g, '-'));
                updateDisplay();
            } catch (e) {
                currentInput = 'Error';
                updateDisplay();
            }
            lastInputWasOperator = false;
        } else if (button.classList.contains('operator')) {
            if (currentInput === '' || lastInputWasOperator) return;
            currentInput += value;
            updateDisplay();
            lastInputWasOperator = true;
        } else {
            currentInput += value;
            updateDisplay();
            lastInputWasOperator = false;
        }
    });
});