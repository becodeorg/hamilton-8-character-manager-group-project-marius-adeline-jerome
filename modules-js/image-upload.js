export let base64Image;

export function setupFileUpload() {
    const fileSelector = document.getElementById('uploadImage');
    fileSelector.addEventListener('change', handleFileChange);
}

// Fonction pour traiter l'événement de changement de fichier
function handleFileChange(event) {
    const fileList = event.target.files;
    console.log(fileList);

    readImage(fileList[0]);
}

// Fonction pour lire l'image
function readImage(file) {
    if (file.type && !file.type.startsWith('image/')) {
        console.log('File is not an image.', file.type, file);
        return;
    }

    const reader = new FileReader();

    reader.addEventListener('load', (event) => {
        base64Image = event.target.result.split(',')[1];
    });

    reader.readAsDataURL(file);
}
