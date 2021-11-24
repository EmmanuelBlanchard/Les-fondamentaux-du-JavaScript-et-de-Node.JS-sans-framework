var http = require("http");
var url = require("url");
var queryString = require("querystring");
var gestionPage = require("./gestionPage");
var panier = require("./js/panier");
var panierAleatoire = panier.genererPanierAleatoire();

require("remedial");
const PORT = "8080";

var serveur = http.createServer(traiteReq);
serveur.listen(PORT);

function traiteReq(requete, reponse) {
    var monObjUrl = url.parse(requete.url);
    
    if(requete.method === "GET") { // Recuperation des données en GET
        var monObjQuery = queryString.parse(monObjUrl.query);
    } else if(requete.method === "POST") { // Recuperation des données en POST
        let body = "";
        requete.on('data', chunk => {
            body += chunk.toString(); // convert Buffer to string
        });
        requete.on('end', () => {
            // objToSupplant += queryString.parse(body);
            var objetPoste = queryString.parse(body);
            if(objetPoste.poidsOrange !== undefined) {
                var resultat = panier.verifierResultat(objetPoste.poidsOrange,objetPoste.prixOrange,panierAleatoire.oranges);
                if(resultat) {
                    console.log("Le resultat est bon");
                } else {
                    console.log("Le resultat est faux");
                }
            } else if(objetPoste.poidsClementine) {
                var resultat = panier.verifierResultat(objetPoste.poidsClementine,objetPoste.prixClementine,panierAleatoire.clementines);
                if(resultat) {
                    console.log("Le resultat est bon");
                } else {
                    console.log("Le resultat est faux");
                }
            } else if(objetPoste.poidsFraise) {
                var resultat = panier.verifierResultat(objetPoste.poidsFraise,objetPoste.prixFraise,panierAleatoire.fraises);
                if(resultat) {
                    console.log("Le resultat est bon");
                } else {
                    console.log("Le resultat est faux");
                }
            } else {
                console.log("Pas les oranges, les clementines, les fraises");
            }
            console.log(objetPoste);
        });
    }

    var objetToSupplant = {
        listeOranges : panier.genererListe(panierAleatoire.oranges),
        listeClementines : panier.genererListe(panierAleatoire.clementines),
        listeFraises : panier.genererListe(panierAleatoire.fraises)
    }

    if(monObjUrl.pathname === "/") {
        monObjUrl.pathname = "/index.html";
    }
    
    var data = gestionPage.preparerLesDonnees(monObjUrl, objetToSupplant);
    gestionPage.envoyerLesDonnees(data, reponse);
}
