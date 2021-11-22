var questionnaire = {
    chat : "questionnaireChat.json",
    chien : "questionnaireChien.json",

    afficherQuestionnaire : function() {
        var texte = "";
        for(var propriete in this) {
            if(typeof(this[propriete]) !== "function") {
                texte += propriete + " - ";
            }
        }
        console.log(texte);
    }
}
questionnaire.afficherQuestionnaire();

module.exports = questionnaire;