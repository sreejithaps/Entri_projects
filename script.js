const display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
       // alert(error);
        display.value = 'Error';
    }
}
function calculateSquare() {
    try {
        display.value = eval(display.value) * eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }  
}         
function calculateCube() {
    try {      
        display.value = eval(display.value) * eval(display.value) * eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }       
}