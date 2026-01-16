// MENU MOBILE
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const menuLinks = menu.querySelectorAll('a');

menuToggle.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('active');
  menuToggle.textContent = isOpen ? '✕' : '☰';
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    menuToggle.textContent = '☰';
  });
});

// REVEAL ON SCROLL
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
