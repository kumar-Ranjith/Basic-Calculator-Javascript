let defaultResult = 0;

let currentResult = defaultResult;
let desc = currentResult;

function getUserNumInput() {
    return parseInt(userInput.value);
}

/*
createOutput(operator, resultBeforeCalc, calcNumber)
{
    const desc = `${resultBeforeCalc} ${operator} ${calcNumber}`
}
*/

function add() {
    const num = getUserNumInput();
    desc = '(' + desc + '+'+ num +')';
    currentResult += num;
    outputResult(currentResult, desc);
}

function subtract() {
    const num = getUserNumInput();
    desc = '(' + desc + '-'+ num +')';
    currentResult -= num;
    outputResult(currentResult, desc);
}

function multiply() {
    const num = getUserNumInput();
    desc = '(' + desc + '*'+ num +')';
    currentResult *= num;
    outputResult(currentResult, desc);
}

function divide() {
    const num = getUserNumInput();
    desc = '(' + desc + '/'+ num +')';
    currentResult /= num;
    outputResult(currentResult, desc);
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click',subtract)
multiplyBtn.addEventListener('click',multiply)
divideBtn.addEventListener('click',divide)




