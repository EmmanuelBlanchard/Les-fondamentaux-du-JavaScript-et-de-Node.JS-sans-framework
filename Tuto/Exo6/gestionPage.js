var fs = require("fs");
var gestionPage = {
    preparerLesDonnees : function(monObjUrl, objetToSupplant) {
        var data = {
            dataAEnvoyer : "",
            contentType : "",
        };
    
        var dossier = "";
        var encodage = "";
    
        var preparationData = this.gestionExtension(monObjUrl);
        data.contentType = preparationData.contentType;
        
        if(monObjUrl.pathname !== "/favicon.ico") {
            try {
                data.dataAEnvoyer = fs.readFileSync(preparationData.dossier+monObjUrl.pathname.substring(1,monObjUrl.pathname.length),preparationData.encodage);

                if(preparationData.extension === ".html"){
                    var header = fs.readFileSync("./html/Common/header.html");
                    var footer = fs.readFileSync("./html/Common/footer.html");
                    
                    data.dataAEnvoyer = header + data.dataAEnvoyer + footer;
                    data.dataAEnvoyer = data.dataAEnvoyer.supplant(objetToSupplant);
                }
            } catch (error) {
                console.log(error);
            }
        }
        return data;
    },
    
    gestionExtension : function(monObjUrl) {
        var indexDuPoint = monObjUrl.pathname.indexOf(".");
        var extension = monObjUrl.pathname.substring(indexDuPoint, monObjUrl.pathname.length);
    
        var preparationData = {
            contentType : "",
            dossier : "",
            encodage : "",
            extension : ""
        };
        preparationData.extension = extension;
        switch(extension) {
            case ".html" : 
                preparationData.contentType = "text/html";
                preparationData.dossier = "html/";
                preparationData.encodage = "UTF-8";
            break;
            case ".css" : 
                preparationData.contentType = "text/css";
                preparationData.dossier = "css/";
            break;
            case ".jpg" : 
                preparationData.contentType = "image/jpeg";
                preparationData.dossier = "images/";
            break;
            case ".png" : 
                preparationData.contentType = "image/png";
                preparationData.dossier = "images/";
            break;
            case ".gif" : 
                preparationData.contentType = "image/gif";
                preparationData.dossier = "images/";
            break;
            case ".js" : 
                preparationData.contentType = "application/javascript";
                preparationData.dossier = "js/";
            break;
            default : preparationData.contentType = "";
            break;
        }
        return preparationData;
    },

    envoyerLesDonnees : function(data, reponse) {
        reponse.writeHead(200,{'Content-Type' : data.contentType});
        reponse.write(data.dataAEnvoyer);
        reponse.end();
    }
}
module.exports = gestionPage;
