var questionnaire = selectionQuestionnaire();
var gestionQuestion =  require("./gestionQuestion");

var isGameOver = false;
while(!isGameOver) {
    var question = gestionQuestion.genererQuestionAleatoire(questionnaire);
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

function selectionQuestionnaire() {
    var numeroQuestionnaire = Math.floor(Math.random() * 2 +1);
    if(numeroQuestionnaire === 1) {
        return require("./questionnaireChien.json");
    } else if (numeroQuestionnaire === 2) {
        return require("./questionnaireChat.json");
    }
}