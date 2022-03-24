const numBtn = document.querySelectorAll('.num-btn');
const display = document.getElementById('display-num');

const addBtn = document.getElementById('add-btn');
const subtractBtn = document.getElementById('subtract-btn');
const multiplyBtn = document.getElementById('multiply-btn');
const divideBtn = document.getElementById('divide-btn');

const equalBtn = document.getElementById('equal-btn');
const clearBtn = document.getElementById('clear');
const backBtn = document.getElementById('delete');
const displayValue = display.innerHTML;

//display number after clicked
numBtn.forEach(num => {
    num.addEventListener('click', function clickNum() {
        if (numDisplayStored === 0) {
        display.innerHTML = num.innerHTML;
        } else {
            display.innerHTML += num.innerHTML;
        }
        numDisplayStored++
        currentNum = display.innerHTML;
        //console.log("this is the current num: " + currentNum);
        //console.log("this is the current num: " + previousNum);
    });
});

currentNum = "";
total = "";
numDisplayStored = 0;
prevNumStored = 1

//let sum = 1
//let num1 = display.innerHTML;
//let num2 = 0;
//let operator = "";
//let numDisplayStored = 0;

//

//stores first set of displayed numbers when clicking add btn
function addNums() {
    num1 = display.innerHTML;
    console.log(num1);
    operator = "+";
    display.innerHTML = "";
}
addBtn.addEventListener('click', addNums);

//stores first nums set when clicking subtract btn
function subtractNums() {
    num1 = display.innerHTML;
    display.innerHTML = "";
    operator = "-";
    console.log(num1);
}
subtractBtn.addEventListener('click', subtractNums);

//stores first nums set when clicking divide btn
function divideNums() {
    num1 = display.innerHTML;
    display.innerHTML = "";
    operator = "/";
    console.log(num1);
}
divideBtn.addEventListener('click', divideNums);

//stores first nums set when clicking multiply btn
function multiplyNums() {
//    operator = "*";
    numDisplayStored = 0;
    console.log("this is the total num: " + total)
    console.log("this is the current num:" + currentNum);
    total = currentNum;
}
multiplyBtn.addEventListener('click', multiplyNums);

//stores second set of numbers and calls operator function
function equals () {
   // display.innerHTML = "";
    num2 = display.innerHTML;
    console.log(num2);
    operate();
}
equalBtn.addEventListener('click', equals);


const add = function () {
    const total = parseFloat(num1) + parseFloat(num2);
    display.innerHTML = total
};

const subtract = function () {
    const total = parseFloat(num1) - parseInt(num2);
    display.innerHTML = total
};

function divide() {
    const total = parseFloat(num1) / parseFloat(num2);
    display.innerHTML = total
};

const multiply = function () {
    if (!(total === "")) {
   display.innerHTML = parseFloat(currentNum) * parseFloat(total);
    }
};

//checks which operator is clicked and calls its function
 function operate() {
    if (operator === '+') {
        add();
    } else if (operator === '-') {
        subtract();
    } else if (operator === '/') {
        divide();
    } else if (operator === '*') {
        multiply();
    }
};

//clears screen
function clear () {
    display.innerHTML = '';
    num1 = [];
}
clearBtn.addEventListener('click', clear);

//goes back one number
function back() {
    display.innerHTML = display.innerHTML.slice(0, -1);
}
backBtn.addEventListener('click', back);