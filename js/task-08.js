const form = document.querySelector('.login-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (!email || !password) {
      alert('Todos los campos deben ser rellenados');
      return;
    }

    const formData = {
      email,
      password,
    };

    console.log(formData);

    form.reset();
  });
