var boiteOutils = require("./boiteOutils");

var questionnaire = {
    afficherUneQuestion : function(question) {
        var texte = "";
        texte += question.desc + "\n";
        texte += "A : " + question.reponseA + "\n";
        texte += "B : " + question.reponseB + "\n";
        texte += "C : " + question.reponseC + "\n";
        texte += "D : " + question.reponseD + "\n";
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
        var numeroQuestionAleatoire = boiteOutils.genererChiffreAleatoire(1,this.retourneNombreQuestionsDuQuestionnaire(questionnaire));
        return questionnaire["question"+numeroQuestionAleatoire];
    },
    saisirReponse() {
        return boiteOutils.saisirUneChaine("Quelle est votre reponse (A - B - C - D) ? ");
    },
    estBonneReponse(question, reponse) {
        if(reponse === question.bonneReponse) {
            return true;
        } else {
            return false;
        }
    }
}
module.exports = questionnaire;
