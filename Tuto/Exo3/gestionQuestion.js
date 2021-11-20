var questionnaireChat =  require("./questionnaire.json");

function afficherUneQuestion(question) {
    console.log(question.desc);
}

afficherUneQuestion(questionnaireChat.question3);