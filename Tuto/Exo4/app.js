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
    console.log(poidsValeur, prixValeur);
}

function verifierResultatClementine() {
    var poids = document.querySelector("#poidsClementine");
    var poidsValeur = poids.value;
    var prix = document.querySelector("#prixClementine");
    var prixValeur = prix.value;
    console.log(poidsValeur, prixValeur);
}

function verifierResultatFraise() {
    var poids = document.querySelector("#poidsFraise");
    var poidsValeur = poids.value;
    var prix = document.querySelector("#prixFraise");
    var prixValeur = prix.value;
    console.log(poidsValeur, prixValeur);
}

var imagePanier = document.querySelector(".panier");
imagePanier.addEventListener("click", function() {
    panier = genererPanierAleatoire();
    affichageListe();
});
