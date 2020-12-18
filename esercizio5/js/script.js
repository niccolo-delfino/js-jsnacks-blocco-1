// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

var parola1 = prompt('Inserisci la prima parola');
var parola2 = prompt('Inserisci la seconda parola');


if (parola1.length > parola2.length) {
  console.log(parola1 + ' è la parola più lunga');
}else if (parola1.length < parola2.length) {
  console.log(parola2 + ' è la parola più lunga')
} else {
  console.log('Le parole sono lunghe uguali')
}
