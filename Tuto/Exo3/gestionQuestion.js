var boiteOutils = require("./boiteOutils");

var questionnaire = {
    questionUtilise : [],

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
        var numeroQuestionAleatoire = 0;
        do {
            numeroQuestionAleatoire = boiteOutils.genererChiffreAleatoire(1,this.retourneNombreQuestionsDuQuestionnaire(questionnaire)+1);
        } while(this.estQuestionUtiliser(numeroQuestionAleatoire));
        this.questionUtilise.push(numeroQuestionAleatoire);
        return questionnaire["question"+numeroQuestionAleatoire];

    },
    estQuestionUtiliser : function (numeroQuestion) {
        for(var i = 0 ; i < this.questionUtilise.length ; i++) {
            if(numeroQuestion === this.questionUtilise[i]) {
                return true;
            }
        }
        return false;
    },
    verifierQuestionnaireVide : function(questionnaire) {
        return this.questionUtilise.length === this.retourneNombreQuestionsDuQuestionnaire(questionnaire);
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
    },
    retourneNombrePoints(question) {
        if(question.difficulte === "facile") {
            return 1;
        } else if (question.difficulte === "moyenne") {
            return 3;
        } else {
            return 5;
        }
    }
}
module.exports = questionnaire;
