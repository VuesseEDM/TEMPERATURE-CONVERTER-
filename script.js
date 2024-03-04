// Funzione che si attiva quando la finestra è completamente caricata
window.onload = function () {
  // Avvio dell'audio
  const musica = document.getElementById("musica");
  musica.play().catch(function (error) {
    console.error('Impossibile riprodurre l\'audio automaticamente:', error);
  });
}

const textBox = document.getElementById('textBox');
const toFarenait = document.getElementById('toFarenait');
const toCelsius = document.getElementById('toCelsius');
const result = document.getElementById('result');

let temp;

function convert() {
  if (toFarenait.checked) {
    temp = Number(textBox.value);
    temp = temp * 9 / 5 + 32;
    result.textContent = temp.toFixed(1) + "°F";
  } else if (toCelsius.checked) {
    temp = Number(textBox.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp.toFixed(1) + '°C';
  } else {
    result.textContent = 'SELECT A UNIT';
    submitButton.classList.add('shake');
    setTimeout(function () {
      submitButton.classList.remove('shake');
    }, 400);
  }
}
