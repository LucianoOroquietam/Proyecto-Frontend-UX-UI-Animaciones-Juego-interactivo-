const menuHamburguesa = document.getElementById('menu-hamburguesa');
const menu = document.getElementById('menu');
const menuItems = menu.querySelectorAll('li');

menuHamburguesa.addEventListener('click', () => {
    menuHamburguesa.classList.toggle('activo');
    menu.classList.toggle('activo');

    // Añadir animación a cada ítem al abrir el menú
    if (menu.classList.contains('activo')) {
        menuItems.forEach((item, index) => {
            item.style.animation = `aparecer 0.5s forwards ${index + 0.5}s`;
        });
    } else {
        // Remover animación al cerrar el menú
        menuItems.forEach((item) => {
            item.style.animation = 'none';
        });
    }
});




