let display = document.getElementById("display");
let expression = "";

function appendNumber(val) {
  if (val === ",") val = ".";

  if (display.innerText === "0") {
    expression = val;
  } else {
    expression += val;
  }

  display.innerText = expression;
}

function clearDisplay() {
  expression = "";
  display.innerText = "0";
}

function calculate() {
  try {
    let result = eval(expression);
    display.innerText = result;
    expression = result.toString();
  } catch {
    display.innerText = "Xatolik";
    expression = "";
  }
}

function percent() {
  expression += "/100";
  display.innerText = expression;
}
