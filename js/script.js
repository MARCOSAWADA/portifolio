// Função para alternar a visibilidade do menu e tornar o fundo do menu transparente
function toggleMenu() {
  const menu = document.getElementById('menu');  // Seleciona o menu
  menu.classList.toggle('active');  // Alterna a classe 'active' no menu
}


function toggleHover(imgElement) {
  imgElement.classList.toggle('img-hover');
}
