// ================= MOBILE MENU =================
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ================= SCROLL REVEAL ANIMATION =================
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  revealElements.forEach((element) => {

    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      element.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
