const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const firstName = document.getElementById("first-name");
  const firstNameError = document.getElementById("first-name-error");
  const lastName = document.getElementById("last-name");
  const lastNameError = document.getElementById("last-name-error");
  const email = document.getElementById("email");
  const emailError = document.getElementById("email-error");
  const radioButtons = document.querySelectorAll("input[name='query-type']");
  const queryError = document.getElementById("query-error");
  const message = document.getElementById("message");
  const messageError = document.getElementById("message-error");
  const consentContact = document.getElementById("consent-contact");
  const consentError = document.getElementById("consent-error");
  const success = document.getElementById("success");
  let valid = true;

  if (!firstName.value) {
    firstNameError.classList.add("active");
    valid = false;
  } else {
    firstNameError.classList.remove("active");
  }

  if (!lastName.value) {
    lastNameError.classList.add("active");
    valid = false;
  } else {
    lastNameError.classList.remove("active");
  }

  if (!email.value.includes("@")) {
    emailError.classList.add("active");
    valid = false;
  } else {
    emailError.classList.remove("active");
  }

  if (![...radioButtons].some((btn) => btn.checked)) {
    queryError.classList.add("active");
    valid = false;
  } else {
    queryError.classList.remove("active");
  }

  if (!message.value) {
    messageError.classList.add("active");
    valid = false;
  } else {
    messageError.classList.remove("active");
  }

  if (!consentContact.checked) {
    consentError.classList.add("active");
    valid = false;
  } else {
    consentError.classList.remove("active");
  }

  if (valid) {
    form.reset();
    success.classList.add("active");
    await new Promise((resolve) => setTimeout(resolve, 10000));
    success.classList.remove("active");
  }
});
