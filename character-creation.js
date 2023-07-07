import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { setupFileUpload } from './modules-js/image-upload.js';
import { setupCreationButton } from './modules-js/creation-button.js';

// Appel de la fonction d'initialisation de l'application
initializeApp();

// Fonction pour initialiser l'application
function initializeApp() {
  setupFileUpload();
  setupCreationButton();
}
