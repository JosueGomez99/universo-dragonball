document.addEventListener('DOMContentLoaded', () => {
  const videoSection = document.getElementById('videoSection');
  const videoFrame = document.getElementById('videoFrame');
  const episodeList = document.getElementById('episodeList');

  // Ajustar los episodios según la saga correcta
  const episodes = {
    dragonBallZ: [
      { title: 'Episodio 1', url: 'https://mega.nz/embed/trkUBR6Z#UNEASdQc1Ool9_Omq0YIlKjgYQ4PUaTf9dQ5dJX8M1Y' },
      { title: 'Episodio 2', url: 'https://mega.nz/embed/p28jkDDR#Qofd6DIPOmfLFXp-Gj1wT4dhd79cLdO_iIldVrknn-U' }
      // Agregar más episodios aquí con enlaces de MEGA si los tienes
    ]
  };

  // Manejar clics en las tarjetas de saga
  document.querySelectorAll('.saga-card').forEach(card => {
    card.addEventListener('click', () => {
      const saga = card.dataset.saga;

      // Verificar si la saga es Dragon Ball Z
      if (saga === 'dragonBallZ') {
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
