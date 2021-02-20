function basicOp(operator, num1, num2) {
    var total = 0;
    if (operator === "+")
        total = num1 + num2;
    else
    if (operator === "-")
        total = num1 - num2;
    else
    if (operator === "/")
        total = num1 / num2;
    else
    if (operator === "*")
        total = num1 * num2;
    else console.log(" use only +,-,*,/")

    return total;
}

console.log(basicOp("/", 4, 5))