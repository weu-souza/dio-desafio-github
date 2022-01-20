let currentNumberWrapper = document.getElementById('currentNumber');
let subtrair = document.getElementById('subtrair');
let adicionar = document.getElementById('adicionar');
let currentNumber = 1;
currentNumberWrapper.innerHTML=currentNumber;

function increment(){
    if(currentNumber >= 9){
        adicionar.disabled = true;
        adicionar.style.color = '#000000';
        adicionar.style.border = '2px solid #D2D1D100';
        adicionar.style.backgroundColor = '#D2D1D1FF';
    } else if(!(currentNumber  > 0)) {
        subtrair.disabled = false;
        subtrair.style.color = '#F08080FF';
        subtrair.style.border = '2px solid #F08080FF';
    }
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML=currentNumber;
}
function decrement(){
    currentNumber = currentNumber -1;
    currentNumberWrapper.innerHTML=currentNumber;
    if(currentNumber <= 0){
        subtrair.disabled = true;
        subtrair.style.color = '#000000';
        subtrair.style.border = '2px solid #D2D1D100';
        subtrair.style.backgroundColor = '#D2D1D1FF';
    } else if(!(currentNumber  < 9)) {
        adicionar.disabled = false;
        adicionar.style.color = '#F08080FF';
        adicionar.style.border = '2px solid #F08080FF';
    }
}