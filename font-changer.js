
const body = document.body;
const fonts = ['default', 'bionic', 'serif', 'mono'];

function applyFont(name) {
  fonts.forEach(f => body.classList.remove(`${f}-font`)); // используем f, не font
  body.classList.add(`${name}-font`);
  localStorage.setItem('font', name);
}

// Применить сохранённый шрифт при загрузке
document.addEventListener('DOMContentLoaded', () => {
  applyFont(localStorage.getItem('font') || 'default');
});