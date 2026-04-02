import { initParallax } from './js/parallax.js';
import { initGallery } from './js/gallery.js';
import { initObserver } from './js/observer.js';
import { initInteractions } from './js/interactions.js';

document.addEventListener("DOMContentLoaded", () => {
  // Initialize all modularized features
  initParallax();
  initGallery();
  initObserver();
  initInteractions();

  // Smooth Scroll for local buttons
  const startBtn = document.getElementById("start-btn");
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});
