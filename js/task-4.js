const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", hendleSubmit);
function hendleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if (email === "" || password === "") {
    return alert(`All form fields must be filled in`);
  }

  console.log(`email: ${email},
password: ${password}`);
  form.reset();
}
