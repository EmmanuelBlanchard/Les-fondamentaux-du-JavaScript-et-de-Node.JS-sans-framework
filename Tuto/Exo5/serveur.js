var http = require("http");
const PORT = "8080";

var serveur = http.createServer(traiteReq);
serveur.listen(PORT);

function traiteReq(requete, reponse) {
    var pageHtml = '<!DOCTYPE html><head></head><body><h1>coucou</h1></body></html>';
    reponse.writeHead(200,{'Content-Type' : "text/html"});
    reponse.write(pageHtml);
    reponse.end();
}