document.addEventListener('DOMContentLoaded', () => {
    // Cargar datos del localStorage si existen
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');

    const savedData = JSON.parse(localStorage.getItem('formData'));

    if (savedData) {
        nameField.value = savedData.name || '';
        emailField.value = savedData.email || '';
        messageField.value = savedData.message || '';
    }

    // Manejar el envío del formulario
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = {
            name: nameField.value,
            email: emailField.value,
            message: messageField.value
        };

        localStorage.setItem('formData', JSON.stringify(formData));
        alert('Datos guardados exitosamente.');
    });
});
