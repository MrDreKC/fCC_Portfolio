// Navbar Icon

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

// Scroll Reveal

ScrollReveal({ 
  reset: true,
  distance: '80px',
  duration: 1500,
  delay: 200
});

ScrollReveal().reveal('.intro-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.project-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.intro-content h1', { origin: 'left' });

// Typed JS

const typed = new Typed('.multiple-text', {
  strings: ['Web Designer', 'Gamer', 'Anime Fan', 'Comic Movie Guy'],
  typeSpeed: 90,
  backSpeed: 90,
  backDelay: 900,
  loop: true
})
