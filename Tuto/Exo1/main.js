/**
 * Variables
 */
var nomDuJoueur1 = "Toto";
var ageDuJoueur1 = 25;
var estUnHommeJoueur1 = true;

var nomDuJoueur2 = "Tata";
var ageDuJoueur2 = 25;
var estUnHommeJoueur2 = false;

/**
 * Main
 */
afficherLesJoueurs();
comparerAgeDesDeuxJoueurs();

/**
 * Fonctions
 */
function afficherLesJoueurs() {
    console.log("---------------------------------------");

    console.log("Nom du joueur 1 : " + nomDuJoueur1);
    console.log("Age du joueur 1 : " + ageDuJoueur1);
    if(estUnHommeJoueur1 === true) {
        console.log("Le joueur 1 est un homme");
    } else { // estUnHomme === false
        console.log("Le joueur 1 est une femme");
    }

    console.log("---------------------------------------");

    console.log("%s est le nom du joueur 2", nomDuJoueur2);
    console.log("%d est l'age du joueur 2", ageDuJoueur2);
    if(estUnHommeJoueur2 === true) {
        console.log("Le joueur 2 est un homme");
    } else { // estUnHomme === false
        console.log("Le joueur 2 est une femme");
    }

    console.log("---------------------------------------");
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