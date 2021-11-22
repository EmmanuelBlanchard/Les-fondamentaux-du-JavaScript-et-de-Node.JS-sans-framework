var joueur = {
    nom : "Toto",
    score : 0,

    afficherJoueur : function() {
        var texte = "";
        texte += "Nom : " + this.nom + "\n";
        texte += "Score : " + this.score + "\n";
        console.log(texte);
    },
    gagnerPoint : function() {
        this.score += 10;
    }
}
module.exports = joueur;