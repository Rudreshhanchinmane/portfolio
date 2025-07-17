// index.js

// Smooth scroll for internal anchor links (if you add them)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Highlight current nav link (optional enhancement)
  window.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    const currentPath = window.location.pathname.split("/").pop();
  
    navLinks.forEach(link => {
      if (link.getAttribute("href") === currentPath) {
        link.style.borderBottom = "2px solid #f1faee";
      }
    });
  });