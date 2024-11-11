let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {4
        if (e.target.innerHTML === '=') {
            try {
                string = eval(string.replace(/%/g, '/100')); // Handle percentage
                input.value = string;
            } catch {
                input.value = 'Error';
                string = '';
            }
        } else if (e.target.innerHTML === 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML === 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});

// Handle keyboard input
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if ('0123456789+-*/.%'.includes(key)) {
        string += key;
        input.value = string;
    } else if (key === 'Enter') {
        try {
            string = eval(string.replace(/%/g, '/100'));
            input.value = string;
        } catch {
            input.value = 'Error';
            string = '';
        }
    } else if (key === 'Backspace') {
        string = string.substring(0, string.length - 1);
        input.value = string;
    } else if (key === 'Escape') {
        string = '';
        input.value = string;
    }
});     
