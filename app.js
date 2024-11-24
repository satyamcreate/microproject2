 

let input = document.getElementById('screen');
let btn = document.querySelectorAll('button');

let result = "";
Array.from(btn).forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonValue = e.target.innerHTML; 

    
        if (['+', '-', 'x', '/'].includes(buttonValue)) {
        
            if (result === "" && buttonValue !== '-') {
                return;
            }

            if (['+', '-', 'x', '/'].includes(result[result.length - 1])) {
                return;
            }

            result += buttonValue;
            input.value = result;

        } else if (buttonValue === '=') {
        
            try {
                result = eval(result.replace(/x/g, '*'));
                input.value = result;
            } catch (error) {
                input.value = "Error";
                result = "";
            }
        } else if (buttonValue === 'RESET') {
        
            result = "";
            input.value = "0";
        } else if (buttonValue === 'DEL') {
        
            if (input.value !== "0" && input.value !== "") {
                result = result.slice(0, -1);
                input.value = result || "0";
            }
        } else {
        
            result += buttonValue;
            input.value = result;
        }
    });
});
