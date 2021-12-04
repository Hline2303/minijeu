//console.log("connecté !");
document.getElementById("titre").style.color = "green";

// Je sélectionne et je stocke
const btnRed = document.getElementById("btn-red");
//console.log(btnRed, "bouton rouge");
const btnBlue = document.getElementById("btn-blue");
// console.log(btnBlue, "bouton bleu");
const btnBlack = document.getElementById("btn-black");
// console.log(btnBlack, "bouton noir");
let compteur = 0;
console.log(compteur, "compteur au démarrage");
let titre = document.getElementById("titre");

// Je soumets le cercle rouge à une action
btnRed.addEventListener("click", function () {
  //console.log('cercle rouge cliqué');
  add();
});

// Je soumets le cercle bleu à une action
btnBlue.addEventListener("click", function () {
  // console.log("cercle bleu cliqué");
  add();
});

// Je soumets le cercle noir à une action
btnBlack.addEventListener("click", function () {
  // console.log("cercle noir cliqué");
  reduce();
});
// Incrémenter le compteur de 1
function add() {
  compteur = compteur + 1;
  //   console.log(compteur, "compteur après incrémentation");
  titre.innerText = compteur;
}

// Décrémenter le compteur de 1
function reduce() {
  compteur = compteur - 1;
  console.log(compteur, "compteur après décrémentation");
  titre.innerText = compteur;
}

// Chronomètre => setTimeout(fonction, délai);
setTimeout(function () {
  // action à réaliser
  // à la fin du délai
  // supprimer les cercles avec la méthode .remove()
  btnRed.remove();
  btnBlue.remove();
  btnBlack.remove();
}, 10000);

// Fonction avec paramètres
// function meteo(temps) {
//   console.log('le temps est' + ' ' + temps);
// }

////////////////////////////////////////////
// Portée des variables (scope)
// const globale = "Ceci est une variable globale";

// function scope(){
//   const locale = "Ceci est une variable locale";
//   console.log(locale, "depuis la fonction"); // accès
//   console.log(globale, "depuis la fonction");
// };
// Appel de la fonction
// scope();

// console.log(globale, "en dehors de la fonction"); // accès
// console.log(locale, "en dehors de la fonction"); // undefined
