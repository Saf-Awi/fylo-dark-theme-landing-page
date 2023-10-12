const emailForm = document.getElementById('email-form');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');

emailForm.addEventListener('submit', function (e) {
  e.preventDefault(); 

  const email = emailInput.value;

  if (validateEmail(email)) {
    errorMessage.textContent = '';
  } else {
    errorMessage.textContent = 'Please enter a valid email address';
  }
});

function validateEmail(email) {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
}





