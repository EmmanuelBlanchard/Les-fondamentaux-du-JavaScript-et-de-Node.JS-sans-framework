/**
 * Variables
 */
var nomDuJoueur1 = "Toto";
var ageDuJoueur1 = 25;
var estUnHommeJoueur1 = true;

var nomDuJoueur2 = "Tata";
var ageDuJoueur2 = 25;
var estUnHommeJoueur2 = false;

const SEPARATEUR = "-";


/**
 * Main
 */
afficherLesJoueurs();
comparerAgeDesDeuxJoueurs();

/**
 * Fonctions
 */
function afficherLesJoueurs() {
    afficherLigneSeparation(SEPARATEUR);

    console.log("Nom du joueur 1 : " + nomDuJoueur1);
    console.log("Age du joueur 1 : " + ageDuJoueur1);
    afficherLeGenre(estUnHommeJoueur1);

    afficherLigneSeparation(SEPARATEUR);

    console.log("%s est le nom du joueur 2", nomDuJoueur2);
    console.log("%d est l'age du joueur 2", ageDuJoueur2);
    afficherLeGenre(estUnHommeJoueur2);

    afficherLigneSeparation(SEPARATEUR);
}

function comparerAgeDesDeuxJoueurs() {
    if(ageDuJoueur1 > ageDuJoueur2) { // Le joueur 1 est strictement plus age
        console.log("Le joueur 1 est le plus age")
    } else if (ageDuJoueur2 > ageDuJoueur1) { // Le joueur 2 est strictement plus age
        console.log("Le joueur 2 est le plus age")
    } else { // valeur égale pour joueur 1 et joueur 2
        console.log("Les joueurs ont le même age")
    }
}

function afficherLeGenre(bool) {
    if(bool) {
        console.log("Le joueur est un homme");
    } else { // estUnHomme === false
        console.log("Le joueur est une femme");
    }
}

function afficherLigneSeparation(separateur) {
    var ligneSeparationText = ""
    for(var i = 0; i < 100; i++) {
        //ligneSeparationText = ligneSeparationText + "-";
        ligneSeparationText += separateur;
    }
    console.log(ligneSeparationText);
}