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

    // const newSupprButton = document.createElement("button");
    // body.appendChild(newSupprButton);
    // newSupprButton.innerText = "Supprimer le dernier éléments"
    // newSupprButton.id = "suppr";

    fetch("http://localhost:3000/notes", {
            method: 'GET'
        })
        .then(response => {
            return response.json()
        })
        .then(notes => {

            body.appendChild(newUl); //on associe la balise ul en tant qu'enfant du la balsie body

            console.log(notes);

            for (let index = 0; index < notes.length; index++) {

                const newLi = document.createElement("li"); //on crée la variable et l'element li
                newUl.appendChild(newLi); //on associe la balise li en tant qu'enfant du la balsie ul
                newLi.textContent = notes[index].content;
                newLi.id = "index " + notes[index].id;


                const buttonSuppr = document.createElement("button");
                newLi.appendChild(buttonSuppr);
                buttonSuppr.innerText = "Supprimer l'élément";
                buttonSuppr.id = notes[index].id;

                buttonSuppr.addEventListener("click", function (e) {

                    newLi.remove(e.id);

                    fetch("http://localhost:3000/notes/" + buttonSuppr.id, {
                            method: 'DELETE',
                            headers: {
                                "Content-type": "application/json"
                            },

                        })
                        .then(response => response.text())
                        .then(result => console.log(result))
                        .catch(error => console.log('error', error));



                });


            }
        })
        .catch(error => console.log('error', error));



    document.getElementById("button").addEventListener("click", function () {

        if (newInput.value != '') { //on verifie que l'input n'est pas vide
            const newLi = document.createElement("li"); //on crée la variable et l'element li
            newUl.appendChild(newLi); //on associe la balise li a la balise ul
            newLi.textContent = newInput.value; //on affecte la valeur de l'input au contenu du li




            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            let raw = JSON.stringify({
                "content": newInput.value
            })

            fetch("http://localhost:3000/notes", {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: "follow"

                })
                .then(response => {
                    return response.json()
                })
                .then(result => {

                    const buttonSuppr = document.createElement("button");
                    newLi.appendChild(buttonSuppr);
                    buttonSuppr.innerText = "Supprimer l'élément";
                    buttonSuppr.id = result.id;
                    newLi.id = "index" + result.id;

                    buttonSuppr.addEventListener("click", function (e) {

                        newLi.remove(e.id);
    
                        fetch("http://localhost:3000/notes/" + buttonSuppr.id, {
                                method: 'DELETE',
                                headers: {
                                    "Content-type": "application/json"
                                },
    
                            })
                            .then(response => response.text())
                            .then(result => console.log(result))
                            .catch(error => console.log('error', error));
    
    
    
                    });


                })
                .catch(error => console.log('error', error));


            newInput.value = ''; //on reset l'input
        }

    })




}

// function boutonSupprimer(buttonSuppr, newLi, notes, index) {

//     const buttonSuppr = document.createElement("button");
//     newLi.appendChild(buttonSuppr);
//     buttonSuppr.innerText = "Supprimer l'élément";
//     buttonSuppr.id = notes[index].id;
// }

// function deleteServer(buttonSuppr, newLi) {
//     buttonSuppr.addEventListener("click", function (e) {

//         newLi.remove(e.id);

//         fetch("http://localhost:3000/notes/" + buttonSuppr.id, {
//                 method: 'DELETE',
//                 headers: {
//                     "Content-type": "application/json"
//                 },

//             })
//             .then(response => response.text())
//             .then(result => console.log(result))
//             .catch(error => console.log('error', error));



//     });
// }

// console.log(document.getElementsByTagName("li"));