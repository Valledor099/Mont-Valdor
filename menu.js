const Menu = document.querySelector('.menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const exit = document.querySelector('.salir');
const Opcion1 = document.querySelector('#op1');

Menu.addEventListener('click', () => {
    offScreenMenu.classList.toggle('active');
});

exit.addEventListener('click', () => {
  offScreenMenu.classList.remove('active');
});

Opcion1.addEventListener('click', () => {
  offScreenMenu.classList.remove('active');
});


