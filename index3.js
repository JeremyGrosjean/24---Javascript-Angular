function ajouterLigne(note) {

    const newLi = document.createElement("li");
    newLi.innerText = note.content;
    newLi.id = 'li'+note.id;

    const buttonDelete = document.createElement("button");
    buttonDelete.innerText = "Supprimer";
    buttonDelete.id = note.id;
    
    buttonDelete.addEventListener('click', function(event) {
        fetch(`http://localhost:3000/notes/${event.target.id}`, {
            method: 'DELETE'
        })
        .then(response => {
            return response.json()
        })
        .then(note => {
            document.querySelector(`li#li${event.target.id}`).remove()
        });
    })
    newLi.appendChild(buttonDelete);
    return newLi;
}

async function ajouterNote() {
    const newUl = document.getElementById('myUl');
    const raw = JSON.stringify({
        "content": document.getElementById('note').value
        });

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const newNote = await fetch("http://localhost:3000/notes", {
        method: 'POST',
        headers: myHeaders,
        body: raw
    }).then(response => {
        return response.json()
    });

    const newLi = ajouterLigne(newNote);
    newUl.appendChild(newLi);

    document.getElementById('note').value = '';
}

async function chargerNotes() {
    const bodyElements = document.getElementsByTagName('body');
    if (bodyElements.length > 0) {
        const body = bodyElements[0];
        const newUl = document.createElement("ul");
        newUl.id = 'myUl';
    
        const notes = await fetch("http://localhost:3000/notes", {
            method: 'GET'
        })
        .then(response => {
            return response.json()
        });

        for (let index = 0 ; index < notes.length; index ++) {
            const note = notes[index];
            const newLi = ajouterLigne(note);
            newUl.appendChild(newLi);
        }

        body.appendChild(newUl);

        document.getElementById('btn1').addEventListener('click', ajouterNote);
    }
}

const result = chargerNotes().then()
.catch(error => console.log('error', error));


