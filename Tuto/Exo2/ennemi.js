var templateEnnemi = {    
    creerTortue : function() {
        var ennemi1 = {
            nom : "Tortue",
            description : "Tortue du sud",
            level : 1,
            pointsDeVie : 5,
            force : 2,
        
            afficherEnnemi : function() {
                var texte = "Nom : " + this.nom + "\n";
                texte += "Description : " + this.description + "\n";
                texte += "Niveau : " + this.level + "\n";
                texte += "Points de vie : " + this.pointsDeVie + "\n";
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
            pointsDeVie : 7,
            force : 4,
        
            afficherEnnemi : function() {
                var texte = "Nom : " + this.nom + "\n";
                texte += "Description : " + this.description + "\n";
                texte += "Niveau : " + this.level + "\n";
                texte += "Points de vie : " + this.pointsDeVie + "\n";
                texte += "Force : " + this.force;
                console.log(texte);
            }
        }
        return ennemi2;
    }
}
module.exports = templateEnnemi;
