// var boiteOutils = require("./boiteOutils");
// var fruitsTemplate = require("./fruits");

var finOrange = false;
var finClementine = false;
var finFraise = false;

var panier = genererPanierAleatoire();
affichageListe();

function genererPanierAleatoire() {
    var panier = {
        oranges : [],
        clementines : [],
        fraises : [],
    }
    
    for(var i = 0; i < boiteOutils.genererChiffreAleatoire(2,4); i++) {
        panier.oranges.push(fruitsTemplate.creerOrange());
    }
    
    for(var i = 0; i < boiteOutils.genererChiffreAleatoire(3,6); i++) {
        panier.clementines.push(fruitsTemplate.creerClementine());
    }
    
    for(var i = 0; i < boiteOutils.genererChiffreAleatoire(5,10); i++) {
        panier.fraises.push(fruitsTemplate.creerFraise());
    }
    return panier;
}

function calculPoidsPanierFruits(fruits) {
    var calcul = 0;
    for(var i = 0 ; i < fruits.length ; i++) {
        calcul += fruits[i].poids; 
    }
    return calcul;
}

function calculPrixPanierFruits(fruits) {
    var calcul = 0;
    for(var i = 0 ; i < fruits.length ; i++) {
        calcul += fruits[i].prix; 
    }
    return calcul;
}

function affichageListe() {
    genererListeOranges();
    genererListeClementines();
    genererListeFraises();
}

function genererListeOranges() {
    var orangesHtml = document.querySelector(".orange ul");
    orangesHtml.innerHTML = genererListe(panier.oranges);
}

function genererListeClementines() {
    var clementinesHtml = document.querySelector(".clementine ul");
    clementinesHtml.innerHTML = genererListe(panier.clementines);
}

function genererListeFraises() {
    var fraisesHtml = document.querySelector(".fraise ul");
    fraisesHtml.innerHTML = genererListe(panier.fraises);
}

function genererListe(fruits) {
    var listHtml = "";
    for(var i = 0 ; i  < fruits.length ; i++) {
        listHtml += "<li>"+ (i+1) + " - Poids  : " + (fruits[i].poids) + " - Prix : " + fruits[i].prix + " </li>";
    }
    return listHtml;
}

function verifierResultatOrange() {
    var poids = document.querySelector("#poidsOrange");
    var poidsValeur = poids.value;
    var prix = document.querySelector("#prixOrange");
    var prixValeur = prix.value;
    var sectionResultat = document.querySelector(".orangeResultat");

    var poidsTotalMachine = calculPoidsPanierFruits(panier.oranges);
    var prixTotalMachine = calculPrixPanierFruits(panier.oranges);
    if(poidsTotalMachine ===  parseInt(poidsValeur) && prixTotalMachine ===  parseInt(prixValeur)) {
        sectionResultat.innerHTML = "<img src=\"images/check.gif\" width=\"30\">";
        finOrange = true;
        finDuJeu();
    } else {
        sectionResultat.innerHTML = "<img src=\"images/croix.png\" width=\"30\">";
    }
}

function verifierResultatClementine() {
    var poids = document.querySelector("#poidsClementine");
    var poidsValeur = poids.value;
    var prix = document.querySelector("#prixClementine");
    var prixValeur = prix.value;
    var sectionResultat = document.querySelector(".clementineResultat");

    var poidsTotalMachine = calculPoidsPanierFruits(panier.clementines);
    var prixTotalMachine = calculPrixPanierFruits(panier.clementines);
    if(poidsTotalMachine ===  parseInt(poidsValeur) && prixTotalMachine ===  parseInt(prixValeur)) {
        sectionResultat.innerHTML = "<img src=\"images/check.gif\" width=\"30\">";
        finClementine = true;
        finDuJeu();
    } else {
        sectionResultat.innerHTML = "<img src=\"images/croix.png\" width=\"30\">";
    }
}

function verifierResultatFraise() {
    var poids = document.querySelector("#poidsFraise");
    var poidsValeur = poids.value;
    var prix = document.querySelector("#prixFraise");
    var prixValeur = prix.value;
    var sectionResultat = document.querySelector(".fraiseResultat");

    var poidsTotalMachine = calculPoidsPanierFruits(panier.fraises);
    var prixTotalMachine = calculPrixPanierFruits(panier.fraises);
    if(poidsTotalMachine ===  parseInt(poidsValeur) && prixTotalMachine ===  parseInt(prixValeur)) {
        sectionResultat.innerHTML = "<img src=\"images/check.gif\" width=\"30\">";
        finFraise = true;
        finDuJeu();
    } else {
        sectionResultat.innerHTML = "<img src=\"images/croix.png\" width=\"30\">";
    }
}

var imagePanier = document.querySelector(".panier");
imagePanier.addEventListener("click", function() {
    panier = genererPanierAleatoire();
    affichageListe();
    finOrange = false;
    finClementine = false;
    finFraise = false;
    reinitialisationPageHtml();
});

function finDuJeu() {
    if(finOrange && finClementine && finFraise) {
        var finSection = document.querySelector(".fin");
        finSection.innerHTML = "Fin du jeu";
    }
}

function reinitialisationPageHtml() {
    var poidsOrange = document.querySelector("#poidsOrange");
    var poidsClementine = document.querySelector("#poidsClementine");
    var poidsFraise = document.querySelector("#poidsFraise");
    var prixOrange = document.querySelector("#prixOrange");
    var prixClementine = document.querySelector("#prixClementine");
    var prixFraise = document.querySelector("#prixFraise");

    var sectionResultatOrange = document.querySelector(".orangeResultat");
    var sectionResultatClementine = document.querySelector(".clementineResultat");
    var sectionResultatFraise = document.querySelector(".fraiseResultat");
    var finSectionReinitilisation = document.querySelector(".fin");
    
    poidsOrange.value = "";
    poidsClementine.value = "";
    poidsFraise.value = "";
    prixOrange.value = "";
    prixClementine.value = "";
    prixFraise.value = "";
    sectionResultatOrange.innerHTML = "";
    sectionResultatClementine.innerHTML = "";
    sectionResultatFraise.innerHTML = "";
    finSectionReinitilisation.innerHTML = "";
}