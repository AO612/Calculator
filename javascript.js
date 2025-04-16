const display = document.getElementById('display');

// Store some variables in an object
const calculatorObject =
{
    firstNumber : 0,
    previousAnswer : 0,
    operator : 0,
    state : 0,  // state: 0 = initial, 1 = entering first number, 2 = operator button pressed
}               // 3 = entering second number, 4 = result calculated and shown

function updateDisplay(number)
{
    if (display.textContent == "0") // If zero on the display, replace it with the new digit
    {
        display.textContent = number.toString();
    }
    else // There is a non-zero number on the display
    {
        if (display.textContent.length < 9) // Keep number on display below 10 digits so it can fit
        {
            display.textContent = display.textContent + number.toString(); // Add the new digit
        }
    }
}

function addNumber(number)
{
    if (calculatorObject.state == 0)
    {
        calculatorObject.state = 1; // Change state out of initial state
        updateDisplay(number);
        resetButtons();
    }
    else if (calculatorObject.state == 1)
    {
        updateDisplay(number);
    }
    else if (calculatorObject.state == 2) // Inputting a second number for a calculation resets the display
    {
        display.textContent = number.toString();
        calculatorObject.state = 3;
    }
    else if (calculatorObject.state == 3)
        {
            updateDisplay(number);
        }
    else if (calculatorObject.state == 4) // Inputting a new number after a calculation result resets the display
    {
        display.textContent = number.toString();
        calculatorObject.state = 0;
    }
}

function addDecimalPoint()
{
    if (display.textContent.length < 9) // Keep number on display below 10 digits so it can fit
    {
        if (display.textContent.includes(".") == false) // Only add a decimal point if one doesnt already exist
        {
            display.textContent = display.textContent + ".";
        }
    }
}

function deleteNumber()
{
    display.textContent = display.textContent.slice(0,-1); // Remove last digit
    if (display.textContent == "")
    {
        display.textContent = 0;
    }
}

function resetButtons()
{
    const buttons = document.querySelectorAll(".function-button");
    for (let i = 0; i < buttons.length; i++)
    {
        buttons[i].style.backgroundColor = "orange";
    }
}

function setOperation(event, operationString)
{
    if (calculatorObject.state == 1)
    {
        resetButtons();
        event.target.style.backgroundColor = "gold";
        calculatorObject.operator = operationString;
        calculatorObject.firstNumber = display.textContent; // Store first number
        calculatorObject.state = 2;
    }
    else if (calculatorObject.state == 2)
    {
        resetButtons();
        event.target.style.backgroundColor = "gold";
        calculatorObject.operator = operationString;
    }
    else if (calculatorObject.state == 3)
    {
        resetButtons();
        event.target.style.backgroundColor = "gold";
        calculatorObject.operator = operationString;
    }
}

function Calculate()
{
    console.log(calculatorObject.state)
    if (calculatorObject.state == 3)
    {
        if (calculatorObject.operator == "plus")
        {
            display.textContent = Number(calculatorObject.firstNumber) + Number(display.textContent);
        }
        else if (calculatorObject.operator == "minus")
        {
            display.textContent = Number(calculatorObject.firstNumber) - Number(display.textContent);
        }
        else
        {
            if (calculatorObject.operator == "multiply")
            {
                display.textContent = Number(calculatorObject.firstNumber) * Number(display.textContent);
            }
            else if (calculatorObject.operator == "divide")
            {
                if (display.textContent == "0")
                {
                    display.textContent = "DON\'T"
                }
                else
                {
                    display.textContent = Number(calculatorObject.firstNumber) / Number(display.textContent);
                }
            }
            if (display.textContent.includes("."))
            {
                display.textContent = parseFloat(display.textContent).toFixed(2);
            }
        }
    } 
    calculatorObject.state = 4;
    calculatorObject.previousAnswer = display.textContent;
    resetButtons();
}

function Clear()
{
    display.textContent = 0;
    calculatorObject.state = 0;
    calculatorObject.firstNumber = 0;
    calculatorObject.previousAnswer = 0;
    calculatorObject.operator = 0;
    resetButtons();
}

// Button events

const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', event => Clear());

const nineButton = document.getElementById('nine-button');
nineButton.addEventListener('click', event => addNumber(9));

const eightButton = document.getElementById('eight-button');
eightButton.addEventListener('click', event => addNumber(8));

const sevenButton = document.getElementById('seven-button');
sevenButton.addEventListener('click', event => addNumber(7));

const sixButton = document.getElementById('six-button');
sixButton.addEventListener('click', event => addNumber(6));

const fiveButton = document.getElementById('five-button');
fiveButton.addEventListener('click', event => addNumber(5));

const fourButton = document.getElementById('four-button');
fourButton.addEventListener('click', event => addNumber(4));

const threeButton = document.getElementById('three-button');
threeButton.addEventListener('click', event => addNumber(3));

const twoButton = document.getElementById('two-button');
twoButton.addEventListener('click', event => addNumber(2));

const oneButton = document.getElementById('one-button');
oneButton.addEventListener('click', event => addNumber(1));

const zeroButton = document.getElementById('zero-button');
zeroButton.addEventListener('click', event => addNumber(0));

const pointButton = document.getElementById('point-button');
pointButton.addEventListener('click', event => addDecimalPoint());

const invertButton = document.getElementById('invert-button');
invertButton.addEventListener('click', event => display.textContent = display.textContent.slice(-1) == "." ? -1 * display.textContent + "." : -1 * display.textContent);
// Invert number by multiplying by -1, retain decimal point at end of number if present

const deleteButton = document.getElementById('delete-button');
deleteButton.addEventListener('click', event => deleteNumber());

const plusButton = document.getElementById('plus-button');
plusButton.addEventListener('click', event => setOperation(event,"plus"));

const minusButton = document.getElementById('minus-button');
minusButton.addEventListener('click', event => setOperation(event,"minus"));

const multiplyButton = document.getElementById('multiply-button');
multiplyButton.addEventListener('click', event => setOperation(event,"multiply"));

const divideButton = document.getElementById('divide-button');
divideButton.addEventListener('click', event => setOperation(event,"divide"));

const equalButton = document.getElementById('equal-button');
equalButton.addEventListener('click', event => Calculate());

// const percentButton = document.getElementById('percent-button');
// percentButton.addEventListener('click', event => divide(display.textContent,100));