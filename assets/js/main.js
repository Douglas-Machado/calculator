const userInput = document.querySelector('.user-input')
let numberOne = Number(prompt("Digite o primeiro número:"))
let numberTwo = Number(prompt("Digite o segundo número:"))

function Calculator(numberOne, numberTwo){
  this.plus = () =>{
    return numberOne + numberTwo
  }

  this.minus = () =>{
    return numberOne - numberTwo
  }

  this.times = () =>{
    return numberOne * numberTwo
  }

  this.divided = () =>{
    return numberOne / numberTwo
  }
};

document.addEventListener('click', function(e){
  const el = e.target
  if(el.classList.contains('plus')){

    const result = new Calculator(numberOne, numberTwo)
    document.querySelector(".result").innerHTML = result.plus()
  }else if(el.classList.contains('minus')){

    const result = new Calculator(numberOne, numberTwo)
    document.querySelector(".result").innerHTML = result.minus()
  }else if(el.classList.contains('times')){

    const result = new Calculator(numberOne, numberTwo)
    document.querySelector(".result").innerHTML = result.times()
  }else if(el.classList.contains('divided')){

    const result = new Calculator(numberOne, numberTwo)
    document.querySelector(".result").innerHTML = result.divided()
  }
})