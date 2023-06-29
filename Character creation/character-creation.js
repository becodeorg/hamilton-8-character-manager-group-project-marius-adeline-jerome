const characterForm = document.getElementById('characterForm');

characterForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const shortDescription = document.getElementById('shortDescription').value;
  const image = document.getElementById('image').files[0];
  const description = document.getElementById('description').value;

  // Create a FormData object to send the form data
  const formData = new FormData();
  formData.append('name', name);
  formData.append('shortDescription', shortDescription);
  formData.append('image', image);
  formData.append('description', description);

  try {
    // Send the form data to the API endpoint
    const response = await fetch('https://api.example.com/characters', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      // Redirect to the character list page
      window.location.href = '/character-list.html';
    } else {
      console.error('Failed to create character. Please try again.');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
});