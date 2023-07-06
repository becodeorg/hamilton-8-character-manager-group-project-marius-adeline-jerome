import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
import { setupFileUpload } from './modules-js/image-upload.js';
import { setupCreationButton } from './modules-js/creation-button.js';

// Appel de la fonction d'initialisation de l'application
initializeApp();

// Fonction pour initialiser l'application
function initializeApp() {
  setupFileUpload();
  setupCreationButton();
}
