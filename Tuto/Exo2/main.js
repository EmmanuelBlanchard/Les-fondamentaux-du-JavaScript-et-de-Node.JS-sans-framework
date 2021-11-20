var joueur = require("./joueur");

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