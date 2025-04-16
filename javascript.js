// Button events

const display = document.getElementById('display');

function addNumber(number)
{
    if (display.textContent.length < 9)
    {
        if (display.textContent.includes("."))
        {
            let existingDecimalPlaces = display.textContent.split('.')[1].length;
            display.textContent = (parseFloat(display.textContent) + number/(Math.pow(10,existingDecimalPlaces+1))).toFixed(existingDecimalPlaces+1);
        }
        else
        {
            display.textContent = display.textContent*10 + number;
        }
    }
}

function addDecimalPoint()
{
    if (display.textContent.length < 9)
    {
        if (display.textContent.includes(".") == false)
        {
            display.textContent = display.textContent + "."
        }
    }
}

const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', event => display.textContent = 0);

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