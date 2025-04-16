const display = document.getElementById('display');

function addNumber(number)
{
    if (display.textContent.length < 9) // Keep number on display below 10 digits so it can fit
    {
        if (display.textContent.includes("."))
        {
            let existingDecimalPlaces = display.textContent.split('.')[1].length; // Count existing number of digits after decimal place
            display.textContent = (parseFloat(display.textContent) + number/(Math.pow(10,existingDecimalPlaces+1))).toFixed(existingDecimalPlaces+1);
            // Divide the new number by the correct factor of 10 to append it to the end of the decimal
            // Fix number of decimal places to handle float behaviour
        }
        else
        {
            display.textContent = display.textContent*10 + number;
            // Shift existing number on display to the left by multiplying by 10 and add the new number on the end
        }
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
    if (display.textContent.includes("."))
    {
        if (display.textContent.slice(-1) == "." ) // If last character is decimal, remove it
        {
            display.textContent = display.textContent.slice(0,-1);
        }
        else // Last character is a digit
        {
            let existingDecimalPlaces = display.textContent.split('.')[1].length; // Count existing number of digits after decimal place
            display.textContent = (display.textContent - ( (display.textContent.slice(-1)) / Math.pow(10,existingDecimalPlaces) )).toFixed(existingDecimalPlaces-1);
            // Subtract decimal number by last digit reduced to its own decimal by raising to correct power
            // Fix number of decimal places to handle float behaviour

            if (existingDecimalPlaces == 1) // If removing last digit after decimal point
            {
                display.textContent = display.textContent + "."; // Retain the decimal point
            }
        }
    }
    else
    {
        display.textContent = (display.textContent-display.textContent.slice(-1))/10;
        // Subtract number by last digit and divide by 10 to remove last digit
    }
}


// Button events

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

const invertButton = document.getElementById('invert-button');
invertButton.addEventListener('click', event => display.textContent = -1 * display.textContent);

const deleteButton = document.getElementById('delete-button');
deleteButton.addEventListener('click', event => deleteNumber());

// const percentButton = document.getElementById('percent-button');
// percentButton.addEventListener('click', event => divide(display.textContent,100));