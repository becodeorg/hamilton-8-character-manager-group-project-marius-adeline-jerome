const DeleteButtons = document.querySelectorAll(".DeleteButton");

DeleteButtons.forEach(deleteButton => {

    deleteButton.addEventListener("click", () => {
        confirm("Are you sure you want to delete this character ?");
    })

});


fetch("https://character-database.becode.xyz/characters")
.then(response => response.json())
.then(data => {

    const CharactersRowContainer = document.querySelector(".row");


    for (let i=0; i < data.length; i++) {

        const CharacterColumn = document.createElement("div");
        CharacterColumn.classList.add("col-4")
        CharactersRowContainer.appendChild(CharacterColumn);

        const CharacterCard = document.createElement("div");
        CharacterCard.classList.add("card")
        CharacterCard.classList.add("mb-4")
        CharacterColumn.appendChild(CharacterCard);

        //Récupère l'image du personnage
        const image = data[i].image;
        const Characterimg = document.createElement("img");
        Characterimg.classList.add("CharacterImage");
        Characterimg.setAttribute("src", `data:image/png;base64, ${image}`);
        CharacterCard.appendChild(Characterimg);


        //Récupère le nom du personnage
        const CharacterName = document.createElement("h5");
        CharacterName.classList.add("CharacterName");
        CharacterName.classList.add("card-title");
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

        //Crée un boutton "View more"
        const VMButton = document.createElement("a");
        VMButton.href = "#";
        VMButton.classList.add("btn");
        VMButton.classList.add("btn-primary");
        VMButton.textContent = "View more";
        CharacterCard.appendChild(VMButton);




    }
})
.catch(error => {
  console.log("There is an error!", error);
});





/*
//Récupère la description du personnage
fetch("https://character-database.becode.xyz/characters")
.then(response => response.json())
.then(data => {
    for (let i=0; i < data.length; i++) {
        const CharacterDiv = document.createElement("div");
        CharacterDiv.classList.add("CharacterDescription");
        CharacterDiv.textContent = data[i].description;
        CharactersContainer.appendChild(CharacterDiv);
    }
})
.catch(error => {
  console.log("There is an error with the descriptions !", error);
});


//Récupère l'ID du personnage
fetch("https://character-database.becode.xyz/characters")
.then(response => response.json())
.then(data => {
    for (let i=0; i < data.length; i++) {

    }
})
.catch(error => {
  console.log("There is an error with the ids !", error);
});



//Récupère l'image du personnage
fetch("https://character-database.becode.xyz/characters")
.then(response => response.json())
.then(data => {
    for (let i=0; i < data.length; i++) {

    }
})
.catch(error => {
  console.log("There is an error with the pictures !", error);
});

*/