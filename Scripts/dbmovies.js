document.addEventListener('DOMContentLoaded', () => {
    const videoSection = document.getElementById('videoSection');
    const videoFrame = document.getElementById('videoFrame');
    const episodeList = document.getElementById('episodeList');
  
    // Ajustar los episodios para la saga de películas
    const movies = {
      dragonBallMovies: [
        { title: 'Devuelveme a mi Gohan', url: 'https://mega.nz/embed/tuFyRKoC#ZI5Wgy9MEqwWPN86Ody9cGiiDX1wrBQhH81cW_tyXSA' },
        { title: 'El hombre mas fuerte de este mundo', url: 'https://mega.nz/embed/YzUhQACT#MI9C6YMiW5Gl7_CKoQclgQxtJ8mekingYS-A-JxWuRc' }
        
        
      ]
    };
  
    // Manejar clics en las tarjetas de saga
    document.querySelectorAll('.saga-card').forEach(card => {
      card.addEventListener('click', () => {
        const saga = card.dataset.saga;
  
        // Verificar si la saga es Dragon Ball Movies
        if (saga === 'dragonBallMovies') {
          const sagaMovies = movies[saga] || [];
  
          // Mostrar la sección del video
          videoSection.classList.remove('hidden');
  
          // Limpiar la lista de episodios
          episodeList.innerHTML = '';
  
          if (sagaMovies.length > 0) {
            // Cargar la primera película automáticamente
            videoFrame.src = sagaMovies[0].url;
  
            // Agregar películas a la lista
            sagaMovies.forEach(movie => {
              const movieLink = document.createElement('a');
              movieLink.href = '#';  // Usar '#' para que sea un enlace vacío
              movieLink.textContent = movie.title;
              movieLink.addEventListener('click', (e) => {
                e.preventDefault();  // Evitar el comportamiento predeterminado del enlace
                videoFrame.src = movie.url;
              });
              episodeList.appendChild(movieLink);
            });
          }
        }
      });
    });
});
