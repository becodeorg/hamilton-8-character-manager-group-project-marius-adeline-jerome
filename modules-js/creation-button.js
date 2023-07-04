import { base64Image } from './image-upload.js';

export function setupCreationButton() {
    const creationButton = document.getElementById("creationButton");
    creationButton.addEventListener('click', retrieveDataFromFormAndSendToApi);
}


// Fonction pour envoyer les données vers l'API
function retrieveDataFromFormAndSendToApi(event) {

    preventFromReloadPage(event);

    const url = "https://character-database.becode.xyz/characters";
    const newCharacter = createCharacterObject();

    console.log(newCharacter);

    sendRequest(url, newCharacter)
        .then(handleSuccess)
        .catch(handleError);
}

// Fonction qui empêche le comportement par défaut (reload de la page)
function preventFromReloadPage(event) {
    event.preventDefault();
}


// Fonction qui récupère les valeurs des champs du formulaire et renvoi l'objet correspondant
function createCharacterObject() {
    const name = document.getElementById("nameLabel").value;
    const shortDescription = document.getElementById("shortDescriptionLabel").value;
    const description = document.getElementById("descriptionLabel").value;

    return {
        name: name,
        shortDescription: shortDescription,
        image: base64Image,
        description: description
    };
}

// Fonction qui envoi la requêtte HTTP POST à l'API en utilisant fetch et qui renvoi la réponse sous forme de promesse
function sendRequest(url, data) {
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json());
}

// Fonction appelée lorsque la requête est réussie
function handleSuccess(result) {
    console.log("Success:", result);
    window.location.href = "index.html";
}

// Fonction appelée en cas d'erreur de la requếte 
function handleError(error) {
    console.error("Error:", error);
}
