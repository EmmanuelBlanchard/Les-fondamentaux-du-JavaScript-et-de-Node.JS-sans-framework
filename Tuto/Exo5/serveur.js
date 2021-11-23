var http = require("http");
var fs = require("fs");

const PORT = "8080";

var serveur = http.createServer(traiteReq);
serveur.listen(PORT);

function traiteReq(requete, reponse) {
    var pageHtml = fs.readFileSync("./index.html","UTF-8");
    reponse.writeHead(200,{'Content-Type' : "text/html"});
    reponse.write(pageHtml);
    reponse.end();
}