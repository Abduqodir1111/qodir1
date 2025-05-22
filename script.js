window.addEventListener('load', () => {
  const introScreen = document.getElementById('intro-screen');
  const mainContent = document.getElementById('main-content');
  const letters = document.querySelectorAll('#animated-text .letter');

  // Добавляем класс с анимацией и задержкой для каждой буквы
  letters.forEach((letter, i) => {
    letter.style.animationDelay = `${i * 0.1}s`;
    letter.classList.add('slide-bck-top');
  });

  // Скрываем заставку через 3 секунды (или чуть позже, чтобы анимация успела проиграться)
  setTimeout(() => {
    introScreen.style.opacity = '0';
    introScreen.style.pointerEvents = 'none';

    setTimeout(() => {
      introScreen.style.display = 'none';
      mainContent.classList.add('show');
    }, 1000);
  }, letters.length * 100 + 2000); // время анимации букв + небольшой запас
});
// После существующего кода
const menuToggle = document.getElementById('menuToggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});
