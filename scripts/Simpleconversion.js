document.addEventListener('DOMContentLoaded', () => {
const valueInput = document.getElementById('value');
const conversionSelect = document.getElementById('conversion');
const resultParagraph = document.getElementById('result');
const convertBtn = document.getElementById('convertBtn');
const clearBtn = document.getElementById('clearBtn');

function convert() {
let value = parseFloat(valueInput.value);
if (isNaN(value)) {
resultParagraph.textContent = 'Please enter a valid number.';
return;
}
let result;
switch (conversionSelect.value) {
case 'FtoC':
result = ((value - 32) * 5/9).toFixed(2) + ' °C';
break;
case 'CtoF':
result = ((value * 9/5) + 32).toFixed(2) + ' °F';
break;
case 'MtoFt':
result = (value * 3.28084).toFixed(2) + ' ft';
break;
case 'FtoM':
result = (value / 3.28084).toFixed(2) + ' m';
break;
default:
result = 'Unknown conversion';
}
resultParagraph.textContent = `Result: ${result}`;
}

function clearFields() {
valueInput.value = '';
resultParagraph.textContent = '';
conversionSelect.selectedIndex = 0;
}

convertBtn.addEventListener('click', convert);
clearBtn.addEventListener('click', clearFields);
});
