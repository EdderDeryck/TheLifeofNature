// Botão "O que posso fazer?"
document.getElementById('botao').addEventListener('click', () => {
  alert(
    "Você pode ajudar de várias formas:\n" +
    "🌳 Plante árvores: elas purificam o ar, protegem o solo e ajudam a regular o clima.\n\n" +
    "♻️ Reduza o consumo de plástico: use sacolas reutilizáveis, evite descartáveis e recicle sempre que possível.\n\n" +
    "💧 Economize água: pequenas ações como fechar a torneira ao escovar os dentes fazem diferença.\n\n" +
    "🌍 Consuma de forma consciente: prefira produtos sustentáveis, de origem local e sem crueldade animal.\n\n" +
    "🐾 Apoie ONGs ambientais: ajude financeiramente, como voluntário ou divulgando suas causas.\n\n" +
    "📢 Compartilhe conhecimento: eduque outras pessoas sobre a importância da natureza e inspire mudanças.\n\n" +
    "Juntos, podemos construir um futuro mais verde, equilibrado e justo para todos os seres vivos."
  );
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