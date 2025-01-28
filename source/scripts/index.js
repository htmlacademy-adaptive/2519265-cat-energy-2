/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('.nav-menu');
const navToggle = document.querySelector('.button-menu');

const map = document.querySelector('.map');
const mapImage = document.querySelector('.map__image');

navMain.classList.remove('nav-menu--nojs');
navToggle.classList.remove('button-menu--nojs');

map.classList.remove('map--nojs');
mapImage.classList.remove('map__image--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('nav-menu--closed')) {
    navMain.classList.remove('nav-menu--closed');
    navToggle.classList.remove('button-menu--closed');
    navMain.classList.add('nav-menu--open');
    navToggle.classList.add('button-menu--open');
  } else {
    navMain.classList.add('nav-menu--closed');
    navToggle.classList.add('button-menu--closed');
    navMain.classList.remove('nav-menu--open');
    navToggle.classList.remove('button-menu--open');
  }
});

const slider = document.querySelector('.slider');
const range = document.querySelector('.slider__range-js');
range.addEventListener('input', () => {
  slider.style.setProperty('--value', `${range.value }%`);
});
