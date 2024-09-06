document.addEventListener('DOMContentLoaded', () => {
    // Obtén todos los elementos con la clase 'saga-card'
    const sagaCards = document.querySelectorAll('.saga-card');
  
    sagaCards.forEach(card => {
      card.addEventListener('click', () => {
        // Mueve la vista a la sección del reproductor
        document.getElementById('videoSection').scrollIntoView({ behavior: 'smooth' });
      });
    });
  });
  