const items = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.18 }
);

items.forEach((item, idx) => {
  item.style.transitionDelay = `${Math.min(idx * 70, 280)}ms`;
  observer.observe(item);
});
