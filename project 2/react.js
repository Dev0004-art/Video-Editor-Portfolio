const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.getElementById("form");
let emailValid, nameValid, messageValid;

email.addEventListener("input", () => {
  let regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (regex.test(email.value)) {
    email.classList.remove("failed");
    email.classList.add("success");
    emailValid = true;
  } else {
    email.classList.remove("success");
    email.classList.add("failed");
    emailValid = false;
  }
});

name.addEventListener("input", () => {
  let regex = /^(\w){2,50}$/;
  if (regex.test(name.value)) {
    name.classList.remove("failed");
    name.classList.add("success");
    nameValid = true;
  } else {
    name.classList.remove("success");
    name.classList.add("failed");
    nameValid = false;
  }
});

message.addEventListener("input", () => {
  let regex = /^(.){10,500}$/;

  if (regex.test(message.value)) {
    message.classList.remove("failed");
    message.classList.add("success");
    messageValid = true;
  } else {
    message.classList.remove("success");
    message.classList.add("failed");
    messageValid = false;
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (nameValid && emailValid && messageValid) {
    form.submit();
    form.reset();
  } else {
    alert("error");
  }
});


