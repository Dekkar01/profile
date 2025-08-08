document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Sticky navigation
  const navbar = document.getElementById('navbar');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    if (lastScrollY < window.scrollY) {
      navbar.classList.add('nav-hidden');
    } else {
      navbar.classList.remove('nav-hidden');
    }

    lastScrollY = window.scrollY;
  });

  // Animation for skill bars
  // Анимация для таймлайна при скролле
  document.addEventListener('DOMContentLoaded', function () {
    const timelineItems = document.querySelectorAll('.timeline-item');

    const animateTimeline = () => {
      timelineItems.forEach(item => {
        const position = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight * 0.8;

        if (position < screenPosition) {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }
      });
    };

    // Инициализация анимации
    timelineItems.forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(30px)';
      item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    window.addEventListener('scroll', animateTimeline);
    animateTimeline(); // Проверить при загрузке

    // Анимация для карточек навыков
    const skillCards = document.querySelectorAll('.skill-card');
    let animated = false;

    const animateSkills = () => {
      if (animated) return;

      skillCards.forEach((card, index) => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight * 0.8;

        if (cardPosition < screenPosition) {
          setTimeout(() => {
            card.style.animation = `fadeInUp 0.6s forwards ${index * 0.1}s`;
          }, 100);
        }
      });

      animated = true;
    };

    window.addEventListener('scroll', animateSkills);
    animateSkills(); // Проверить при загрузке
  });
});
