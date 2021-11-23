// var boiteOutils = require("./boiteOutils");
// var fruitsTemplate = require("./fruits");

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

    var poidsTotalMachine = calculPoidsPanierFruits(panier.oranges);
    var prixTotalMachine = calculPrixPanierFruits(panier.oranges);

    if(poidsTotalMachine ===  parseInt(poidsValeur) && prixTotalMachine ===  parseInt(prixValeur)) {
        console.log("Les resultats sont ok");
    } else {
        console.log("Les resultats sont faux");
    }
}

function verifierResultatClementine() {
    var poids = document.querySelector("#poidsClementine");
    var poidsValeur = poids.value;
    var prix = document.querySelector("#prixClementine");
    var prixValeur = prix.value;
    
    var poidsTotalMachine = calculPoidsPanierFruits(panier.clementines);
    var prixTotalMachine = calculPrixPanierFruits(panier.clementines);

    if(poidsTotalMachine ===  parseInt(poidsValeur) && prixTotalMachine ===  parseInt(prixValeur)) {
        console.log("Les resultats sont ok");
    } else {
        console.log("Les resultats sont faux");
    }
}

function verifierResultatFraise() {
    var poids = document.querySelector("#poidsFraise");
    var poidsValeur = poids.value;
    var prix = document.querySelector("#prixFraise");
    var prixValeur = prix.value;

    var poidsTotalMachine = calculPoidsPanierFruits(panier.fraises);
    var prixTotalMachine = calculPrixPanierFruits(panier.fraises);

    if(poidsTotalMachine ===  parseInt(poidsValeur) && prixTotalMachine ===  parseInt(prixValeur)) {
        console.log("Les resultats sont ok");
    } else {
        console.log("Les resultats sont faux");
    }
}

var imagePanier = document.querySelector(".panier");
imagePanier.addEventListener("click", function() {
    panier = genererPanierAleatoire();
    affichageListe();
});
