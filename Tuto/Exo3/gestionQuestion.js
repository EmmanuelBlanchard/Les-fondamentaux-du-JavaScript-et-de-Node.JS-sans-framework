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
    },
    genererQuestionAleatoire(questionnaire) {
        var numeroQuestionAleatoire = Math.floor(Math.random() * this.retourneNombreQuestionsDuQuestionnaire(questionnaire) +1);
        this.afficherUneQuestion(questionnaire["question"+numeroQuestionAleatoire]);
    }
}
module.exports = questionnaire;
