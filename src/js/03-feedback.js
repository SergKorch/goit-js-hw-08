import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const formData = {
  btn: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};
console.log(formData)
saveInput();
saveTextarea();
formData.btn.addEventListener('submit', onSubmit);
formData.email.addEventListener('input', throttle(onInput, 500));
formData.message.addEventListener('input', throttle(onTextarea, 500));

function onSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
function onInput(event) {
  const email = event.target.value;
  localStorage.setItem(STORAGE_KEY, email);
}
function onTextarea(event) {
  const message = event.target.value;
  localStorage.setItem(STORAGE_KEY, message);
}
function saveInput(event) {
  const saveEmail = localStorage.getItem(STORAGE_KEY);
  console.log(saveEmail);
  if (saveEmail) {
    formData.email.value = saveEmail;
  }
}
function saveTextarea() {
  const saveMessage = localStorage.getItem(STORAGE_KEY);
  console.log(saveMessage);
  if (saveMessage) {
    formData.message.value = saveMessage;
  }
}
