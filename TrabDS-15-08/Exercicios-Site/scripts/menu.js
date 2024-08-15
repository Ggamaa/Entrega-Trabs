//funcao clique

// Selecione todos os itens do menu
var menuItems = document.querySelectorAll('.item-menu');

// Adicione um evento de click em cada item do menu
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', (event) => {
    // Remova a classe ativo de todos os itens do menu
    menuItems.forEach((item) => item.classList.remove('ativo'));

    // Adicione a classe ativo ao item clicado
    menuItem.classList.add('ativo');
  });
});