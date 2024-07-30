document.addEventListener('DOMContentLoaded', () => {
    const displayName = document.getElementById('displayName');
    const displayEmail = document.getElementById('displayEmail');
    const displayMessage = document.getElementById('displayMessage');

    const savedData = JSON.parse(localStorage.getItem('formData'));

    if (savedData) {
        displayName.textContent = savedData.name || 'No disponible';
        displayEmail.textContent = savedData.email || 'No disponible';
        displayMessage.textContent = savedData.message || 'No disponible';
    } else {
        displayName.textContent = 'No disponible';
        displayEmail.textContent = 'No disponible';
        displayMessage.textContent = 'No disponible';
    }
});
