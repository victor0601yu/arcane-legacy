/**
 * Artifact Gallery Slider (3D Carousel)
 */
export function initGallery() {
  const track = document.getElementById('gallery-track');
  const btnPrev = document.getElementById('gallery-prev');
  const btnNext = document.getElementById('gallery-next');
  const descText = document.getElementById('artifact-desc');
  
  if (!track || !descText) return;

  const artifactsData = [
    { title: "虛空核心", desc: "將游標進入核心引力範圍，感受純粹虛空能量的重力波動。" },
    { title: "星界法陣", desc: "觸摸古老的星辰符文，喚醒已經失傳千年的召喚魔法陣。" },
    { title: "幽影晶石", desc: "由深淵精華凝結而成的黑暗物質，蘊藏著極度不穩定的能量。" }
  ];

  const slides = document.querySelectorAll('.artifact-slide');
  let currentSlide = 0;

  function updateGallery() {
    const anglePerSlide = 120;
    const rotateAngle = currentSlide * -anglePerSlide;
    track.style.transform = `translateZ(-500px) rotateY(${rotateAngle}deg)`;
    
    const normalizedIndex = ((currentSlide % 3) + 3) % 3;
    
    slides.forEach((slide, index) => {
      if (index === normalizedIndex) {
        slide.style.opacity = '1';
        slide.style.pointerEvents = 'auto';
      } else {
        slide.style.opacity = '0.2';
        slide.style.pointerEvents = 'none';
      }
    });

    // Update description text with fade effect
    descText.style.opacity = '0';
    setTimeout(() => {
      descText.textContent = `【${artifactsData[normalizedIndex].title}】 - ${artifactsData[normalizedIndex].desc}`;
      descText.style.opacity = '1';
    }, 200);
  }

  if (btnPrev && btnNext) {
    btnNext.addEventListener('click', () => { currentSlide++; updateGallery(); });
    btnPrev.addEventListener('click', () => { currentSlide--; updateGallery(); });
  }

  // Initialize
  updateGallery();
}
