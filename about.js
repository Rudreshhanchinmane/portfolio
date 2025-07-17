// about.js

// Scroll to top when page is loaded
window.onload = function () {
    window.scrollTo(0, 0);
  };
  
  // Optional: Add simple fade-in animation for content
  document.addEventListener('DOMContentLoaded', () => {
    const aboutContainer = document.querySelector('.about-container');
    aboutContainer.style.opacity = 0;
    aboutContainer.style.transition = 'opacity 1s ease-in-out';
  
    setTimeout(() => {
      aboutContainer.style.opacity = 1;
    }, 300);
  });