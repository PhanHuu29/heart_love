function openCard() {
    const card = document.querySelector('.card');
    card.classList.add('open');
    card.classList.remove('hidden');
  }
  
  function closeCard() {
    const card = document.querySelector('.card');
    card.classList.remove('open');
    card.classList.add('hidden');
  }
  