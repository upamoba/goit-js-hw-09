const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};


populateForm();

form.addEventListener('input', onInput);


form.addEventListener('submit', onSubmit);


function onInput(event) {
  const { name, value } = event.target;
  formData[name] = value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


function onSubmit(event) {
  event.preventDefault();

  const { email, message } = formData;

  if (email === '' || message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
}


function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (!savedData) return;

  formData = JSON.parse(savedData);

  form.elements.email.value = formData.email || '';
  form.elements.message.value = formData.message || '';
}