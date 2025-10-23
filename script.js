// 🌙☀️ Mode Toggle
const toggle = document.getElementById('modeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  toggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
});

// 🖋️ Typing Effect
const text = 'IT Support Specialist — troubleshooting jaringan, hardware, & helpdesk.';
let i = 0;
function typing() {
  if (i < text.length) {
    document.getElementById('typing').textContent += text.charAt(i);
    i++;
    setTimeout(typing, 40);
  }
}
typing();

// 🪄 Scroll Animations
const animatedEls = document.querySelectorAll('[data-animate]');
function animateOnScroll() {
  animatedEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) el.classList.add('visible');
  });
}
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
