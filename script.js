window.addEventListener('load', () => {
  const introScreen = document.getElementById('intro-screen');
  const mainContent = document.getElementById('main-content');
  const letters = document.querySelectorAll('#animated-text .letter');

  letters.forEach((letter, i) => {
    letter.style.animationDelay = `${i * 0.1}s`;
    letter.classList.add('slide-bck-top');
  });

  setTimeout(() => {
    introScreen.style.opacity = '0';
    introScreen.style.pointerEvents = 'none';
    setTimeout(() => {
      introScreen.style.display = 'none';
      mainContent.classList.add('show');
    }, 1000);
  }, letters.length * 100 + 2000);
});

const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

document.querySelectorAll('.menu a, .dropdown-list a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});
