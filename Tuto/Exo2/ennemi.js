var ennemi1 = {
    nom : "Tortue",
    description : "Tortue du sud",
    level : 1,
    force : 2,

    afficherEnnemi : function() {
        var texte = "Nom : " + this.nom + "\n";
        texte += "Description : " + this.description + "\n";
        texte += "Niveau : " + this.level + "\n";
        texte += "Force : " + this.force;
        console.log(texte);
    }
}

var ennemi2 = {
    nom : "Crabe",
    description : "Crabe du nord",
    level : 2,
    force : 4,

    afficherEnnemi : function() {
        var texte = "Nom : " + this.nom + "\n";
        texte += "Description : " + this.description + "\n";
        texte += "Niveau : " + this.level + "\n";
        texte += "Force : " + this.force;
        console.log(texte);
    }
}

ennemi1.afficherEnnemi();
ennemi2.afficherEnnemi();