let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.red');
let counterPlusElem = document.querySelector('.green');

let count = 0;

updateDisplay();

counterPlusElem.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

counterMinusElem.addEventListener("click",()=>{
    count--;
    updateDisplay();
});

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};
