var numeroagora = document.getElementById('numero');
var numero = 0;

function increment() {
    numero = numero + 1;
    numeroagora.innerHTML = numero;
}

function decrement() {
    numero = numero - 1;
    numeroagora.innerHTML = numero;
}