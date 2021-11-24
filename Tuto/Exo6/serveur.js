var http = require("http");
var url = require("url");
var queryString = require("querystring");
var gestionPage = require("./gestionPage");
var panier = require("./js/panier");
var panierAleatoire = panier.genererPanierAleatoire();
var orangesListe = panier.genererListe(panierAleatoire.oranges);
var clementinesListe = panier.genererListe(panierAleatoire.clementines);
var fraisesListe = panier.genererListe(panierAleatoire.fraises);

require("remedial");
const PORT = "8080";

var serveur = http.createServer(traiteReq);
serveur.listen(PORT);

function traiteReq(requete, reponse) {
    var monObjUrl = url.parse(requete.url);
    var monObjQuery = queryString.parse(monObjUrl.query);

    var objetToSupplant = {
        listeOranges : orangesListe,
        listeClementines : clementinesListe,
        listeFraises : fraisesListe
    }

    if(monObjUrl.pathname === "/") {
        monObjUrl.pathname = "/index.html";
    }
    
    var data = gestionPage.preparerLesDonnees(monObjUrl, objetToSupplant);
    gestionPage.envoyerLesDonnees(data, reponse);
}
