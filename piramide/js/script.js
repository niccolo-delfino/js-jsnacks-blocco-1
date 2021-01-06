// 3. Realizzare (utilizzando i cicli for) una piramide di asterischi come questa:
//      *
//     ***
//    *****
//   *******
//  *********
// ***********

var altezza = 6;
var piramide = "";
// ciclo esterno
for (var i = 1; i <= altezza; i++) {
  // spazi
  for (var j = altezza; j > i; j--) {
    piramide += " ";
  }
  // asterischi
  for (var k = 0; k < i * 2 - 1; k++) {
    piramide += "*";
  }
  piramide += "\n";
}
console.log(piramide);
