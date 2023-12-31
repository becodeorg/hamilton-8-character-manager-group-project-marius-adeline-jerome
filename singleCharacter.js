
const id = (new URLSearchParams(window.location.search)).get("id")
    // Window = fenêtre actuelle/page Location = tout ce qui se rapporte à l'url 
    // URLSearchParams définit des méthodes utilitaires pour travailler avec la chaîne de requête (les paramètres GET) d’une URL.
    // La propriété en lecture seule Window.location renvoie un objet Location(URL) qui contient des informations à propos de l'emplacement courant du document.
    // The search property of the Location interface is a search string, also called a query string; that is, a string containing a '?' followed by the parameters of the URL.




fetch(`https://character-database.becode.xyz/characters/`+id)
.then(response => response.json())
.then(data => {
    
    const CharacterCard = document.querySelector(".card")
    CharacterCard.classList.add("mb-5")

    // Chopper l'image
    const image = data.image;
    // Crée une const "image" qui va chercher l'élément "image" dans la data du fichier qui a été fetch.
    const CharacterImg = document.createElement("img");
    CharacterImg.classList.add("CharacterImage", "img-fluid", "img-thumbnail");
    CharacterImg.setAttribute("src", `data:image/png;base64, ${image}`);
    // .setAttribute crée 2 arguments: le nom de l'attribut et la valeur à lui être assignée.
    // La valeur est une template literal dans des backticks.
    CharacterCard.append(CharacterImg);


    // Chopper le nom
    const CharacterName = document.createElement("h5");
    // D'abord je crée l'élément désiré.
    CharacterName.classList.add("card-title", "text-center", "character-name");
    // Ensuite je lui ajoute les classes désirées.
    CharacterName.textContent = data.name;
    // Va chercher la valeur de la data "name" dans le fichier JSON et le traduit en texte.
    CharacterCard.append(CharacterName);


    // Chopper la description
    const CharacterDescription = document.createElement("p");
    CharacterDescription.classList.add("card-text", "characater-text")
    CharacterDescription.textContent= data.description;
    CharacterCard.append(CharacterDescription);

    const formButtons = document.createElement("form");
    formButtons.classList.add("container", "text-center");
    CharacterCard.append(formButtons);

    const buttonEdit = document.createElement("a");
    buttonEdit.classList.add("btn", "btn-outline-success", "w-25", "me-5");
    buttonEdit.textContent="Edit";
    formButtons.append(buttonEdit);
    buttonEdit.href="EditPage.html?id="+id;

    const buttonDelete = document.createElement("a");
    buttonDelete.textContent = "Delete";
    buttonDelete.classList.add("btn", "btn-outline-danger", "w-25")
    formButtons.append(buttonDelete);
    buttonDelete.addEventListener("click", ()=> {
        deleteTheCharacter(data["id"]);
        // On lance la fonction créée plus bas pour delete l'élément.
    })


});
function deleteTheCharacter(id) {
    let response = window.confirm("Do you really want to delete this character ?")
    // window.confirm() indique au navigateur d'afficher une boîte de dialogue
    // avec un message optionnel et d'attendre que la personne confirme ou annule la boîte de dialogue.
    let init = {
        method: "DELETE"
        // La méthode delete supprime la ressource indiquée. Ici elle est liée à une fonction et sera appliquée en même temps que celle-ci.

    }

if (response){
fetch(`https://character-database.becode.xyz/characters/` + id, init)
    .then(response => response.json())
    .then(() => {
        window.location.href='/index.html';
        // Permet de remplacer l'URL par un autre à la fin de l'action. Ici, redirige vers index.html.
        })
        
    
    .catch(error => {
        // Handle any errors that occurred during the fetch request
        console.log(error);
    });
    }
}