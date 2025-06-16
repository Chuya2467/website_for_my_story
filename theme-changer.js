
const themes = ['light', 'dark'];

function applyTheme(name) {
  themes.forEach(t => body.classList.remove(`${t}-theme`));
  body.classList.add(`${name}-theme`);
  localStorage.setItem('theme', name);
}

document.addEventListener('DOMContentLoaded', () => {
  applyTheme(localStorage.getItem('theme') || 'default');
});