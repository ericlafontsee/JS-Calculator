const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.calculator__keys');
var display = document.querySelector('.calculator__display');
var operations = {
    plus: function(a, b) {return(a + b)},
    minus: function(a, b) {return(a - b)},
    multiply: function(a, b) {return(a * b)},
    divide: function(a, b) {return(a / b)},
}

keys.addEventListener("click", e => {
    if(e.target.matches('button')){
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        // const displayedNum = display.textContent;
        
        if(!action){
            // if(displayedNum === '0'){
            //     display.textContent = keyContent;
            // }else{
            //     display.textContent += keyContent;
            // }
            console.log("number");
        }
        // if(action === 'decimal'){
        //     display.textContent += '.'
        // }
        // if (
        //     action === 'add' ||
        //     action === 'subtract' ||
        //     action === 'multiply' ||
        //     action === 'divide'
        //   ) {
        //     key.classList.add("is-depressed");
        //     calculator.dataset.previousKeyType = 'operator';
        //   }

        //   Array.from(key.parentNode.children).forEach(k => k.classList.remove("is-depressed"));
        //   if (action === 'decimal') {
        //     console.log('decimal key!')
        //   }
          
        //   if (action === 'clear') {
        //     console.log('clear key!')
        //   }
          
        //   if (action === 'calculate') {
        //     console.log('equal key!')
        //   }
    }
})