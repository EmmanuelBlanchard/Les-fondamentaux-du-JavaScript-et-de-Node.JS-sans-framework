var http = require("http");
var fs = require("fs");
var url = require("url");
const PORT = "8080";

var serveur = http.createServer(traiteReq);
serveur.listen(PORT);

function traiteReq(requete, reponse) {
    var pageHtml = "";
    var contentType = "";
    var monObjUrl = url.parse(requete.url);
    
    console.log(monObjUrl.pathname);

    if(monObjUrl.pathname === "/index.html" || monObjUrl.pathname === "/") {
        pageHtml = fs.readFileSync("./index.html","UTF-8");
        contentType = "text/html";
    } else if(monObjUrl.pathname === "/toto.html") {
        pageHtml = fs.readFileSync("./toto.html","UTF-8");
        contentType = "text/html";
    } else if(monObjUrl.pathname === "/css.css") {
        pageHtml = fs.readFileSync("./css.css");
        contentType = "text/css";
    } else if(monObjUrl.pathname === "/panier.jpg") {
        pageHtml = fs.readFileSync("./images/panier.jpg");
        contentType = "image/jpg";
    }

    reponse.writeHead(200,{'Content-Type' : contentType});
    reponse.write(pageHtml);
    reponse.end();
}