// Анимация заставки и текста при загрузке
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
    }, 500);
  }, 1000);
});

// Меню гамбургер и закрытие по клику
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
  menuToggle.setAttribute('aria-expanded', !expanded);
  menu.classList.toggle('active');
});

document.querySelectorAll('.menu a, .dropdown-list a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});

// Параллакс-эффект фона при прокрутке
window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset;
  document.body.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
});

// Появление блоков при прокрутке
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;

  reveals.forEach(reveal => {
    const elementTop = reveal.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveal.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Карта с автоинициализацией после появления блока
function initMapWhenVisible() {
  const mapSection = document.getElementById('map-section');
  const mapContainer = document.getElementById('map');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (!mapContainer.dataset.mapLoaded) {
          ymaps.ready(function () {
            const centerCoords = [41.2995, 69.2401]; // Центр: Ташкент

            const map = new ymaps.Map("map", {
              center: centerCoords,
              zoom: 11,
              controls: ['zoomControl', 'fullscreenControl'],
              behaviors: ['default', 'scrollZoom']
            });

            const branches = [
              { coords: [41.283867, 69.189104], name: "Чилонзор" },
              { coords: [41.346246, 69.346451], name: "Чимган" },
              { coords: [41.293425, 69.272551], name: "Ойбек" },
              { coords: [41.369865, 69.310554], name: "Юнусабод" },
              { coords: [41.281909, 69.351810], name: "Кадешева" },
              { coords: [41.314483, 69.327489], name: "Паркентский" },
              { coords: [41.335671, 69.265713], name: "Лабзак" },
              { coords: [41.318557, 69.357142], name: "Карасу" },
            ];

            branches.forEach(branch => {
              map.geoObjects.add(
                new ymaps.Placemark(branch.coords, {
                  balloonContent: branch.name
                }, {
                  iconLayout: 'default#image',
                  iconImageHref: 'logo1.png',
                  iconImageSize: [40, 40],
                  iconImageOffset: [-20, -20]
                })
              );
            });

            setTimeout(() => {
              map.setCenter(centerCoords, 11, { checkZoomRange: true });
              map.container.fitToViewport();
            }, 100);

            map.events.add('boundschange', function (e) {
              if (e.get('newZoom') !== e.get('oldZoom')) {
                map.setCenter(centerCoords);
              }
            });

            mapContainer.dataset.mapLoaded = "true";
          });
        }
      }
    });
  });

  observer.observe(mapSection);
}

window.addEventListener('DOMContentLoaded', initMapWhenVisible);

// === Переключение темы ===
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
  document.body.classList.add('light');
  themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');

  themeToggle.textContent = isLight ? '☀️' : '🌙';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');

  themeToggle.classList.add('animate-spin');

  setTimeout(() => {
    themeToggle.classList.remove('animate-spin');
  }, 600);
});

// Задержка показа основного контента после заставки
window.addEventListener('load', () => {
  setTimeout(() => {
    const intro = document.getElementById('intro-screen');
intro.classList.add('fade-out');

setTimeout(() => {
  intro.style.display = 'none';
  document.getElementById('main-content').classList.add('show');
}, 1000); // 1 секунда на анимацию

  }, 4000); // Пауза 2 сек + анимация 1 сек + запас
});

  function openModal() {
    document.getElementById("modal").style.display = "block";
  }

  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }

  window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  // При нажатии на кнопку, переключаем статус бронирования
document.querySelectorAll('.seat').forEach(button => {
  button.addEventListener('click', () => {
    if (!button.classList.contains('booked')) {
      button.classList.add('booked');
      button.textContent += ' (Забронировано)';
    } else {
      button.classList.remove('booked');
      button.textContent = button.textContent.replace(' (Забронировано)', '');
    }
  });
});
window.addEventListener('load', () => {
  initMapWhenVisible();
});

