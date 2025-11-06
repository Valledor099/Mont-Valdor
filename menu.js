const Menu = document.querySelector('.menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const exit = document.querySelector('.salir');

Menu.addEventListener('click', () => {
    offScreenMenu.classList.toggle('active');
});

exit.addEventListener('click', () => {
  offScreenMenu.classList.remove('active');
});



