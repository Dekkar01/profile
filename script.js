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
  const skillBars = document.querySelectorAll('.skill-progress');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const width = entry.target.style.width;
        entry.target.style.transition = 'width 1.5s ease-in-out';
        entry.target.style.width = '0';
        setTimeout(() => {
          entry.target.style.width = width;
        }, 300);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  skillBars.forEach(bar => {
    observer.observe(bar);
  });
});
