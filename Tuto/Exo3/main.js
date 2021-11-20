var questionnaireChat =  require("./questionnaire.json");
var gestionQuestion =  require("./gestionQuestion");

var isGameOver = false;
while(!isGameOver) {
    var question = gestionQuestion.genererQuestionAleatoire(questionnaireChat);
    gestionQuestion.afficherUneQuestion(question);
    var reponse = gestionQuestion.saisirReponse();
    var isBonneReponse = gestionQuestion.estBonneReponse(question,reponse);
    if(isBonneReponse) {
        console.log("C'est une bonne reponse");
    } else {
        console.log("C'est une mauvaise reponse");
        isGameOver = true;
    }
}
