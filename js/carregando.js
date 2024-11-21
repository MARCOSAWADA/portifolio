window.onload = function() {
    const container = document.getElementById('progress-bar-container');
  
    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
  
    const progress = document.createElement('div');
    progress.classList.add('progress');
    
    progressBar.appendChild(progress);
    container.appendChild(progressBar);
  
    // Estilos via JavaScript
    const style = document.createElement('style');
    style.innerHTML = `
      .progress-bar {
        width: 100%;
        height: 10px;
        background-color: #f3f3f3;
        border-radius: 5px;
      }
  
      .progress {
        width: 50%;  /* Modifique para simular o progresso */
        height: 100%;
        background-color: #3498db;
        border-radius: 5px;
        animation: load 3s infinite;
      }
  
      @keyframes load {
        0% { width: 0; }
        100% { width: 100%; }
      }
    `;
    document.head.appendChild(style);
  };