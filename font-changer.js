
const body = document.body;
const fonts = ['default', 'bionic', 'serif', 'mono'];

function applyFont(name) {
  fonts.forEach(f => body.classList.remove(`${f}-font`));
  body.classList.add(`${name}-font`);
  localStorage.setItem('font', name);
}

document.addEventListener('DOMContentLoaded', () => {
  applyFont(localStorage.getItem('font') || 'default');
});