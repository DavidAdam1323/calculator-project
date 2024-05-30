// Calculator Project...

const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

// function calculate() {
//   try {
//     display.value = eval(display.value);
//   } catch (error) {
//     display.value = "Error";
//   }
// }

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "*Invalid Command!";
    display.style.color = "red"; // Set text color to red for error message
    display.style.fontSize = "0.8rem"; // Set font size for the error message
    setTimeout(() => {
      display.value = ""; // Clear the error message after a short delay
      display.style.color = "white"; // Reset text color to white;
      display.style.fontSize = "3rem"; // Reset font size
    }, 2000); // Clear the error message after 2 seconds (2000 milliseconds)
  }
}
