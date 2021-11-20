var questionnaireChat =  require("./questionnaire.json");

var questionnaire = {
    afficherUneQuestion : function(question) {
        var texte = "";
        texte += question.desc + "\n";
        texte += question.reponseA + "\n";
        texte += question.reponseB + "\n";
        texte += question.reponseC + "\n";
        texte += question.reponseD + "\n";
        console.log(texte);
    },

    retourneNombreQuestionsDuQuestionnaire : function(questionnaire) {
        var nombreDeQuestion = 0;
        for( var question in questionnaire) {
            nombreDeQuestion++;
        }
        return nombreDeQuestion;
    }
}

questionnaire.afficherUneQuestion(questionnaireChat.question2);
var nombreDeQuestion = questionnaire.retourneNombreQuestionsDuQuestionnaire(questionnaireChat);
console.log("Le nombre de questions du questionnaire des chats est de : " + nombreDeQuestion);