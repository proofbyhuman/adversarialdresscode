const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const bagCount = document.querySelector('.bag span');
let count = 0;

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('is-open', !open);
});

document.querySelectorAll('.add-cart').forEach((button) => {
  button.addEventListener('click', () => {
    count += 1;
    if (bagCount) bagCount.textContent = count;
  });
});

document.querySelector('.newsletter form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector('button');
  button.textContent = 'Listo ✓';
  event.currentTarget.querySelector('input').value = '';
});
