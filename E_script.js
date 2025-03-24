// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Fade-in animations for sections
gsap.utils.toArray('section').forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  });
});

// Animate buttons on hover
document.querySelectorAll('.btn').forEach((button) => {
  button.addEventListener('mouseenter', () => {
    gsap.to(button, { scale: 1.1, duration: 0.3 });
  });
  button.addEventListener('mouseleave', () => {
    gsap.to(button, { scale: 1, duration: 0.3 });
  });
});


