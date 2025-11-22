const Menu = document.querySelector('.menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const exit = document.querySelector('.salir');
const Opcion1 = document.querySelector('#op1');
const scrollTopBtn = document.getElementById('scrollTop');

// Abrir sidebar
Menu.addEventListener('click', () => {
    offScreenMenu.classList.toggle('active');
});

// Cerrar sidebar con la X
exit.addEventListener('click', () => {
    offScreenMenu.classList.remove('active');
});

// Cerrar sidebar al hacer click en INICIO
Opcion1.addEventListener('click', () => {
    offScreenMenu.classList.remove('active');
});

// Funcionalidad de scroll hacia arriba
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Funcionalidad de menú desplegable
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Obtener el elemento padre (li) y el submenú
        const parentLi = toggle.parentElement;
        const submenu = parentLi.querySelector('.submenu');
        const arrow = toggle.querySelector('.dropdown-arrow');
        
        // Toggle del submenú
        submenu.classList.toggle('active');
        arrow.classList.toggle('active');
    });
});

// Cerrar sidebar al hacer click en una opción del submenú
const submenuLinks = document.querySelectorAll('.submenu a');
submenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        offScreenMenu.classList.remove('active');
        // Cerrar todos los submenús
        document.querySelectorAll('.submenu').forEach(sub => {
            sub.classList.remove('active');
        });
        document.querySelectorAll('.dropdown-arrow').forEach(arrow => {
            arrow.classList.remove('active');
        });
    });
});