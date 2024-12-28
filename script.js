document.addEventListener('DOMContentLoaded', function() {
  const circles = document.querySelectorAll('.skill-circle');
  circles.forEach(circle => {
    const percentage = circle.getAttribute('data-percentage');
    circle.style.setProperty('--percentage', percentage);
  });
});

