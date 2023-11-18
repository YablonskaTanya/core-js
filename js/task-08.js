const form = document.querySelector(".login-form");
console.log("form :>> ", form);

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const email = e.currentTarget.elements.email.value;
  const password = e.currentTarget.elements.password.value;
  if (!email || !password) {
    alert("всі поля повинні бути заповнені");
  } else {
    console.log(`Email: ${email},\nPassword: ${password}`);
  }
  form.reset();
}
