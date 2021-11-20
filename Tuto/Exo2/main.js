var readline = require("readline-sync");

var joueur = require("./joueur");
var templateEnnemi = require("./ennemi");

var tableauEnnemis = []
var tortue1 = templateEnnemi.creerTortue();
var tortue2 = templateEnnemi.creerTortue();
var tortue3 = templateEnnemi.creerTortue();
var crabe1 = templateEnnemi.creerCrabe();
var crabe2 = templateEnnemi.creerCrabe();
tableauEnnemis.push(crabe1, crabe2, tortue1, tortue2, tortue3);

// var ennemiAleatoire = retournerEnnemiAleatoire();
// ennemiAleatoire.afficherEnnemi();

var choixMenu = 0;
while (choixMenu !== 9) {
    afficherMenu();
    var choixMenu = parseInt(readline.question("Quel est votre choix ? "));

    switch(choixMenu) {
        case 1: joueur.afficherMonJoueur();
        break;
        case 2: afficherEnnemis();
        break;
        case 3: combattreEnnemi();
        break;
        case 9: console.log("A bientôt");
        break;
        default: console.log("Cas non traité");
        break;
    }
}

function afficherMenu() {
    var texteMenu = "";
    texteMenu += "1 - Afficher le joueur\n";
    texteMenu += "2 - Afficher la liste des ennemis\n";
    texteMenu += "3 - Combattre un ennemi\n";
    texteMenu += "9 - Quitter\n";
    console.log(texteMenu);
}

function afficherEnnemis() {
    for(var i = 0 ; i < tableauEnnemis.length ; i++) {
        tableauEnnemis[i].afficherEnnemi();
    }
}

function combattreEnnemi() {
    var ennemiAleatoire = retournerEnnemiAleatoire();
    ennemiAleatoire.afficherEnnemi();
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