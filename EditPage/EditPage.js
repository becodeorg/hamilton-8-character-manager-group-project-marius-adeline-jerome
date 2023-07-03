
const FormName = document.getElementById("FormName");
const FormShortDescription = document.getElementById("FormShortDescription");
const FormDescription = document.getElementById("FormDescription");
const FormImage = document.getElementById("FormImage");
let ExistingImage;

/*
const id = (new URLSearchParams(window.location.search)).get("id")
    // Window = fenêtre actuelle/page Location = tout ce qui se rapporte à l'url

fetch(`https://character-database.becode.xyz/characters/${id}`)
*/

const URL = `https://character-database.becode.xyz/characters/e3939a32-c38b-4623-a540-0df8545b894f`;

//Récupère les informations initiales du perso
fetch(URL)
.then(response => response.json())
.then(data => {
    
    FormName.defaultValue = data.name;

    FormShortDescription.defaultValue = data.shortDescription;
    FormDescription.defaultValue = data.description;
    FormImage.defaultValue = data.image;
    const image = data.image;
    FormImage.src = `data:image/png;base64, ${image}`;
    ExistingImage = image;

})
.catch(error => {
  console.log("Une erreur s'est produite lors de la récupération des informations...", error);
});


//Récupère les nouvelles infos dans le formulaire en cliquant sur le btn submit
const EditForm = document.getElementById("CharacterForm");



EditForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire

const ImageInput = document.getElementById("FormNewImage");
  if (ImageInput.files.length === 0) { //Si aucun fichier n'a été chargé

  const NameInput = document.getElementById("FormName");
  const ShortDescriptionInput = document.getElementById("FormShortDescription");
  const DescriptionInput = document.getElementById("FormDescription");

    const NameValue = NameInput.value.trim();
    const ShortDescriptionValue = ShortDescriptionInput.value.trim();
    const DescriptionValue = DescriptionInput.value.trim();

    //crée un tableau Json avec les données récoltées
    const updatedCharacter = {
      name: NameValue,
      shortDescription: ShortDescriptionValue,
      description: DescriptionValue,
      image : ExistingImage,
    };

    //PUT le nouveau tableau Json
  fetch(URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedCharacter),
  })

  .then(response => {
    if (response.ok) {
      console.log("Le personnage a été mis à jour avec succès sans la photo !");
    } else {
      console.log("Une erreur s'est produite lors de la mise à jour du personnage sans la photo.");
    }
  })

  .catch(error => {
    console.log("Une erreur s'est produite lors de la requête PUT :", error);
  });




} else { //Si un fichier a été chargé

  const NameInput = document.getElementById("FormName");
  const ShortDescriptionInput = document.getElementById("FormShortDescription");
  const DescriptionInput = document.getElementById("FormDescription");
  const ImageInput = document.getElementById("FormNewImage");

  const file = ImageInput.files[0];
  const ImageValue = ImageInput.value;

  const reader = new FileReader();


  reader.onload = function(event) {
    const base64Text = event.target.result;
    const base64WithoutHeader = base64Text.replace(/^data:image\/[a-z]+;base64,/, '');
    console.log(base64WithoutHeader); 

    const NameValue = NameInput.value.trim();
    const ShortDescriptionValue = ShortDescriptionInput.value.trim();
    const DescriptionValue = DescriptionInput.value.trim();


    const updatedCharacter = {
      name: NameValue,
      shortDescription: ShortDescriptionValue,
      description: DescriptionValue,
      image : base64WithoutHeader,
    
    };


    fetch(URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCharacter),
    })
      .then(response => {
        if (response.ok) {
          console.log("Le personnage a été mis à jour avec succès avec la photo !");
          // Traitez ici la réponse en cas de succès de la modification
        } else {
          console.log("Une erreur s'est produite lors de la mise à jour du personnage avec la photo.");
          // Traitez ici la réponse en cas d'échec de la modification
        }
      })
      .catch(error => {
        console.log("Une erreur s'est produite lors de la requête PUT :", error);
      });
  
  
    }
   
    reader.readAsDataURL(file);


  }
  
});




  
  


 


