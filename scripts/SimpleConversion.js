document.addEventListener("DOMContentLoaded", function() {
    const valueInput = document.getElementById("value");
    const conversionSelect = document.getElementById("conversion");
    const resultPara = document.getElementById("result");
    const convertBtn = document.getElementById("convertBtn");
    const clearBtn = document.getElementById("clearBtn");

    convertBtn.onclick = function() {
        const value = parseFloat(valueInput.value);
        if (isNaN(value)) {
            resultPara.textContent = "Please enter a valid number.";
            return;
        }

        let result = "";
        switch(conversionSelect.value) {
            case "FtoC": result = ((value-32)*5/9).toFixed(2) + " °C"; break;
            case "CtoF": result = ((value*9/5)+32).toFixed(2) + " °F"; break;
            case "MtoFt": result = (value*3.28084).toFixed(2) + " ft"; break;
            case "FtoM": result = (value/3.28084).toFixed(2) + " m"; break;
        }
        resultPara.textContent = result;
    };

    clearBtn.onclick = function() {
        valueInput.value = "";
        resultPara.textContent = "";
        conversionSelect.selectedIndex = 0;
    };
});
