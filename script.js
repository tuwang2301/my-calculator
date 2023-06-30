var input = document.querySelector(".display");

console.log(input.style);

function appendToDisplay(value) {
  if (input.innerText.length > 24) {
    error();
  } else {
    input.innerText += value;
  }
}

function clearDisplay() {
  input.innerText = "";
}

function deleteDisplay() {
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

// 1: 97, 49
// 2: 98, 50
// 3: 99, 51
// 4: 100, 52
// 5: 101, 53
// 6: 102, 54
// 7: 103, 55
// 8: 104, 56
// 9: 105, 57
// .: 190
// shiftKey true, which 187: +
// 189: -
// shiftKey true, which 56: *
// 191: /
// =: 187, 13
// ac: shiftkey + which 8, 27
// ec: which 8
// 0: 48,96
