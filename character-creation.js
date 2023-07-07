
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
import './main.scss';

import { setupFileUpload } from './modules-js/image-upload.js';
import { setupCreationButton } from './modules-js/creation-button.js';

import { createWysimark } from "@wysimark/standalone"

// Get the editor container element
const container = document.getElementById("editor-container")

// Create the Wysimark component
const wysimark = createWysimark(container, {
  initialMarkdown: "",
  onChange: () => {
    const markdown = wysimark.getMarkdown()
    console.log(markdown)
  }
})

// Appel de la fonction d'initialisation de l'application
initializeApp();

// Fonction pour initialiser l'application
function initializeApp() {
  setupFileUpload();
  setupCreationButton(wysimark);
}
