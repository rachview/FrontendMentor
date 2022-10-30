const menu = document.querySelectorAll('#menu');
const nav = document.querySelector('nav');
const bgfade = document.querySelector('.bg');
const close = document.querySelector('#close-menu-el');
const open = document.querySelector('#open-menu-el');
const featureBtn = document.querySelector('#feature-btn');
const companyBtn = document.querySelector('#company-btn');
const featureList = document.querySelector('#feature-list');
const companyList = document.querySelector('#company-list');
const featureArrow = document.querySelector('#feature-arrow');
const companyArrow = document.querySelector('#company-arrow');

menu.forEach((btn) => {
  btn.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    bgfade.classList.toggle('fade');
    if (nav.classList.contains('nav-open')) {
      open.style.display = 'none';
      close.style.display = 'block';
    } else {
      open.style.display = 'block';
      close.style.display = 'none';
    }
  });
});

featureBtn.addEventListener('mouseover', () => {
  // featureList.classList.toggle("hidden");
  // featureArrow.classList.toggle("rotate");
  openMenu(featureList, featureArrow);
});

companyBtn.addEventListener('mouseover', () => {
  // companyList.classList.toggle("hidden");
  // companyArrow.classList.toggle("rotate");
  openMenu(companyList, companyArrow);
});

function openMenu(list, arrow) {
  list.classList.toggle('hidden');
  arrow.classList.toggle('rotate');
  clearInterval(timer(list, arrow));
}

function timer(list, arrow) {
  setTimeout(() => {
    list.classList.toggle('hidden');
    arrow.classList.toggle('rotate');
  }, 4000);
}
