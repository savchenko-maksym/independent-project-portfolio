const refs = {
  menuBtn: document.querySelector('.header-btn-js'),
  menuList: document.querySelector('.menu-list-js'),
  openMenuBtn: document.querySelector('[data-menu-open]'),
  closeMenuBtn: document.querySelector('[data-menu-close]'),
  mobMenu: document.querySelector('[data-menu]'),
  menuLinks: document.querySelectorAll('.mob-menu-js a'),
};

refs.menuBtn.addEventListener('click', menuToggle);

function menuToggle() {
  refs.menuList.classList.toggle('active');
}

function toggleMenu() {
  refs.mobMenu.classList.toggle('is-open');
  document.body.classList.toggle('no-scroll');
}

refs.openMenuBtn.addEventListener('click', toggleMenu);

refs.closeMenuBtn.addEventListener('click', toggleMenu);

refs.menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    refs.mobMenu.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  });
});
