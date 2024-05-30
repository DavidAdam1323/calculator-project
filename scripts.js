// Calculator Project...

const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "*Invalid Command!";
    display.style.color = "red";
    display.style.fontSize = "0.8rem";
    setTimeout(() => {
      display.value = "";
      display.style.color = "white";
      display.style.fontSize = "3rem";
    }, 2000); // Clear the error message after 2 seconds (2000 milliseconds); ✅
  }
}
