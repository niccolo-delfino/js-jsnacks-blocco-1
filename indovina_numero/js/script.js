// Occorre indovinare un numero casuale compreso tra 1 e 100, generato dal computer.
// Il giocatore ha a disposizione 4 tentativi. Quando sbaglia gli verrà detto se il numero da indovinare è più alto oppure più basso.
// Bonus: provate 3 livelli di complessità

var numeroDaIndovinare = 0;
var max = 0;
var min = 1;
var tentativi = 4;

function scegliDifficolta() {
  var input = prompt('Scegli la difficoltà tra \n0 - 1 - 2');
  switch (input) {
    case '0':
      max = 100;
      break;
    case '1':
      max = 150;
      break;
    case '2':
      max = 200;
      break;
    default:
      alert('Difficoltà non valida! \nSelezionata difficoltà 0 di default!');
  }
}

function generaNumero() {
  numeroDaIndovinare = Math.floor(Math.random() * (max - min + 1) ) + min;
}

function indovina() {
  var vittoria = false;
  for (var i = 0; i < tentativi && vittoria == false; i++) {
    var numeroUtente = parseInt(prompt('Scegli un numero \ntra 1 e 100!'));
    if (numeroUtente == numeroDaIndovinare) {
      vittoria = true
    } else if (numeroUtente > numeroDaIndovinare && i < tentativi - 1) {
      alert('Inserisci un numero più basso!!');
    } else if (numeroUtente < numeroDaIndovinare && i < tentativi - 1){
      alert('Inserisci un numero più alto!!');
    }
  }
  if (vittoria == true) {
    alert('Hai vinto!!!');
  } else {
    alert('Hai perso!!!');
  }

}

scegliDifficolta();
generaNumero();
console.log(numeroDaIndovinare);
indovina();
