let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let buttonsArray = Array.from(buttons);
let string = '';

buttonsArray.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == 'DEL') {
            string = string.slice(0, -1);
            display.value = string;
        } else if (e.target.innerHTML == 'AC') {
            string = '';
            display.value = string;
        } else if (e.target.innerHTML === '=') {
            try {
                string = eval(string);
                if (isNaN(string) || !isFinite(string)) {
                    throw new Error('Invalid calculation');
                }
                display.value = string;
            } catch (error) {
                display.value = 'Error';
                string = '';
            }
        } else if (e.target.innerHTML == '%') {
            if (string !== '') {
                string = (parseFloat(string) / 100).toString();
                display.value = string;
            }
        } else {
            string += e.target.innerHTML;
            display.value = string;
        }
    });
});
