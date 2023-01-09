const NAV_MENU = document.querySelector('.menu__nav');
const BURGER_MENU = document.querySelector('.menu__burger');
const MENU_ITEM = document.querySelectorAll('.menu__item');

MENU_ITEM.forEach((ITEM) => {
  ITEM.addEventListener('click', () => {
    if (BURGER_MENU.classList.contains('_active')) {
      document.body.classList.remove('_lock');
      NAV_MENU.classList.remove('_active');
      BURGER_MENU.classList.remove('_active');
    }
  });
});

const openBurger = () => {
  document.body.classList.toggle('_lock');
  NAV_MENU.classList.toggle('_active');
  BURGER_MENU.classList.toggle('_active');
};

BURGER_MENU.addEventListener('click', openBurger);
