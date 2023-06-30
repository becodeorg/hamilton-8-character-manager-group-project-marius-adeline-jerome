const characterForm = document.getElementById('CharacterForm');

characterForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut
  
    const form = document.getElementById('CharacterForm');
    const name = form.elements.name.value;
    const shortDescription = form.elements.shortDescription.value;
    const description = form.elements.description.value;
  
    const fileInput = form.elements.image; // Récupère l'élément d'entrée de fichier
    const file = fileInput.files[0]; // Récupère le fichier sélectionné par l'utilisateur
  
    const reader = new FileReader(); // Crée une instance de FileReader
  
    reader.onload = function(event) {
      const imageData = event.target.result.split(',')[1]; // Extrait les données Base64 de l'URL de données
      
      // Appelle la fonction createCharacter avec les données du personnage et l'image encodée en Base64
      createCharacter(name, shortDescription, description, imageData);
    };
  
    reader.readAsDataURL(file); // Lit le contenu du fichier en tant qu'URL de données
});

function createCharacter(name, shortDescription, description, imageData) {
  const characterData = {
    name: name,
    shortDescription: shortDescription,
    description: description,
    image: imageData
  };

  // Envoi de la requête POST à l'API pour créer le personnage
  fetch('https://character-database.becode.xyz/characters', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(characterData)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Nouveau personnage créé avec l\'ID :', data.id);
    console.log("Le personnage a été créé !");
  })
  .catch(error => {
    console.error('Erreur lors de la création du personnage :', error);
  });
}



  
/*
Isn't he lovely ?
This is my favorite version of Shrek ! 
*/  
  
    
  
  


/* Le code pour la page avec les informations précises d'un personnage :

const id = (new URLSearchParams(window.location.search)).get("id")
    // Window = fenêtre actuelle/page Location = tout ce qui se rapporte à l'url

fetch(`https://character-database.becode.xyz/characters/${id}`)
.then(response => response.json())
.then(data => {
    const CharactersContainer = document.querySelector(".CharactersContainer");

    const CharacterColumn = document.createElement("div");
    CharacterColumn.classList.add("col-4")
    CharactersContainer.appendChild(CharacterColumn);

    const CharacterCard = document.createElement("div");
    CharacterCard.classList.add("card")
    CharacterCard.classList.add("mb-4")
    CharacterColumn.appendChild(CharacterCard);
    
            //Récupère l'image du personnage
            const image = data.image;
            const Characterimg = document.createElement("img");
            Characterimg.classList.add("CharacterImage");
            Characterimg.setAttribute("src", `data:image/png;base64, ${image}`);
            CharacterCard.appendChild(Characterimg);

            //Récupère le nom du personnage
            const CharacterName = document.createElement("h5");
            CharacterName.classList.add("CharacterName");
            CharacterName.classList.add("card-title");
            CharacterName.textContent = data.name;
            CharacterCard.appendChild(CharacterName);

            //Récupère la courte description du personnage
            const CharacterShortDescription = document.createElement("p");
            CharacterShortDescription.classList.add("CharacterShortDescription");
            CharacterShortDescription.textContent = data.shortDescription;
            CharacterShortDescription.classList.add("card-text");
            CharacterCard.appendChild(CharacterShortDescription);

            //Récupère la courte description du personnage
            const CharacterDescription = document.createElement("p");
            CharacterDescription.classList.add("CharacterDescription");
            CharacterDescription.textContent = data.description;
            CharacterDescription.classList.add("card-text");
            CharacterCard.appendChild(CharacterDescription);
})
*/


/* Code pour la SinglePage :

fetch("https://character-database.becode.xyz/characters")
.then(response => response.json())
.then(data => {

    const CharactersRowContainer = document.querySelector(".row");


    for (let i=0; i < data.length; i++) {

        const CharacterColumn = document.createElement("div");
        CharacterColumn.classList.add("col-4")
        CharactersRowContainer.appendChild(CharacterColumn);

        const CharacterCard = document.createElement("div");
        CharacterCard.classList.add("card");
        CharacterCard.classList.add("mb-4");
        CharacterCard.classList.add("align-items-center");

        CharacterColumn.appendChild(CharacterCard);

        //Récupère l'image du personnage
        const image = data[i].image;
        const Characterimg = document.createElement("img");
        Characterimg.classList.add("CharacterImage");
        Characterimg.setAttribute("src", `data:image/png;base64, ${image}`);
        CharacterCard.appendChild(Characterimg);
        Characterimg.classList.add("w-100");

        //Récupère le nom du personnage
        const CharacterName = document.createElement("h5");
        CharacterName.classList.add("CharacterName");
        CharacterName.classList.add("card-title");
        CharacterName.classList.add("mt-3");

        CharacterName.textContent = data[i].name;
        CharacterCard.appendChild(CharacterName);

        //Récupère la courte description du personnage
        const CharacterShortDescription = document.createElement("p");
        CharacterShortDescription.classList.add("CharacterShortDescription");
        CharacterShortDescription.textContent = data[i].shortDescription;
        CharacterName.classList.add("card-text");
        CharacterCard.appendChild(CharacterShortDescription);

        //Récupère l'id du personnage
        const CharacterID = document.createElement("div");
        CharacterID.classList.add("CharacterID");
        CharacterID.textContent = data[i].id;
        CharacterCard.appendChild(CharacterID);
        CharacterID.style.display = "none";

        //Crée un boutton "View more"
        const VMButton = document.createElement("a");
        VMButton.href = "#";
        //VMButton.href = "?id="+data[i].id;
        VMButton.classList.add("btn");
        VMButton.classList.add("btn-primary");
        VMButton.classList.add("w-80");
        VMButton.classList.add("mb-3");
        VMButton.textContent = "View more";
        CharacterCard.appendChild(VMButton);
    }
})
.catch(error => {
  console.log("There is an error!", error);
});



const searchForm = document.querySelector("form");
const searchInput = document.querySelector("input");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire
  const searchValue = searchInput.value.trim().toLowerCase();

  const cards = document.querySelectorAll(".col-4");
  cards.forEach(card => {
    const name = card.querySelector(".card-title").textContent.trim().toLowerCase();
    if (name.includes(searchValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
*/