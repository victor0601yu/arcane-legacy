/**
 * Intersection Observer for scroll animations
 */
export function initObserver() {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); 
      }
    });
  }, options);

  const animatedElements = document.querySelectorAll('.fade-in-up');
  animatedElements.forEach(el => sectionObserver.observe(el));
}
