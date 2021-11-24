var http = require("http");
var url = require("url");
var queryString = require("querystring");
var gestionPage = require("./gestionPage");
var application = require("./js/app");
var panier = application.genererPanierAleatoire();
console.log(panier);

require("remedial");
const PORT = "8080";

var serveur = http.createServer(traiteReq);
serveur.listen(PORT);

function traiteReq(requete, reponse) {
    var monObjUrl = url.parse(requete.url);
    var monObjQuery = queryString.parse(monObjUrl.query);

    if(monObjUrl.pathname === "/") {
        monObjUrl.pathname = "/index.html";
    }
    
    var data = gestionPage.preparerLesDonnees(monObjUrl, monObjQuery);
    gestionPage.envoyerLesDonnees(data, reponse);
}
