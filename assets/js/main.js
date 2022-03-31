function Calculator(){ //Constructor function
  // catching display by class name inside of the function
  this.display = document.querySelector('.display');

  this.start = () =>{
    this.getUserClick()
    this.pressEnter();
  }

  //listening for keypress('Enter')
  this.pressEnter = () =>{
    document.addEventListener('keypress', e => {
      if (e.keyCode === 13) this.calculate();
    })
  }

  //action handler
  this.getUserClick = () =>{
    document.addEventListener('click', event => {
      const el = event.target
      if (el.classList.contains("btn-num")) this.addNumDisplay(el);
      if (el.classList.contains('btn-clear')) this.clear();
      if (el.classList.contains('btn-del')) this.del();
      if (el.classList.contains('btn-eq')) this.calculate();
    });
  };

  //calculate function with a try, catch in case of error
  this.calculate = () => {
    try {
      const conta = eval(this.display.value);

      if(!conta) {
        alert('Conta inválida');
        return;
      }

      this.display.value = conta;
      this.display.focus();
    } catch(e) {
      alert('Conta inválida');
      return;
    }
  };

  //clearing the display value
  this.clear = () => this.display.value = "";

  //this method erase the last digit
  this.del = () => this.display.value = this.display.value.slice(0, -1);

  //this method will show the key pressed in the display
  this.addNumDisplay = (el) =>{
    this.display.value += el.innerText;
    this.display.focus();
  };
  
}

//initializing the function calling the start method
let calculator = new Calculator()
calculator.start()
