var readline = require("readline-sync");

var boiteOutils = {
    saisirUneChaine : function(question) {
        return readline.question(question);
    },
    genererChiffreAleatoire : function(min,max) {
        return Math.floor(Math.random() * (max-min) +min);
    }
}

module.exports = boiteOutils;