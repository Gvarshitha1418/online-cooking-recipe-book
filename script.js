// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target && target.scrollIntoView) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' })}
    }
  });
});

// Simple form validation (optional, if no backend is connected)
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', function (e) {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (!name.value || !email.value || !message.value) {
      e.preventDefault();
      alert('Please fill out all fields before submitting.');
    } else {
      alert('Message sent! Thank you for contacting us.');
    }
  });
}