function insert(num) {
    var numero = document.querySelector('p').innerText;
    document.querySelector('p').innerText = numero + num;
}

function clearDisplay() {
    document.querySelector('p').innerText = '';
}

function backspace() {
    var numero = document.querySelector('p').innerText;
    document.querySelector('p').innerText = numero.slice(0, -1);
}

function calculate() {
    var resultado = document.querySelector('p').innerText;
    document.querySelector('p').innerText = eval(resultado);

}

