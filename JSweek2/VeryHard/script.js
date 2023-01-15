const add = function (num1, num2) {
    return num1 + num2;
};
const subtract = function (num1, num2) {
    return num1 - num2;
};
const multiply = function (num1, num2) {
    return (num1 * num2);
};
const divide = function (num1, num2) {
    return (num1 / num2);
};

const number1 = Number(prompt("What is your first number?"));
const operator = prompt("What is your operator?");
const number2 = Number(prompt("What is your second number?"));

const checkOperator = function (operator, number1, number2) {
    if (operator === "+") {
        return add(number1, number2);
    } else if (operator === "-") {
        subtract(number1, number2);
        return subtract(number1, number2);
    } else if (operator === "*") {
        multiply(number1, number2);
        return multiply(number1, number2);
    } else if (operator === "/") {
        divide(number1, number2);
        return divide(number1, number2);
    } else {
        alert("You didnt put a valid operator");
    }
};

console.log(
    `${number1} ${operator} ${number2} = ${checkOperator(
        operator,
        number1,
        number2
    )}`
);