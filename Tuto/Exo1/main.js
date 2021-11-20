/**
 * Variables
 */
var readline = require("readline-sync");

var joueur1 = {
    nom : "Toto",
    age : 28,
    estunHomme : true
}
var joueur2 = {
    nom : "Tata",
    age : 23,
    estunHomme : false
}

const SEPARATEUR = "-";


/**
 * Main
 */
var choixMenu = 0;
while (choixMenu !== 9) {
    afficherMenu();
    var choixMenu = saisirEntierQuestion("Quel est votre choix ? ");

    switch(choixMenu) {
        case 1: afficherLesJoueursDuJeu();
        break;
        case 2: afficherComparaisonAgeDesDeuxJoueurs();
        break;
        case 3: afficherDifferenceAgeJoueurs();
        break;
        case 9: console.log("A bientôt");
        break;
        default: console.log("Cas non traité");
        break;
    }
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

function saisirEntierQuestion(question) {
    return parseInt(readline.question(question));
}

function afficherLesJoueursDuJeu() {
    afficherLigneSeparation(SEPARATEUR);
    afficherJoueur1();
    afficherLigneSeparation(SEPARATEUR);
    afficherJoueur2();
    afficherLigneSeparation(SEPARATEUR);
}

function afficherComparaisonAgeDesDeuxJoueurs() {

}

function afficherJoueur1() {
    console.log("Nom du joueur 1 : " + joueur1.nom);
    console.log("Age du joueur 1 : " + joueur1.age);
    afficherLeGenre(joueur1.estunHomme);
}

function afficherJoueur2() {
    console.log("%s est le nom du joueur 2", joueur2.nom);
    console.log("%d est l'age du joueur 2", joueur2.age);
    afficherLeGenre(joueur2.estunHomme);
}

function afficherComparaisonAgeDesDeuxJoueurs() {
    afficherLigneSeparation(SEPARATEUR);
    if(joueur1.age > joueur2.age) { // Le joueur 1 est strictement plus age
        console.log("Le joueur 1 est le plus age")
    } else if (joueur2.age > joueur1.age) { // Le joueur 2 est strictement plus age
        console.log("Le joueur 2 est le plus age")
    } else { // valeur égale pour joueur 1 et joueur 2
        console.log("Les joueurs ont le même age")
    }
    afficherLigneSeparation(SEPARATEUR);
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
    var differenceAge = joueur1.age - joueur2.age;
    if(differenceAge < 0) {
        differenceAge = -differenceAge;
    }
    return differenceAge;
}

function afficherDifferenceAgeJoueurs() {
    afficherLigneSeparation(SEPARATEUR);
    var differenceAgeJoueurs = calculDifferenceAgeJoueurs();
    console.log("La différence d'age entre les deux joueurs est de : " + differenceAgeJoueurs + " ans");
    afficherLigneSeparation(SEPARATEUR);
}