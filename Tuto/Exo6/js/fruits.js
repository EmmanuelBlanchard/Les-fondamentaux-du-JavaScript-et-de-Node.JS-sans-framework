// var boiteOutils = require("./boiteOutils");

var fruitsTemplate = { 
    creerOrange : function() {
        var orange = {
            nom : "orange",
            poids : boiteOutils.genererChiffreAleatoire(110,150),
            prix : 70,
        }
        return orange;  
    },
    creerClementine : function() {
        var clementine = {
            nom : "clementine",
            poids : boiteOutils.genererChiffreAleatoire(70,110),
            prix : 30,
        }
        return clementine; 
    },
    creerFraise : function() {
        var fraise = {
            nom : "fraise",
            poids : boiteOutils.genererChiffreAleatoire(15,30),
            prix : 15,
        }
        return fraise;
    }
}
// module.exports = fruitsTemplate;
