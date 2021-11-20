var joueur = {
    nom : "Wawa",
    description : "Le meilleur des guerrier",
    caractéristiques : {
        force : {
            description : {
                info : "test",
                valeur : "test2"
            },
            valeur : 25
        },
        agilite : 3,
        intelligence : 2,
    }
}

// console.log(joueur.nom);
// console.log(joueur.description);
// console.log(joueur.caractéristiques.force);
// console.log(joueur.caractéristiques.agilite);
// console.log(joueur.caractéristiques.intelligence);

afficherInformationsJoueur(joueur);

function afficherInformationsJoueur(j) {
    for(var propriete in j) {
        if(typeof(j[propriete]) !== "object") {
            console.log(propriete + " : " + j[propriete]);
        } else {
            afficherInformationsJoueur(j[propriete]);
            // for(var subPropriete in j[propriete]) {
            //     console.log(subPropriete + " : " + j[propriete][subPropriete]);
            // }
        }
        
    }
}
