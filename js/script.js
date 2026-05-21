const mais = document.getElementById('mais');
const menos = document.getElementById('menos');
const res = document.getElementById('res');

const contadorHTML = document.getElementById('contador');

let contador = 0;

const substituirHTML = () => {
    contadorHTML.innerHTML = contador;
    return;
}

const adicionar = () => {
    contador += 1;
    substituirHTML();
    return;
}

const subtrair = () => {
    contador -= 1;
    substituirHTML();
    return;
}

const zerar = () => {
    contador = 0;
    substituirHTML();
    return;
}