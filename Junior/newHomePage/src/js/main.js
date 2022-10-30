import '../sass/main.scss';

const navToggle = document.querySelector('.menu-button');
const nav = document.querySelector('nav');

const bodyClassList = document.body.classList;

navToggle.addEventListener('click', (_) => {
  bodyClassList.toggle('nav-is-open');
});

nav.addEventListener('click', () => {
  bodyClassList.remove('nav-is-open');
});
