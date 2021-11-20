var templateEnnemi = {    
    creerTortue : function() {
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
        return ennemi1;
    },  
    creerCrabe : function() {
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
        return ennemi2;
    }
}

var tortue1 = templateEnnemi.creerTortue();
var tortue2 = templateEnnemi.creerTortue();
tortue2.level = 2;
tortue2.force ++;

tortue1.afficherEnnemi();
tortue2.afficherEnnemi();

var crabe1 = templateEnnemi.creerCrabe();
crabe1.afficherEnnemi();
