document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const formMsg = document.getElementById('formMsg');

  if (!name.value || !email.value || !message.value) {
    formMsg.textContent = 'Please fill in all fields.';
    formMsg.style.color = 'red';
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    formMsg.textContent = 'Please enter a valid email.';
    formMsg.style.color = 'red';
    return;
  }

  formMsg.textContent = 'Message sent successfully!';
  formMsg.style.color = 'green';
  this.reset();
});