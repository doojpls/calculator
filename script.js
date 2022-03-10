const numBtn = document.querySelectorAll('.num-btn');
const display = document.getElementById('display');
const divideBtn = document.getElementById('divide-btn');
const equalBtn = document.getElementById('equal-btn');

const displayValue = display.innerHTML;

//display number after clicked
numBtn.forEach(num => {
    num.addEventListener('click', function clickNum() {
        display.innerHTML += num.innerHTML;
    });
})
let num1 = [];
let num2 = [];

//stores first nums set when clicking divide btn
function divideNums() {
    num1.push(display.innerHTML);
    display.innerHTML = "";
    console.log(num1)
}
divideBtn.addEventListener('click', divideNums);

function equals () {
    num2.push(display.innerHTML);
    console.log(num2);
    total = num1 / num2;
    display.innerHTML = total;
}
equalBtn.addEventListener('click', equals);


const add = function (num1, num2) {
    const total = num1 + num2;
    return total;
};

const subtract = function (num1, num2) {
    const total = num1 - num2;
    return total;
};

const divide = function (num1, num2) {
    const total = num1 / num2;
    return total;
};

const multiply = function (num1, num2) {
    const total = num1 * num2;
    return total;
};


const operate = function (operator, num1, num2) {
    if (operator === 'add') {
        return add(num1, num2);
    } else if (operator === 'subtract') {
        return subtract(num1, num2);
    } else if (operator === 'divide') {
        return divide(num1, num2);
    } else if (operator === 'multiply') {
        return multiply(num1,num2);
    } else return "not a valid response";
};

console.log(operate('mult', 5, 8));