var http = require("http");
var fs = require("fs");
var url = require("url");
const PORT = "8080";

var serveur = http.createServer(traiteReq);
serveur.listen(PORT);

function traiteReq(requete, reponse) {
    var pageHtml = "";
    var monObjUrl = url.parse(requete.url);
    
    if(monObjUrl.pathname === "/index.html" || monObjUrl.pathname === "/") {
        pageHtml = fs.readFileSync("./index.html","UTF-8");
    } else if(monObjUrl.pathname === "/toto.html") {
        pageHtml = fs.readFileSync("./toto.html","UTF-8");
    } 

    reponse.writeHead(200,{'Content-Type' : "text/html"});
    reponse.write(pageHtml);
    reponse.end();
}