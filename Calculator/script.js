let currentInput = "0";  // Current input string
let previousInput = "";  // Previous input string
let operator = "";  

function appendValue(number) {
    if (currentInput === "0") {
        currentInput = number.toString();
    } else {
        currentInput += number.toString();
    }
    updateDisplay();
}

function appendDot() {
    if (!currentInput.includes(".")) {  // Check if the current input does not already contain a dot
        currentInput += ".";
    }
    updateDisplay();
}

function chooseOperator(op) {  
    console.log("Operator clicked: " + op);  // Debugging line
    if (previousInput !== "") {
        calculateResult();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = "0";
    updateDisplay();
}


function clearDisplay() {
    currentInput = "0";
    previousInput = "";
    operator = "";
    updateDisplay();
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    if (operator === "+") {
        result = prev + curr;
    } else if (operator === "-") {
        result = prev - curr;
    } else if (operator === "*") {
        result = prev * curr;
    } else if (operator === "/") {
        result = prev / curr;
    }

    currentInput = result.toString();
    operator = "";
    previousInput = "";
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("display").textContent = currentInput;
}
