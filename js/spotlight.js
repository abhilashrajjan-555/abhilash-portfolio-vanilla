// Mouse spotlight effect - follows cursor with radial gradient

const spotlight = document.getElementById('spotlight');

let mouseX = 0;
let mouseY = 0;
let animationFrameId = null;

// Update mouse position
window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  // Request animation frame for smooth performance
  if (!animationFrameId) {
    animationFrameId = window.requestAnimationFrame(updateSpotlight);
  }
});

function updateSpotlight() {
  // Create radial gradient matching React version
  // 600px circle, rgba(29, 78, 216, 0.15) → transparent at 80%
  spotlight.style.background =
    `radial-gradient(600px at ${mouseX}px ${mouseY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;

  animationFrameId = null;
}

// Initialize with default position (center of screen)
mouseX = window.innerWidth / 2;
mouseY = window.innerHeight / 2;
updateSpotlight();

console.log('Spotlight effect loaded');
