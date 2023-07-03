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
