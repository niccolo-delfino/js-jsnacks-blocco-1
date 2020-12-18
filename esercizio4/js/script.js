// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
var numero1 = parseInt(prompt('Inserisci il primo numero'));
var numero2 = parseInt(prompt('Inserisci il secondo numero'));


if (numero1 > numero2) {
  console.log(numero1 + ' è il numero più alto');
} else if (numero1 < numero2) {
  console.log(numero2 + ' è il numero più alto')
} else {
  console.log('I numeri sono uguali.');
}
