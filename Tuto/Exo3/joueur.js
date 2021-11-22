var fs = require("fs");
var joueursJSON = require("./joueurs.json");

var joueur = {
    nom : "",
    score : 0,
    scoreMax : 0,

    initialiserJoueur : function(nom) {
        this.nom = nom;
        this.score = 0;
        if(joueursJSON[nom] !== undefined) {
            this.scoreMax = joueursJSON[nom];
        }
    },

    afficherJoueur : function() {
        var texte = "";
        texte += "Nom : " + this.nom + "\n";
        texte += "Score : " + this.score + "\n";
        texte += "Score maximum : " + this.scoreMax + "\n";
        console.log(texte);
    },
    gagnerPoint : function() {
        this.score += 10;
    },
    sauvegardeJoueur : function() {
        if(joueursJSON[this.nom] < this.score || joueursJSON[this.nom] === undefined) {
            joueursJSON[this.nom] = this.score;
            fs.writeFileSync("joueurs.json", JSON.stringify(joueursJSON,undefined,4));
        }
    }
}
module.exports = joueur;