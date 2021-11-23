var http = require("http");
var fs = require("fs");
var url = require("url");
var queryString = require("querystring");
require("remedial");
const PORT = "8080";

var serveur = http.createServer(traiteReq);
serveur.listen(PORT);

function traiteReq(requete, reponse) {
    var dataAEnvoyer = "";
    var contentType = "";
    var dossier = "";
    var monObjUrl = url.parse(requete.url);
    var monObjQuery = queryString.parse(monObjUrl.query);
    console.log(monObjQuery);
    var indexDuPoint = monObjUrl.pathname.indexOf(".");
    var extension = monObjUrl.pathname.substring(indexDuPoint, monObjUrl.pathname.length);

    var encodage = "";

    switch(extension) {
        case ".html" : 
            contentType = "text/html";
            dossier = "html/";
            encodage = "UTF-8";
        break;
        case ".css" : 
            contentType = "text/css";
            dossier = "css/";
        break;
        case ".jpg" : 
            contentType = "image/jpeg";
            dossier = "images/";
        break;
        default : contentType = "";
        break;
    }

    if(monObjUrl.pathname !== "/favicon.ico") {
        dataAEnvoyer = fs.readFileSync(dossier+monObjUrl.pathname.substring(1,monObjUrl.pathname.length),encodage);
        if(monObjUrl.pathname === "/toto.html") {
            dataAEnvoyer = dataAEnvoyer.supplant(monObjQuery);
        }
    }

    reponse.writeHead(200,{'Content-Type' : contentType});
    reponse.write(dataAEnvoyer);
    reponse.end();
}