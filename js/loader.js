window.onload = function () {
    const container = document.getElementById('loader-container');
  
    // Tamanhos Personalizados
    const spinnerSize = 80; // Tamanho do círculo
    const spinnerBorder = 8; // Espessura da borda
    const textSize = 20; // Tamanho da fonte do texto
  
    // Loader de Círculo Giratório
    const spinner = document.createElement('div');
    spinner.classList.add('spinner');
  
    // Loader de Texto "Carregando..."
    const textLoader = document.createElement('div');
    textLoader.classList.add('text-loader');
    textLoader.textContent = 'Carregando...';
  
    // Adiciona os loaders ao container
    container.appendChild(spinner);
    container.appendChild(textLoader);
  
    // Estilos para os loaders
    const style = document.createElement('style');
    style.innerHTML = `
      #loader-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-color: #f9f9f9;
      }
  
      /* Loader de Círculo Giratório */
      .spinner {
        border: ${spinnerBorder}px solid transparent; /* Transparente ao invés de branco */
        border-top: ${spinnerBorder}px solid #3498db; /* Apenas a borda superior visível */
        border-radius: 50%;
        width: ${spinnerSize}px;
        height: ${spinnerSize}px;
        animation: spin 1s linear infinite;
        margin-bottom: 20px;
      }
  
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
  
      /* Loader de Texto "Carregando..." */
      .text-loader {
        font-size: ${textSize}px;
        font-family: Arial, sans-serif;
        color: #333;
        animation: fade 1.5s infinite alternate;
      }
  
      @keyframes fade {
        0% { opacity: 1; }
        100% { opacity: 0.5; }
      }
    `;
    document.head.appendChild(style);
  };
  