const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  // Toggle class 'show' saat menuToggle diklik
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
  });

  const elements = document.querySelectorAll(
  '.fade-in-scroll, .slide-in-top, .slide-in-left, .slide-in-right'
);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      //observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

elements.forEach(el => observer.observe(el));
