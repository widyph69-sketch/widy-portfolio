// 🌙☀️ Mode Toggle
const toggle = document.getElementById('modeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  toggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
});

// 🖋️ Typing Effect dengan warna animasi
const text = 'IT Support Specialist — troubleshooting jaringan, hardware, & helpdesk.';
let i = 0;
function typing() {
  const target = document.getElementById('typing');
  if (i < text.length) {
    target.textContent += text.charAt(i);
    target.style.background = `linear-gradient(90deg, #06b6d4 ${(i%100)}%, #818cf8)`;
    target.style.webkitBackgroundClip = 'text';
    target.style.webkitTextFillColor = 'transparent';
    i++;
    setTimeout(typing, 40);
  }
}
typing();

// 🪄 Scroll Animations (fade + slide)
const animatedEls = document.querySelectorAll('[data-animate]');
function animateOnScroll() {
  animatedEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) el.classList.add('visible');
  });
}
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
