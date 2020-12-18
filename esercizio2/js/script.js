var tuttiNumeri = []

for (var i = 0; i < 6; i++) {
  var numero = parseInt(prompt('Inserisci qui un numero'));
  if (numero%2 != 0) {
    tuttiNumeri.push(numero)
  }
}

console.log(tuttiNumeri);
