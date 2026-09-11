let display = document.getElementById("display");
let currentValue = "";
let storedValue = "";
let operator = null;

function updateDisplay() {
  display.value = currentValue || "0";
}

function appendNumber(number) {
  if (number === "." && currentValue.includes(".")) return;
  currentValue += number;
  updateDisplay();
}

function chooseOperator(op) {
  if (currentValue === "") return;

  if (storedValue !== "" && operator !== null) {
    calculate();
  }

  storedValue = currentValue;
  currentValue = "";
  operator = op;
}

function calculate() {
  if (storedValue === "" || currentValue === "" || operator === null) return;

  let result = 0;
  const a = parseFloat(storedValue);
  const b = parseFloat(currentValue);

  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      if (b === 0) {
        alert("Cannot divide by zero");
        clearAll();
        return;
      }
      result = a / b;
      break;
    default:
      return;
  }

  currentValue = result.toString();
  storedValue = "";
  operator = null;
  updateDisplay();
}

function clearAll() {
  currentValue = "";
  storedValue = "";
  operator = null;
  updateDisplay();
}

function deleteLast() {
  currentValue = currentValue.slice(0, -1);
  updateDisplay();
}

// Example button bindings
document.querySelectorAll("[data-number]").forEach((button) => {
  button.addEventListener("click", () => appendNumber(button.dataset.number));
});

document.querySelectorAll("[data-operator]").forEach((button) => {
  button.addEventListener("click", () => chooseOperator(button.dataset.operator));
});

document.getElementById("equals").addEventListener("click", calculate);
document.getElementById("clear").addEventListener("click", clearAll);
document.getElementById("delete").addEventListener("click", deleteLast);

updateDisplay();