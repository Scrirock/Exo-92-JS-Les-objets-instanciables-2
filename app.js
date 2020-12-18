function Personne(sonNom, sonPrenom, sonAge, sonSexe){

    this.nom = sonNom;
    this.prenom = sonPrenom;
    this.age = sonAge;
    this.sexe = sonSexe;

    this.getPhrase = function (){
        return "ma personne s'appelle "+ this.nom +", "+ this.prenom +" il a "+ this.age +" ans et est de sexe "+this.sexe;
    }

    this.setNomPrenom = function (){
        this.nom = "Pete";
        this.prenom = "Matthias";
    }
}

let tableauDePersonne = [
    new Personne("Bidule", "Truc", 15, "Homme"),
    new Personne("Elbaba", "Jessica", 45, "Femme"),
    new Personne("Jacob", "Jacob", 17, "Homme"),
    new Personne("Pasmoi", "Enfètesi", 82, "Homme"),
    new Personne("Bruno", "Lucie", 31, "Femme")
]

let Classe = {
    personnes: [
        tableauDePersonne[0].getPhrase(),
        tableauDePersonne[1].getPhrase(),
        tableauDePersonne[2].getPhrase(),
        tableauDePersonne[3].getPhrase(),
        tableauDePersonne[4].getPhrase(),
    ]
}

let div = document.createElement("div");
document.body.append(div)

for (let i = 0; i<tableauDePersonne.length; i++){
    div.innerHTML += Classe.personnes[i] + "<br>";
}
