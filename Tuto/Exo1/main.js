/**
 * Variables
 */
var nomDuJoueur1 = "Toto";
var ageDuJoueur1 = 28;
var estUnHommeJoueur1 = true;

var nomDuJoueur2 = "Tata";
var ageDuJoueur2 = 23;
var estUnHommeJoueur2 = false;

const SEPARATEUR = "-";


/**
 * Main
 */
afficherMenu();
var choixMenu = 1;
switch(choixMenu) {
    case 1: afficherLigneSeparation(SEPARATEUR);
            afficherJoueur1();
            afficherLigneSeparation(SEPARATEUR);
            afficherJoueur2();
            afficherLigneSeparation(SEPARATEUR);
    break;
    case 2: afficherLigneSeparation(SEPARATEUR);
            afficherComparaisonAgeDesDeuxJoueurs();
            afficherLigneSeparation(SEPARATEUR);
    break;
    case 3: afficherLigneSeparation(SEPARATEUR);
            afficherDifferenceAgeJoueurs();
            afficherLigneSeparation(SEPARATEUR);
    break;
    case 9: console.log("A bientôt");
    break;
    default: console.log("Cas non traité");
    break;

}


/**
 * Fonctions
 */
function afficherMenu() {
    var texteMenu = "";
    texteMenu += "1 - Afficher les joueurs\n";
    texteMenu += "2 - Comparer les deux joueurs\n";
    texteMenu += "3 - Calculer la différence d'age\n";
    texteMenu += "9 - Quitter\n";
    console.log(texteMenu);
}
function afficherJoueur1() {
    console.log("Nom du joueur 1 : " + nomDuJoueur1);
    console.log("Age du joueur 1 : " + ageDuJoueur1);
    afficherLeGenre(estUnHommeJoueur1);
}

function afficherJoueur2() {
    console.log("%s est le nom du joueur 2", nomDuJoueur2);
    console.log("%d est l'age du joueur 2", ageDuJoueur2);
    afficherLeGenre(estUnHommeJoueur2);
}

function afficherComparaisonAgeDesDeuxJoueurs() {
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

function calculDifferenceAgeJoueurs() {
    var differenceAge = ageDuJoueur1 - ageDuJoueur2;
    if(differenceAge < 0) {
        differenceAge = -differenceAge;
    }
    return differenceAge;
}

function afficherDifferenceAgeJoueurs() {
    var differenceAgeJoueurs = calculDifferenceAgeJoueurs();
    console.log("La différence d'age entre les deux joueurs est de : " + differenceAgeJoueurs + " ans");
}