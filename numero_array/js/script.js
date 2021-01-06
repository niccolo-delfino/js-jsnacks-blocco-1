// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

var numeriUtente = [0];
var gioco = true;

function somma(total, num) {
  return total + num;
}

while (gioco) {
  var sommaElementi = numeriUtente.reduce(somma);
  if (sommaElementi != 0) {
    alert('Al momento sei arrivato a :' + sommaElementi);
  }
  if (sommaElementi == 50) {
    gioco = false;
  } else {
    var chiediNumero = parseInt(prompt('Inserisci un numero positivo minore di 50'));
    if (chiediNumero > 0 &&
        chiediNumero < 50 &&
      chiediNumero + sommaElementi <= 50) {
      numeriUtente.push(chiediNumero);
    }else if (chiediNumero + sommaElementi > 50) {
      gioco = false;
    } else {
      alert('Inserisci un numero valido')
    }
  }

}

console.log(numeriUtente);
