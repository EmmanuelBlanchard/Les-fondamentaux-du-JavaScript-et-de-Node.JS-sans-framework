/**
 * Variables
 */
var readline = require("readline-sync");

var joueur1 = {
    nom : "Toto",
    age : 22,
    estunHomme : true
}

var joueur2 = {
    nom : "Tata",
    age : 23,
    estunHomme : false
}

var joueur3 = {
    nom : "Koko",
    age : 30,
    estunHomme : false
}

var tableauJoueurs = [joueur1,joueur2,joueur3];

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
        case 2: afficherComparaisonAgeDesDeuxJoueurs(tableauJoueurs[0],tableauJoueurs[2]);
        break;
        case 3: afficherDifferenceAgeJoueurs(tableauJoueurs[0],tableauJoueurs[2]);
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
    for(var i = 0 ; i <= tableauJoueurs.length - 1 ; i++) {
        afficherLigneSeparation(SEPARATEUR);
        afficherUnJoueur(tableauJoueurs[i]);
        afficherLigneSeparation(SEPARATEUR);
        // premier passage i = 0, tableauJoueurs[0] -> joueur1
        // deuxieme passage i = 1, tableauJoueurs[1] -> joueur2
        // troisieme passage i = 2, tableauJoueurs[2] -> joueur3
    }

    // afficherLigneSeparation(SEPARATEUR);
    // afficherUnJoueur(joueur1);
    // afficherLigneSeparation(SEPARATEUR);
    // afficherUnJoueur(joueur2);
    // afficherLigneSeparation(SEPARATEUR);
}

function afficherUnJoueur(unJoueur) {
    console.log("Nom du joueur : " + unJoueur.nom);
    console.log("Age du joueur : " + unJoueur.age);
    afficherLeGenre(unJoueur.estunHomme);
}

function afficherComparaisonAgeDesDeuxJoueurs(premierJoueur,deuxiemeJoueur) {
    afficherLigneSeparation(SEPARATEUR);
    if(premierJoueur.age > deuxiemeJoueur.age) { // Le joueur 1 est strictement plus age
        console.log("Le joueur est le plus age est : " + premierJoueur.nom);
    } else if (deuxiemeJoueur.age > premierJoueur.age) { // Le joueur 2 est strictement plus age
        console.log("Le joueur est le plus age est : " + deuxiemeJoueur.nom);
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

function calculDifferenceAgeJoueurs(premierJoueur,deuxiemeJoueur) {
    var differenceAge = premierJoueur.age - deuxiemeJoueur.age;
    if(differenceAge < 0) {
        differenceAge = -differenceAge;
    }
    return differenceAge;
}

function afficherDifferenceAgeJoueurs(premierJoueur,deuxiemeJoueur) {
    afficherLigneSeparation(SEPARATEUR);
    var differenceAgeJoueurs = calculDifferenceAgeJoueurs(premierJoueur,deuxiemeJoueur);
    console.log("La différence d'age entre les deux joueurs est de : " + differenceAgeJoueurs + " ans");
    afficherLigneSeparation(SEPARATEUR);
}