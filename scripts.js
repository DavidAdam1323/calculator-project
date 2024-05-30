// Calculator Project Logic

// Get the display element from the HTML document; ✅
const display = document.getElementById("display");

// Function to append input to the display;✅
function appendToDisplay(input) {
  display.value += input;
}

// Function to clear the display; ✅
function clearDisplay() {
  display.value = "";
}

// Function to perform calculation; ✅
function calculate() {
  // Try to evaluate the expression in the display; ✅
  try {
    display.value = eval(display.value);
    display.classList.remove("error-message");
  } catch (error) {
    // Catch any errors that occur during evaluation; ✅
    // Display an error message; ✅
    display.value = "*Invalid";

    // Clear the error message after 2 seconds; ✅
    setTimeout(() => {
      display.value = "";
      display.classList.remove("error-message");
    }, 1000); // Clear the error message after 1 seconds (1000 milliseconds); ✅
  }
}
