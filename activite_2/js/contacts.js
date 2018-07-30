/**
 *      ACTIVITY_2 : JS CONTACT MANAGER
 *
 *  - part 1: Class, Objects and Vars creation.
 *  - part 2: Program.
 *
 */

/* ______________PART_1______________ */

class employe {
    constructor(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }

    presentation() {
        console.log("Nom : " + this.nom + ", prénom : " + this.prenom);
    }
}

var contactManager = {
    employes: [],

    listEmployes: function () {
        console.log("Voici la liste de tous vos contacts :");
        this.employes.forEach(function (employe) {
            employe.presentation();
        })
    },
    
    addEmploye: function (nom, prenom) {
        this.employes.push(new employe(nom, prenom));
    }
};

contactManager.addEmploye("Ochon", "Paul");
contactManager.addEmploye("Diossy", "Daisy");

var option;

/* ______________PART_2______________ */

console.log("Bievenue dans le gestionnaire des contacts !");

while (option !== 0)
{
    console.log("1: Lister les contacts\n" +
        "2: Ajouter un contact\n" +
        "0: Quitter");

    option = Number(prompt("Choisissez un option:"));

    switch (option) {
        case 1:
            contactManager.listEmployes();
            break;
        case 2:
            contactManager.addEmploye(
                prompt("Entrez le nom du nouveau contact"),
                prompt("Entrez le prénom du nouveau contact")
                );
            break;
        default:
            console.log("Cette option n'existe pas.\n" +
                "Veuillez insérer un numéro d'option valide");
            break;
    }
}
