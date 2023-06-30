var input = document.querySelector(".display");

console.log(input.style);

function appendToDisplay(value) {
  switch (value) {
    case "+":
    case "-":
    case "*":
    case "/":
      document.getElementById("btn_" + value).style.backgroundColor =
        "#f76f15d2";
      break;
    default:
      document.getElementById("btn_" + value).style.backgroundColor = "#f5f5f5";
  }
  if (input.innerText.length > 24) {
    error();
  } else {
    input.innerText += value;
  }
}

function clearDisplay() {
  document.getElementById("delete").style.backgroundColor = "#da1b61bf";
  input.innerText = "";
}

function deleteDisplay() {
  document.getElementById("delete").style.backgroundColor = "#da1b61bf";
  if (input.innerText.length > 0)
    input.innerText = input.innerText.slice(0, -1);
}

function error() {
  input.style.boxShadow = "0 0 10px 1px #da1b61bf";
  setTimeout(function () {
    input.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
  }, 3000);
}

function calculate() {
  const expression = input.innerText;
  try {
    const result = eval(expression);
    if (isNaN(result)) {
      error();
    } else {
      input.innerText = result;
    }
  } catch (e) {
    error();
  }
}

var delElement = document.getElementById("delete");
delElement.onclick = deleteDisplay;
delElement.ondblclick = clearDisplay;

document.onkeyup = function (e) {
  console.log(e);
  switch (e.which) {
    case 48:
    case 96:
      appendToDisplay("0");
      break;
    case 49:
    case 97:
      appendToDisplay("1");
      break;
    case 50:
    case 98:
      appendToDisplay("2");
      break;
    case 51:
    case 99:
      appendToDisplay("3");
      break;
    case 52:
    case 100:
      appendToDisplay("4");
      break;
    case 53:
    case 101:
      appendToDisplay("5");
      break;
    case 54:
    case 102:
      appendToDisplay("6");
      break;
    case 55:
    case 103:
      appendToDisplay("7");
      break;
    case 56:
      if (e.shiftKey) {
        appendToDisplay("*");
        break;
      }
    case 104:
      appendToDisplay("8");
      break;
    case 57:

    case 105:
      appendToDisplay("9");
      break;
    case 190:
      appendToDisplay(".");
      break;
    case 187:
      if (e.shiftKey) {
        appendToDisplay("+");
        break;
      } else {
        calculate();
        break;
      }
    case 189:
      appendToDisplay("-");
      break;
    case 191:
      appendToDisplay("/");
      break;
    case 13:
      calculate();
      break;
    case 8:
      if (e.shiftKey) {
        clearDisplay();
      } else {
        deleteDisplay();
      }
  }
};

function pressAction(value) {
  switch (value) {
    case "+":
    case "-":
    case "*":
    case "/":
      document.getElementById("btn_" + value).style.backgroundColor =
        "#f76f15f6";
      break;
    case "delete":
      document.getElementById("delete").style.backgroundColor = "#da1b61e3";
      break;
    default:
      document.getElementById("btn_" + value).style.backgroundColor = "#dedddd";
  }
}

document.onkeydown = function (e) {
  console.log(e);
  switch (e.which) {
    case 48:
    case 96:
      pressAction("0");
      break;
    case 49:
    case 97:
      pressAction("1");
      break;
    case 50:
    case 98:
      pressAction("2");
      break;
    case 51:
    case 99:
      pressAction("3");
      break;
    case 52:
    case 100:
      pressAction("4");
      break;
    case 53:
    case 101:
      pressAction("5");
      break;
    case 54:
    case 102:
      pressAction("6");
      break;
    case 55:
    case 103:
      pressAction("7");
      break;
    case 56:
      if (e.shiftKey) {
        pressAction("*");
        break;
      }
    case 104:
      pressAction("8");
      break;
    case 57:

    case 105:
      pressAction("9");
      break;
    case 190:
      pressAction(".");
      break;
    case 187:
      if (e.shiftKey) {
        pressAction("+");
        break;
      } else {
        pressAction("=");
        break;
      }
    case 189:
      pressAction("-");
      break;
    case 191:
      pressAction("/");
      break;
    case 13:
      pressAction("=");
      break;
    case 8:
      pressAction("delete");
  }
};

const infoIcon = document.querySelector("i");
const infoContent = document.querySelector(".note");

infoIcon.addEventListener("click", () => {
  infoContent.classList.toggle("active");
});
