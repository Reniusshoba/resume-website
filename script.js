// Optional: You already have scroll-behavior: smooth in CSS
// This script is empty for now – can add features like theme switch, etc.
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});