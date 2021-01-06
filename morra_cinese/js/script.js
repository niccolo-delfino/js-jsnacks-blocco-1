// Realizziamo il gioco della morra cinese in JavaScript. Vince chi totalizza per primo 4 punti.
var puntiUtente = 0;
var puntiPc = 0;
var segnoPc = 'forbice';
var segnoUtente ;
var segniDisponibili = ['sasso', 'carta', 'forbice'];

function scegliSegno() {
  segnoUtente = prompt('Inserisci qui il segno, tra: \nsasso - carta -forbice');
  console.log(segnoUtente);
}

function generaSegno() {
  var numeriRandom = Math.floor(Math.random() * 3);
  segnoPc = segniDisponibili[numeriRandom]
  console.log(segnoPc);

}

function gioco() {
  while (puntiUtente < 4 && puntiPc < 4) {
    scegliSegno();
    generaSegno();

    switch (segnoUtente) {
      case 'sasso':
        if (segnoPc == 'sasso') {
          alert('Pari!')
        } else if (segnoPc == 'carta') {
          alert('Hai vinto il PC!')
          puntiPc += 1
        } else if (segnoPc == 'forbice') {
          alert('Ha vinto tu!')
          puntiUtente += 1
        }
        break;
      case 'carta':
        if (segnoPc == 'sasso') {
          alert('Ha vinto tu!')
          puntiUtente += 1
        } else if (segnoPc == 'carta') {
          alert('Pari!')
        }else if (segnoPc == 'forbice') {
          alert('Hai vinto il PC!')
          puntiPc += 1
        }
        break;
      case 'forbice':
        if (segnoPc == 'sasso') {
          alert('Hai vinto il PC!')
          puntiPc += 1
        } else if (segnoPc == 'forbice') {
          alert('Pari!')
        } else if (segnoPc == 'carta') {
          alert('Ha vinto tu!')
          puntiUtente += 1
        }
        break;
      default:
      alert('Non è una scelta valida! \nPunteggio attuale Tu: ' + puntiUtente + ' PC:' + puntiPc)

    }
    console.log(puntiUtente);
    console.log(puntiPc);
  }
  if (puntiUtente == 4) {
    alert('Hai totalizzato 4 punti! \nHai vinto!')
    console.log('Hai totalizzato 4 punti! \nHai vinto!');
  } else if (puntiPc == 4) {
    alert('Il PC ha totalizzato 4 punti! \nHai perso!')
    console.log('Il PC ha totalizzato 4 punti! \nHai perso!');
  }
}

gioco();
