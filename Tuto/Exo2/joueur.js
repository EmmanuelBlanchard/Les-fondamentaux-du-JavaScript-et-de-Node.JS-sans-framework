var joueur = {
    nom : "Wawa",
    description : "Le meilleur des guerrier",
    force : 5,
    agilite : 3,
    intelligence : 2,
}

// console.log(joueur.nom);
// console.log(joueur.description);
// console.log(joueur.force);
// console.log(joueur.agilite);
// console.log(joueur.intelligence);

afficherInformationsJoueur(joueur);

function afficherInformationsJoueur(j) {
    for(var propriete in j) {
        console.log(propriete + " : " + j[propriete]);
    }
}
