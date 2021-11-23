var http = require("http");
var fs = require("fs");
var url = require("url");
const PORT = "8080";

var serveur = http.createServer(traiteReq);
serveur.listen(PORT);

function traiteReq(requete, reponse) {
    var dataAEnvoyer = "";
    var contentType = "";
    var dossier = "";
    var monObjUrl = url.parse(requete.url);
    var indexDuPoint = monObjUrl.pathname.indexOf(".");
    var extension = monObjUrl.pathname.substring(indexDuPoint, monObjUrl.pathname.length);

    
    switch(extension) {
        case ".html" : 
            contentType = "text/html";
            dossier = "html/";
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
        dataAEnvoyer = fs.readFileSync(dossier+monObjUrl.pathname.substring(1,monObjUrl.pathname.length));
    }

    reponse.writeHead(200,{'Content-Type' : contentType});
    reponse.write(dataAEnvoyer);
    reponse.end();
}