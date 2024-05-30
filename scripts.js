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
  } catch (error) {
    // Catch any errors that occur during evaluation; ✅
    // Display an error message; ✅
    display.value = "*Invalid Command!";

    // Style the error message; ✅
    display.style.color = "red";
    display.style.fontSize = "0.8rem";

    // Clear the error message after 2 seconds; ✅
    setTimeout(() => {
      display.value = "";
      display.style.color = "white";
      display.style.fontSize = "3rem";
    }, 2000); // Clear the error message after 2 seconds (2000 milliseconds); ✅
  }
}
