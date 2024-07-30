function openMenu() {
    // Crea el contenedor del modal
    const menuModal = document.createElement('div');
    menuModal.className = 'menu-modal';
    menuModal.id = 'menuModal';

    // Crea el contenido del modal
    const menuContent = document.createElement('div');
    menuContent.className = 'menu-content';

    // Crea el botón de cerrar
    const closeButton = document.createElement('button');
    closeButton.className = 'menu-close';
    closeButton.textContent = 'X';
    closeButton.onclick = () => closeMenu(menuModal);

    
    const links = ['Carne 200gr', 'lechuga', 'Tomate', 'Tocineta', 'Queso chedar'];
    links.forEach(linkText => {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = linkText;
        menuContent.appendChild(link);
    });

    menuContent.insertBefore(closeButton, menuContent.firstChild);
    menuModal.appendChild(menuContent);
    document.body.appendChild(menuModal);
    menuModal.style.display = 'flex';
}

function closeMenu(menuModal) {
    document.body.removeChild(menuModal);
}

document.getElementById('menuBtn').onclick = openMenu;
