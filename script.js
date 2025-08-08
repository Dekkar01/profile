document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const menuList = document.getElementById('menu-list');

  menuToggle.addEventListener('click', function () {
    menuList.classList.toggle('active');
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      // Close mobile menu if open
      if (menuList.classList.contains('active')) {
        menuList.classList.remove('active');
      }

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

  // Animation for elements when they come into view
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.proj-cards, .edu-card, .skill-card');

    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight * 0.8;

      if (elementPosition < screenPosition) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  // Initialize elements with hidden state
  document.querySelectorAll('.proj-cards, .edu-card, .skill-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Initial check
});