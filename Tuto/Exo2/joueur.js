var joueur = {
    nom : "Wawa",
    description : "Le meilleur des guerrier",
    level : 1,
    pointsDeVie : 100,
    caractéristiques : {
        force : 5,
        agilite : 3,
        intelligence : 2,
    },
    afficherMonJoueur : function() {
        console.log("Nom : " + this.nom);
        console.log("Description : " + this.description);
        console.log("Niveau : " + this.level);
        console.log("Points de vie : " + this.pointsDeVie);
        console.log("Force : " + this.caractéristiques.force);
        console.log("Agilite : " + this.caractéristiques.agilite);
        console.log("Intelligence : " + this.caractéristiques.intelligence);
    },
    levelUp : function () {
        this.level ++;
        this.pointsDeVie += 10;
        this.caractéristiques.force += 2;
        this.caractéristiques.agilite ++;
    }
}
module.exports = joueur;
