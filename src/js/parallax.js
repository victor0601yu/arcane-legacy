/**
 * Parallax Scrolling & Navbar Logic
 */
export function initParallax() {
  const heroContent = document.querySelector(".hero-content");
  const heroBg = document.getElementById("hero-bg");
  const navbar = document.getElementById("navbar");
  let lastScrollY = window.scrollY;
  let ticking = false;

  function update() {
    const offset = window.scrollY;

    // Navbar Scroll Effect
    if (navbar) {
      if (offset > 50) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");
    }

    // Parallax logic only for hero
    if (offset < window.innerHeight) {
      if (heroBg) {
        heroBg.style.transform = `translateY(${offset * 0.4}px)`;
      }
      if (heroContent) {
        heroContent.style.transform = `translateY(${offset * 0.2}px)`;
        heroContent.style.opacity = 1 - offset * 0.002;
      }
    }

    ticking = false;
  }

  window.addEventListener("scroll", () => {
    lastScrollY = window.scrollY;
    if (!ticking) {
      // Use requestAnimationFrame for optimized performance
      window.requestAnimationFrame(update);
      ticking = true;
    }
  });

  // Run once to set initial state
  update();
}
