// Navigation functionality: smooth scroll and active section tracking

// Smooth scroll to sections
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Scroll tracking - update active section
const sections = ['about', 'experience', 'skills', 'certifications'];
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
  for (let sectionId of sections) {
    const element = document.getElementById(sectionId);
    if (!element) continue;

    const rect = element.getBoundingClientRect();

    // If section is in view (within 300px from top)
    if (rect.top >= 0 && rect.top <= 300) {
      // Remove active from all
      navLinks.forEach(link => link.classList.remove('active'));

      // Add active to current
      const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
      break;
    }
  }
}

// Throttle scroll events for performance using requestAnimationFrame
let scrollTimeout;
window.addEventListener('scroll', () => {
  if (scrollTimeout) {
    window.cancelAnimationFrame(scrollTimeout);
  }
  scrollTimeout = window.requestAnimationFrame(updateActiveNav);
});

// Initial call
updateActiveNav();

console.log('Navigation script loaded');
