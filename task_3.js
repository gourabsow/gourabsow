function addToDisplay(value) {
    document.getElementById('display').innerHTML += value;
}

function clearDisplay() {
    document.getElementById('display').innerHTML = '';
}

function calculate() {
    var expression = document.getElementById('display').innerHTML;
    var result = eval(expression);
    document.getElementById('display').innerHTML = result;
}
