const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
  const nombre = nameInput.value|| 'Anonymous';
  nameOutput.textContent = nombre;
});