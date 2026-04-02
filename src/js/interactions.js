/**
 * 3D Tilt Interaction & Mobile Fallbacks
 */
export function initInteractions() {
  const artifacts = document.querySelectorAll('.interactive-3d');
  const isTouchDevice = 'ontouchstart' in window;

  artifacts.forEach(container => {
    let rect = null;
    let isAFRequest = false;

    // Standard Desktop Hover
    if (!isTouchDevice) {
      container.addEventListener('mouseenter', () => {
        container.classList.add('active-magic');
        rect = container.getBoundingClientRect();
      });

      container.addEventListener('mousemove', (e) => {
        if (!rect || isAFRequest) return;
        isAFRequest = true;

        window.requestAnimationFrame(() => {
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          const tiltX = -(y / 5);
          const tiltY = (x / 5);
          container.style.transform = `scale(1.1) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
          isAFRequest = false;
        });
      });

      container.addEventListener('mouseleave', () => {
        container.classList.remove('active-magic');
        container.style.transform = 'scale(1) rotateX(0deg) rotateY(0deg)';
        rect = null;
      });
    } else {
      // Mobile Handling: Handle tap as toggling "active" state or add auto-float
      container.addEventListener('touchstart', () => {
        container.classList.add('active-magic');
      }, { passive: true });
      
      container.addEventListener('touchend', () => {
        setTimeout(() => container.classList.remove('active-magic'), 2000);
      }, { passive: true });

      // Add a subtle perpetual "breathing" tilt for mobile
      let angle = 0;
      function mobileAnimate() {
        if (container.classList.contains('active-magic')) {
          angle += 0.05;
          const tilt = Math.sin(angle) * 10;
          container.style.transform = `scale(1.05) rotateX(${tilt}deg) rotateY(${tilt}deg)`;
        } else {
          container.style.transform = 'scale(1) rotateX(0deg) rotateY(0deg)';
        }
        window.requestAnimationFrame(mobileAnimate);
      }
      // Only start if it's actually touch
      window.requestAnimationFrame(mobileAnimate);
    }
  });
}
