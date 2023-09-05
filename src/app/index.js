// variables
var num1 = "";
var num2 = "";
var operations = "";
var ciclo = 0;
var MEMORY = 0;
// items from HTML

const visor = document.querySelector(".visor");
const buttons = document.querySelectorAll(".btn");
const equals = document.querySelector('.equals')

const objOperatorsFunctions = {
  "+": "soma",
 "-": "subtracao",
 "/": "divisao",
 "X": "multiplicacao",
 "%": "porcentagem",
 "raizQ": "raizQuadrada"  
 }

const calculatorSpecials = {
  "MR": "Memory Recall",
  "MC":"Mememory Clear" ,
  "MS":"Mememory Clear",
  "M+": "Memory Add" ,
}

// capturando todos os botoes

buttons.forEach((button) => button.addEventListener("click", clickF));
function clickF(e) {
  
  let textoInternoBotao = e.target.innerText;
  let inputIsNaN= isNaN(parseInt(textoInternoBotao));
  let equals = (textoInternoBotao == "=")


  // enquanto for NUMERO, ou . (simbolo usado em numeros reais)
  if ((!inputIsNaN || textoInternoBotao == ".")){
    // captura primeiro numero, se o ciclo n for 0, captura segundo numero;
    if (ciclo == 0) {
      num1 += textoInternoBotao;
      atualizaVisor(textoInternoBotao);
    } else {
      num2 += textoInternoBotao;
      atualizaVisor(textoInternoBotao);
    }           // qualifica operador
  } else if (objOperatorsFunctions[textoInternoBotao]) {
    atualizaVisor(textoInternoBotao);
    operations += textoInternoBotao;
    ciclo = 1;
  } else if (equals) {
    let resultAtual = calcular(num1, num2, operations)
    num1 = resultAtual;
    num2 = ""
    operations = ""
    apagaVisor()
    atualizaVisor(resultAtual)
    }
    else if (textoInternoBotao == "AC")
    {
      apagaVisor()
      resetInputs()
    }

    else if (calculatorSpecials[textoInternoBotao])
    { 
      
      if(MEMORY != 0 && calculatorSpecials[textoInternoBotao] )
      {
        atualizaVisor(MEMORY)
      }
    
      apagaVisor()
      MEMORY += calcularMemoria(num1,num2,textoInternoBotao,MEMORY)
      atualizaVisor("");
      num1 = ""
      num2 = ""
      operations = ""
      ciclo = 0;
      
    }

}

// botao de calcular





function atualizaVisor(value) {
  visor.innerText += value
}

function apagaVisor() {
  visor.innerText = "";
}
// window [keyBoard] Funcionalidades do teclado
window.addEventListener("keypress", keyBoardF);

function keyBoardF(e) {
  
  let tecla = e.key
  let equalsKey = tecla == "=" || tecla == "Enter"

  if (!isNaN(tecla) || tecla == ".") {
    if (ciclo == 0) {
      num1 += tecla;
      atualizaVisor(tecla);
    } else {
      num2 += tecla;
      atualizaVisor(tecla);
    }
  } else if (objOperatorsFunctions[tecla]) {
    operations += tecla;
    atualizaVisor(tecla);
    ciclo = 1;
  } else if (equalsKey) {
    let resultAtual = calcular(num1, num2, operations)
    num1 = resultAtual;
    num2 = ""
    operations = ""
    apagaVisor()
    atualizaVisor(resultAtual)  

  } else if (tecla = "f")  {
    resetInputs()
    apagaVisor()

  }
}

function calcular(a, b, operation)
{  
  let result = 0;
    switch(operation) {
      case '+' : 
        return result = Number(a) + Number(b);
        
      case '-':
      return result = Number(a) - Number(b);
        
      case 'X':
       return result = Number(a) * Number(b);
        
      case '/':
        return result = Number(a) / Number(b);
        
      case '%': 
      let expr1 = Number(a);
      let expr2 = (Number(b) / expr1 ) * 100;
      return result = expr1 + expr2;
      
      case 'raizQ':
        return result = Math.sqrt(Number(a));
    
      default:
        return 'error'
    }
}

function calcularMemoria(a,b, operation, memoria)
{
  switch(operation){

      case 'MS':
        memoria = Number(a);
        return memoria;
      case 'M+':
        memoria = Number(a) + Number(b);
        return memoria;
      case 'M-':
        memoria = Number(a) - Number(b)
        return memoria;
      case 'MC': 
      memoria = 0
      return memoria
      case 'MR':
        atualizaVisor(memoria)
        break;
      default: 
      return 'oi'
    }
}


function resetInputs()
{
  num1 = "";
  num2 = "";
  operations = "";
  ciclo = 0;
  reminder = 0;
  MEMORY_STORAGE = 0;
}