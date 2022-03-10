const numBtn = document.querySelectorAll('.num-btn');
const display = document.getElementById('display');

numBtn.forEach(num => {
    num.addEventListener('click', function clickNum() {
        display.innerHTML += num.innerHTML;
    });
})

//clicking on number displays number
//function clickNum (){
 //   Array.from(numBtn).forEach(function (num) {
//        let numDisplay = display.innerHTML
//        num.onclick = function() {
 //           display.innerHTML += num.innerHTML;
 //       }
 //   })
//};
//clickNum();


const add = function (num1, num2) {
    const total = num1 + num2;
    return total;
}

console.log(add(5, 7));

const subtract = function (num1, num2) {
    const total = num1 - num2;
    return total;
}

console.log(subtract(5, 7));

const divide = function (num1, num2) {
    const total = num1 / num2;
    return total;
}

console.log(divide(5, 7));

const multiply = function (num1, num2) {
    const total = num1 * num2;
    return total;
}

console.log(multiply(5, 7));


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