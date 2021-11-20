var joueur = require("./joueur");
var templateEnnemi = require("./ennemi");

joueur.afficherMonJoueur();
joueur.levelUp();
joueur.afficherMonJoueur();

var tableauEnnemis = []
var tortue1 = templateEnnemi.creerTortue();
tableauEnnemis.push(tortue1);
var tortue2 = templateEnnemi.creerTortue();
tableauEnnemis.push(tortue2);
var tortue3 = templateEnnemi.creerTortue();
tableauEnnemis.push(tortue3);

var crabe1 = templateEnnemi.creerCrabe();
var crabe2 = templateEnnemi.creerCrabe();
tableauEnnemis.push(crabe1, crabe2);

function afficherEnnemis() {
    for(var i = 0 ; i < tableauEnnemis.length ; i++) {
        tableauEnnemis[i].afficherEnnemi();
    }
}

afficherEnnemis();

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