document.addEventListener('DOMContentLoaded', () => {
    const videoSection = document.getElementById('videoSection');
    const videoFrame = document.getElementById('videoFrame');
    const episodeList = document.getElementById('episodeList');
  
    // Ajustar los episodios para la saga Dragon Ball
    const episodes = {
      dragonBall: [
        { title: 'Episodio 1', url: 'https://mega.nz/embed/V2NmGBgQ#j19zPw4bEMaq_6WPr9ZCGSP3ZwbjI7Key90Hduilzk4' },
        { title: 'Episodio 2', url: 'https://mega.nz/embed/pzsC3Kya#l8tfG86kVomjvf5HryRD4XxhJNyUT2XHmK95jOzQcvI' },
        
        
        
      ]
    };
  
    // Manejar clics en las tarjetas de saga
    document.querySelectorAll('.saga-card').forEach(card => {
      card.addEventListener('click', () => {
        const saga = card.dataset.saga;
  
        // Verificar si la saga es Dragon Ball
        if (saga === 'dragonBall') {
          const sagaEpisodes = episodes[saga] || [];
  
          // Mostrar la sección del video
          videoSection.classList.remove('hidden');
  
          // Limpiar la lista de episodios
          episodeList.innerHTML = '';
  
          if (sagaEpisodes.length > 0) {
            // Cargar el primer episodio automáticamente
            videoFrame.src = sagaEpisodes[0].url;
  
            // Agregar episodios a la lista
            sagaEpisodes.forEach(episode => {
              const episodeLink = document.createElement('a');
              episodeLink.href = '#';  // Usar '#' para que sea un enlace vacío
              episodeLink.textContent = episode.title;
              episodeLink.addEventListener('click', (e) => {
                e.preventDefault();  // Evitar el comportamiento predeterminado del enlace
                videoFrame.src = episode.url;
              });
              episodeList.appendChild(episodeLink);
            });
          }
        }
      });
    });
  });
  