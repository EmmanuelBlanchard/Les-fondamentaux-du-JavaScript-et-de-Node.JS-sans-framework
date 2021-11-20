var joueur = require("./joueur");
var templateEnnemi = require("./ennemi");

var tableauEnnemis = []
var tortue1 = templateEnnemi.creerTortue();
var tortue2 = templateEnnemi.creerTortue();
var tortue3 = templateEnnemi.creerTortue();
var crabe1 = templateEnnemi.creerCrabe();
var crabe2 = templateEnnemi.creerCrabe();
tableauEnnemis.push(crabe1, crabe2, tortue1, tortue2, tortue3);

var ennemiAleatoire = retournerEnnemiAleatoire();

ennemiAleatoire.afficherEnnemi();

function afficherEnnemis() {
    for(var i = 0 ; i < tableauEnnemis.length ; i++) {
        tableauEnnemis[i].afficherEnnemi();
    }
}

function retournerEnnemiAleatoire() {
    var numeroEnnemiAleatoire = Math.floor(Math.random() * tableauEnnemis.length);
    return tableauEnnemis[numeroEnnemiAleatoire];
}

// afficherInformationsJoueur(joueur);

// function afficherInformationsJoueur(j) {
//     for(var propriete in j) {
//         if(typeof(j[propriete]) !== "object") {
//             console.log(propriete + " : " + j[propriete]);
//         } else {
//             afficherInformationsJoueur(j[propriete]);
//         }
//     }
// }