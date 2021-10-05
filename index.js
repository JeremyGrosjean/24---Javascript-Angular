console.log("Hello World");


//Concaténer
let nomtest = "bob";
console.log(`Nouvelle version : Bonjour ${nomtest}`);
console.log(`Version concaténé : Bonjour` + ` ${nomtest}`);
console.log(typeof (nomtest));

const entier = 0; //L'entier 0 est equivalent à faux


//Comparateur
if (entier) {
    console.log("vrai")
}

const chaine = "test";
if (3 === "3") {
    console.log("test ===");
} else {
    console.log("faux");
}

// const nomtest = (parametre) => { /*contenu de la fonction*/ } //SYNTAXE D'UNE FONCTION




//Fonction - Exercice
nomtest = "javascriuftfytfpt";

const taille = (nomtest) => {
    if (nomtest.length > 10) {
        console.log(nomtest.length);
    } else {
        console.error(nomtest.length);
    }
};

taille(nomtest);



//Tableau
const couleurs = ["bleu", "orange", "rouge", "bleu"];

//Méthode 1 pour parcourir un tableau
for (let index = 0; index < couleurs.length; index++) {
    console.log(couleurs[index]);
}

//Autre méthode pour parcourir un tableau
couleurs.forEach(couleur => console.log(couleur));


// couleurs.push("violet");    //Ajoute un élément au tableau
// couleurs.pop()              //Supprime la dernière entrée  
// couleurs.shift()            //Supprime la première entrée
// couleurs.unshift("vert")    //Ajoute au début

// couleurs.indexOf("Banana"); //Verifie si "Banana est dans couleurs: retourne -1 si n'existe pas, l'index s'il existe"
// couleurs.splice(pos, 1);    //Supprime un élémnt du tableau

//Permet de retourner le nombre de variable "bleu" contenu dans le tableau
console.log(couleurs.filter(couleur => couleur === "bleu").length);

//Seconde methode permettant le meme chose
let indexBleus = 0;
for (let index = 0; index < couleurs.length; index++) {
    indexBleus = indexBleus + (couleurs[index] === "bleu" ? 1 : 0);
}

console.log(indexBleus);

//Exercice
//Le tri : la méthode sort()
console.log("Exercice tableau");
let notes = ["125", "8", "19", "25"];

notes.sort();
console.log(notes);
notes.forEach(note => console.log(note.length));

noteslength1 = notes.map(note => note.length);
console.log(noteslength1)


//---------------------------------

comparaison = (a, b) => {
    if (a < b) {
        return -1
    } else if (a > b) {
        return 1
    } else {
        return 0
    }
}

notesv = [8, 2, 65, 25];

console.log(notesv.sort(comparaison)); // sort ne trie plus par ordre alphabétique mais par la methode compraison defini au dessus
//--------------------------------------

notes = result;
console.log(notes);

//Manipulation HTML + Les evenments
const bodyElements = document.getElementsByTagName("body");

if (bodyElements.length > 0) { //on verifie que body a un element (=existe)
    const body = document.getElementsByTagName("body")[0]; //on crée la variable body et on lui associe le body du html
    const newUl = document.createElement("ul"); //on crée la variable et l'element ul
    newUl.id = "liste";

    const newInput = document.createElement("input");
    newInput.id = "input"
    body.appendChild(newInput);

    const newButton = document.createElement("button");
    body.appendChild(newButton);
    newButton.innerText = "Ajouter un élément"
    newButton.id = "button";

    const newSupprButton = document.createElement("button");
    body.appendChild(newSupprButton);
    newSupprButton.innerText = "Supprimer le dernier éléments"
    newSupprButton.id = "suppr";



    body.appendChild(newUl); //on associe la balise ul en tant qu'enfant du la balsie body

    notes.forEach(note => { //Pour chaque element du tableau notes

        const newLi = document.createElement("li"); //on crée la variable et l'element li
        newUl.appendChild(newLi); //on associe la balise li en tant qu'enfant du la balsie ul
        newLi.textContent = note; //On determine la valeur dans la balise
    });



    document.getElementById("button").addEventListener("click", function () {

        if (newInput.value != '') { //on verifie que l'input n'est pas vide
            const newLi = document.createElement("li"); //on crée la variable et l'element li
            newUl.appendChild(newLi); //on associe la balise li a la balise ul
            newLi.textContent = newInput.value; //on affecte la valeur de l'input au contenu du li
            newInput.value = ''; //on reset l'input
        }

    })



    document.getElementById("suppr").addEventListener("click", function () {

        let node = document.getElementById("liste");
        let enf = document.getElementsByTagName("li");
        let cible = enf[enf.length - 1]
        node.removeChild(cible);
    })


    // console.log(document.getElementsByTagName("li"));

}

//dispatch = voila un evenement


