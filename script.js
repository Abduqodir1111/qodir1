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
openBtn.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
  document.body.style.overflow = '';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }
});

// Функция для появления элементов при скролле
function scrollReveal() {
  const reveals = document.querySelectorAll('.scroll-reveal');

  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 150; // насколько элемент должен войти в зону видимости

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
}

// Запускаем при загрузке и при прокрутке страницы
window.addEventListener('scroll', scrollReveal);
window.addEventListener('load', scrollReveal);
