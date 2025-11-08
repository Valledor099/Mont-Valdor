const Menu = document.querySelector('.menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const exit = document.querySelector('.salir');
const Opcion1 = document.querySelector('#op1');
const scrollTopBtn = document.getElementById('scrollTop');

Menu.addEventListener('click', () => {
    offScreenMenu.classList.toggle('active');
});

exit.addEventListener('click', () => {
  offScreenMenu.classList.remove('active');
});

Opcion1.addEventListener('click', () => {
  offScreenMenu.classList.remove('active');
});

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



