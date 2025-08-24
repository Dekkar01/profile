document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });

        // Close mobile menu if open
        document.querySelector('#menu-list ul').classList.remove('active');
        document.querySelector('.hamburger').classList.remove('active');
      }
    });
  });

  // Navbar background on scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.style.backgroundColor = 'rgba(10, 25, 47, 0.95)';
      navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.backgroundColor = 'rgba(10, 25, 47, 0.9)';
      navbar.style.boxShadow = 'none';
    }
  });

  // Create particles for background
  const particlesContainer = document.getElementById('particles-container');
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    const size = Math.random() * 20 + 5;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.opacity = Math.random() * 0.5 + 0.1;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;

    particlesContainer.appendChild(particle);
  }

  // Floating photo effect
  const floatingPhoto = document.querySelector('.floating-photo');
  const photoTriggers = document.querySelectorAll('.photo-trigger');

  photoTriggers.forEach(trigger => {
    trigger.addEventListener('mouseenter', () => {
      floatingPhoto.style.opacity = 1;
      floatingPhoto.style.transform = 'translateY(-50%) scale(1)';
    });

    trigger.addEventListener('mouseleave', () => {
      floatingPhoto.style.opacity = 0;
      floatingPhoto.style.transform = 'translateY(-50%) scale(0.2)';
    });
  });

  // Animation on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = `fadeIn 0.8s forwards`;
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('section, .project-card, .timeline-item, .hex-item').forEach(el => {
    el.style.opacity = 0;
    observer.observe(el);
  });

  // Hamburger menu functionality
  const hamburger = document.querySelector('.hamburger');
  const menuList = document.querySelector('#menu-list ul');

  hamburger.addEventListener('click', () => {
    menuList.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    const isClickInsideMenu = menuList.contains(e.target) || hamburger.contains(e.target);
    if (!isClickInsideMenu && menuList.classList.contains('active')) {
      menuList.classList.remove('active');
      hamburger.classList.remove('active');
    }
  });

  // Switch theme

  let themeBtn = document.querySelector('#switch-btn');

  themeBtn.addEventListener('click', function (e) {

    if (document.documentElement.getAttribute('data-theme') === 'light') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }

  });
});

