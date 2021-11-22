var boiteOutils = require("./boiteOutils");
var gestionQuestionnaire = require("./gestionQuestionnaire");
var questionnaire = selectionQuestionnaire();
var gestionQuestion =  require("./gestionQuestion");
var joueur =  require("./joueur");
const { retourneNombrePoints } = require("./gestionQuestion");

var isGameOver = false;

var nomDuJoueur = boiteOutils.saisirUneChaine("Quel est votre nom ? ");

joueur.initialiserJoueur(nomDuJoueur);

joueur.afficherJoueur();

while(!isGameOver) {
    var question = gestionQuestion.genererQuestionAleatoire(questionnaire);
    gestionQuestion.afficherUneQuestion(question);
    var reponse = gestionQuestion.saisirReponse();
    var isBonneReponse = gestionQuestion.estBonneReponse(question,reponse);
    if(isBonneReponse) {
        var points = gestionQuestion.retourneNombrePoints(question);
        joueur.gagnerPoints(points);
        joueur.afficherJoueur();
        console.log("C'est une bonne reponse");
    } else {
        console.log("C'est une mauvaise reponse - vous avez perdu - Votre score final est de : " + joueur.score + " points");
        isGameOver = true;
    }
}
joueur.sauvegardeJoueur();

function selectionQuestionnaire() {
    gestionQuestionnaire.afficherQuestionnaire();
    var choixQuestionnaire = boiteOutils.saisirUneChaine("Quel est votre choix ?");
    return require("./questionnaires/"+ gestionQuestionnaire[choixQuestionnaire]);
}