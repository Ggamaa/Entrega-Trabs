//expandir menu
const btnExpandir = document.querySelector('.btn-exp');
const menuLateral = document.querySelector('nav.menu-lateral');

btnExpandir.addEventListener('click', () => {
  menuLateral.classList.toggle('expandir');
});