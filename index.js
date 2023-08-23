// variables

let num1 = "";
let num2 = "";
let operations = "";

// capturando todos os botoes

const buttons = document.querySelectorAll(".btn");

console.log(buttons);

buttons.forEach((button) => button.addEventListener("click", key));

// Visor

const visor = document.querySelector(".visor");

visor.addEventListener("click", () => {
  console.log("sexo");
});

// window [keyBoard]

window.addEventListener("keypress", conta);

function conta(e) {
  if (!isNaN(e.key) || e.key == ".") {
    if (operations == "") {
      num1 = num1 + e.key;
      atualizaVisor(e.key);
    } else {
      num2 += e.key;
      atualizaVisor(e.key);
    }
  } else if (e.key == "+" || e.key == "-" || e.key == "/" || e.key == "*") {
    operations += e.key;
    atualizaVisor(e.key);
  } else if (e.key == "=" || e.key == "Enter") {
    if (num1 != "" && num2 != "" && operations != "") {
      apagaVisor();
      let result = calcula(num1, num2, operations);
      atualizaVisor(result);
      num1 = "";
      num2 = "";
      operations = "";
    }
  }
  console.log(num1, num2, operations);
}

function atualizaVisor(value) {
  visor.innerText += value;
}
function apagaVisor() {
  visor.innerText = "";
}

function key() {
  if (this.innerText == "1") {
    console.log(parseInt(1));
  }
}

function calcula(a, b, operation) {
  let x = parseInt(a);
  let y = parseInt(b);

  switch (operation) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "/":
      return x / y;
    case "*":
      return x * y;
    default:
      return "ERROR";
  }
}
