var nome = prompt('Inserisci qui il tuo nome');
var nomi = ['Davide', 'Emanuele', 'Cristiano', 'Giacomo', 'Yuri', 'Marco', 'Alex'];

var messaggio = false

for (var i = 0; i < nomi.length; i++) {
  if (nome == nomi[i]){
    messaggio = true;
  }
}

if (messaggio) {
  console.log('Puoi partecipare');
} else {
  console.log('Non puoi partecipare');
}
