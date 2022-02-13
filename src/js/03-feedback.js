import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
// const formData = {
//   email: document.querySelector('.feedback-form input'),
//   message: document.querySelector('.feedback-form textarea'),
// };

const form = document.querySelector('.feedback-form');
const newSaveForm = {};
form.addEventListener('submit', onSubmit);
form.addEventListener('input', throttle(onInput, 500));
saveInput();
//------------------
function onSubmit(event) {
  event.preventDefault();
  const formSend = new FormData(event.currentTarget);
  formSend.forEach((value, name) => {
    newSaveForm[name] = value;
  });
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
//-------------------
function onInput(event) {
  newSaveForm.email = form.elements.email.value;
  newSaveForm.message = form.elements.message.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newSaveForm));
}
//--------------------
function saveInput(event) {
  const saveMessage = localStorage.getItem(STORAGE_KEY);
  if (saveMessage) {
    const { email, message } = JSON.parse(saveMessage);
    form.email.value = email;
    form.message.value = message;
    newSaveForm.email = email;
    newSaveForm.message = message;
  }
}
