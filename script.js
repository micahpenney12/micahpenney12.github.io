// ── SCROLL REVEAL ──
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// ── CONTACT FORM ──
// No backend required — opens the user's default email client as a fallback.
function handleSubmit(e) {
  e.preventDefault();
  const name    = document.getElementById('name').value;
  const email   = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  const status  = document.getElementById('form-status');

  const mailto = `mailto:micah@example.com?subject=${encodeURIComponent(subject || 'Portfolio Contact')}&body=${encodeURIComponent(`From: ${name} <${email}>\n\n${message}`)}`;
  window.location.href = mailto;

  status.style.display = 'block';
  status.textContent = 'Opening your email client…';
}