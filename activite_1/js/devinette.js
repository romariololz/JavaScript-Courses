/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");

numberSubmitted = null;
i = 0;

while ((i < 6) && (numberSubmitted !== solution))
{
    var numberSubmitted = parseInt(prompt('Entrez un nombre pour trouver la solution'));

    if (!isNaN(numberSubmitted)){
        if (numberSubmitted < solution) {
            console.log(numberSubmitted + " est trop petit");
        }
        else if (numberSubmitted > solution) {
            console.log(numberSubmitted + " est trop grand");
        }
        else {
            console.log("Bravo ! La solution était " + solution +
                "\n Vous avez trouvé en " + (i + 1) + " essai(s)");
            alert("Bravo ! La solution était " + solution +
                "! \nVous avez trouvé en " + (i + 1) + " essai(s)");
        }
    }
    else {
        console.log("Vous devez soumettre un nombre ;). Dommage ca fait un tour de perdu!");
    }

    i++;
}

if (i >= 6 && (numberSubmitted !== solution))
{
    console.log("Perdu... La solution était " + solution);
    alert("Perdu... La solution était " + solution);
}
