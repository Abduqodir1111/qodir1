const modal = document.getElementById('bookingModal');
const openBtn = document.querySelector('.main-btn');
const closeBtn = document.getElementById('closeModalBtn');

openBtn.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // запретить прокрутку фоновой страницы
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.style.overflow = ''; // вернуть прокрутку
});

// Закрытие по клику вне содержимого
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
});
