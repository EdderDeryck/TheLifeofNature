// Botão "O que posso fazer?"
document.getElementById('botao').addEventListener('click', () => {
  alert("Você pode: plantar árvores, reduzir o consumo de plástico, economizar água, apoiar ONGs ambientais e compartilhar conhecimento. 🌱");
});

// Botão "Explorar"
document.getElementById('explorar').addEventListener('click', () => {
  document.getElementById('importancia').scrollIntoView({ behavior: 'smooth' });
});

// Header dinâmico
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  header.style.background = window.scrollY > 60 ? 'rgba(27, 94, 32, 0.95)' : 'rgba(27, 94, 32, 0.9)';
});

// Animação de aparição
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

sections.forEach(sec => observer.observe(sec));