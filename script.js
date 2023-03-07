const subscribeForm = document.querySelector('#subscribe-form');
const errorHint = document.querySelector('.error');
const emailField = document.querySelector('.textfield');

const mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,})$/;

function validateEmail() {
  if (emailField.value.match(mailformat)) {
    errorHint.style.display = 'none';
    emailField.classList.remove('textfield-error');
    return true;
  }
  errorHint.style.display = 'block';
  emailField.classList.add('textfield-error');
  return false;
}

emailField.addEventListener('change', () => {
  validateEmail();
});

subscribeForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (validateEmail()) {
    alert('Valid. POST request template');
    e.target.reset();
  }
});
