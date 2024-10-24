let memory = 0;

function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function calculatePercentage() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value) / 100;
  } catch (error) {
    display.value = "Error";
  }
}

function calculateSquareRoot() {
  const display = document.getElementById("display");
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch (error) {
    display.value = "Error";
  }
}

function memoryStore() {
  const display = document.getElementById("display");
  memory += eval(display.value);
  clearDisplay();
}

function memoryRecall() {
  const display = document.getElementById("display");
  display.value += memory;
}

function memoryClear() {
  memory = 0;
}

function memorySubtract() {
  const display = document.getElementById("display");
  memory -= eval(display.value);
  clearDisplay();
}

// Keyboard support
document.addEventListener("keydown", function (event) {
  const key = event.key;
  const validKeys = "0123456789/*-+C=";
  if (validKeys.includes(key)) {
    if (key === "C") clearDisplay();
    else if (key === "=") calculate();
    else appendToDisplay(key);
  }
});
