
//Juegito de adivinar el numerooo///
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

let intentos = 0;

function adivinarNumero() {
const guess = parseInt(document.getElementById('guess').value);
intentos++;
if (guess === numeroSecreto) {
document.getElementById('message').innerHTML = `¡Felicidades! Adivinaste el número ${numeroSecreto} en ${intentos} intentos.`;
} else if (guess < numeroSecreto) {
document.getElementById('message').innerHTML = 'El número es mayor. Intenta de nuevo.';
} else {
document.getElementById('message').innerHTML = 'El número es menor. Intenta de nuevo.';
    }
}