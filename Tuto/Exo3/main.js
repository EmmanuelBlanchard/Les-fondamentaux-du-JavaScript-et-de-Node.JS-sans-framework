var questionnaireChat =  require("./questionnaire.json");
var gestionQuestion =  require("./gestionQuestion");

var question = gestionQuestion.genererQuestionAleatoire(questionnaireChat);

gestionQuestion.afficherUneQuestion(question);
var reponse = gestionQuestion.saisirReponse();
var bool = gestionQuestion.estBonneReponse(question,reponse);
console.log(bool);