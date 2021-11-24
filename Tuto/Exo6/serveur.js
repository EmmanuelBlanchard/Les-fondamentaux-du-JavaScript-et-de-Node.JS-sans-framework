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
            console.log(queryString.parse(body));
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
