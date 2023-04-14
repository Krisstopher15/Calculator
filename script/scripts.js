const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

let calculation = [];
let displayCalculation;
const getValue = (button) => {
  const value = button.textContent;

  if (value == "AC") {
    calculation = [];
    display.textContent = "0";
  } else if (value == "=") {
    display.textContent = eval(displayCalculation);
  } else if (value == "%") {
    display.textContent = displayCalculation / 100;
  } else {
    calculation.push(value);
    displayCalculation = calculation.join("");
    display.textContent = displayCalculation;
  }
  if (displayCalculation > 9999999) {
    display.textContent = "ERROR";
    calculation = [];
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", () => getValue(button));
});
