
const html = document.documentElement;
const themeToggle = document.querySelector('#theme-toggle');

function updateToggleLabel() {
  themeToggle.textContent = html.dataset.theme === 'dark' ? 'Light mode' : 'Dark mode';
}

themeToggle.addEventListener('click', () => {
  html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
  updateToggleLabel();
});

updateToggleLabel();



const form = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const formStatus = document.querySelector('#form-status');

// something@something.something, with no spaces
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function showError(input, message) {
  document.querySelector(`#${input.id}-error`).textContent = message;
  input.setAttribute('aria-invalid', 'true');
}

function clearError(input) {
  document.querySelector(`#${input.id}-error`).textContent = '';
  input.removeAttribute('aria-invalid');
}

form.addEventListener('submit', (event) => {
  event.preventDefault(); // stop the browser from reloading the page

  [nameInput, emailInput, messageInput].forEach(clearError);
  formStatus.textContent = '';
  formStatus.className = 'form-status';

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();
  const problems = [];

  if (name === '') {
    problems.push([nameInput, 'Please type your full name.']);
  }

  if (email === '') {
    problems.push([emailInput, 'Please enter your email address.']);
  } else if (!EMAIL_PATTERN.test(email)) {
    problems.push([emailInput, 'This email address looks wrong. Use the format name@example.com.']);
  }

  if (message === '') {
    problems.push([messageInput, 'Please write a message.']);
  }

  if (problems.length > 0) {
    problems.forEach(([input, text]) => showError(input, text));
    formStatus.textContent = 'Please fix the highlighted fields and try again.';
    formStatus.classList.add('form-status--error');
    problems[0][0].focus(); // move the keyboard to the first problem
    return;
  }

  formStatus.textContent = `Thank you, ${name}! Your details look good. This demo form checks your input but does not send it anywhere.`;
  formStatus.classList.add('form-status--success');
  form.reset();
});

// remove an error as soon as the visitor starts fixing that field
[nameInput, emailInput, messageInput].forEach((input) => {
  input.addEventListener('input', () => clearError(input));
});