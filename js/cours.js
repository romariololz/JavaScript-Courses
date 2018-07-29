// console.log("Bonjour en JavaScript !");
// console.log("Faisons quelques calculs.");
// console.log(4 + 7);
// console.log(12 / 0);
// console.log("Concatenation de chaine");
// console.log("Conca"+"tenation"+" Example");
// console.log("Au revoir !");

var a = 3.14;
console.log("a = " + a);

var b = 0;
console.log("b = " + b);
b += 1;
console.log("b = " + b);
b++;
console.log("b = " + b);

var e = 3 + 2 * 4;
console.log("e = " + e);

e = (3 + 2) * 4;
console.log("e = " + e);

var h = "5";
console.log(h + 1); // Concaténation : affiche la chaîne "51"
h = Number("5");
console.log(h + 1); // Addition numérique : affiche le nombre 6

var prenom = prompt('Entrez votre pseudo');
alert("Bonjour" + prenom);