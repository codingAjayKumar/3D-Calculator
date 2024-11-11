// Global variable to store the current memory value
let memory = 0;

/**
 * Appends a given value to the display.
 * @param {string} value - The value to append to the display (e.g., a number or operator).
 */
function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

/**
 * Clears the display by setting its value to an empty string.
 */
function clearDisplay() {
  document.getElementById("display").value = "";
}

/**
 * Evaluates the expression in the display and updates it with the result.
 * If an error occurs during evaluation, "Error" is shown.
 */
function calculate() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

/**
 * Calculates the percentage of the current expression in the display.
 * Divides the result by 100 and updates the display.
 * If an error occurs, "Error" is shown.
 */
function calculatePercentage() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value) / 100;
  } catch (error) {
    display.value = "Error";
  }
}

/**
 * Calculates the square root of the current expression in the display.
 * If an error occurs, "Error" is shown.
 */
function calculateSquareRoot() {
  const display = document.getElementById("display");
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch (error) {
    display.value = "Error";
  }
}

/**
 * Adds the current display value to memory and clears the display.
 */
function memoryStore() {
  const display = document.getElementById("display");
  memory += eval(display.value);
  clearDisplay();
}

/**
 * Appends the stored memory value to the display.
 */
function memoryRecall() {
  const display = document.getElementById("display");
  display.value += memory;
}

/**
 * Clears the stored memory value.
 */
function memoryClear() {
  memory = 0;
}

/**
 * Subtracts the current display value from memory and clears the display.
 */
function memorySubtract() {
  const display = document.getElementById("display");
  memory -= eval(display.value);
  clearDisplay();
}

/**
 * Adds keyboard support for calculator operations.
 * Supports numeric keys, basic operators, clear ("C"), and evaluate ("=").
 */
document.addEventListener("keydown", function (event) {
  const key = event.key;
  const validKeys = "0123456789/*-+C=";
  if (validKeys.includes(key)) {
    if (key === "C") clearDisplay();
    else if (key === "=") calculate();
    else appendToDisplay(key);
  }
});
