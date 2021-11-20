var joueur = {
    nom : "Wawa",
    description : "Le meilleur des guerrier",
    level : 1,
    caractéristiques : {
        force : 5,
        agilite : 3,
        intelligence : 2,
    },
    afficherMonJoueur : function() {
        console.log("Nom : " + this.nom);
        console.log("Description : " + this.description);
        console.log("Niveau : " + this.level);
        console.log("Force : " + this.caractéristiques.force);
        console.log("Agilite : " + this.caractéristiques.agilite);
        console.log("Intelligence : " + this.caractéristiques.intelligence);
    },
    levelUp : function () {
        this.level ++;
    }
}

joueur.afficherMonJoueur();
joueur.levelUp();
joueur.afficherMonJoueur();

// afficherInformationsJoueur(joueur);

// function afficherInformationsJoueur(j) {
//     for(var propriete in j) {
//         if(typeof(j[propriete]) !== "object") {
//             console.log(propriete + " : " + j[propriete]);
//         } else {
//             afficherInformationsJoueur(j[propriete]);
//         }
//     }
// }
