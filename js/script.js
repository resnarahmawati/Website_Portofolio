const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  // Toggle class 'show' saat menuToggle diklik
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
  });