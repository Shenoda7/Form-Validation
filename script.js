"use strict";

const form = document.querySelector("#form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const email = document.querySelector("#email");

form.addEventListener("submit", (e) => {
  if (!validateInputs()) {
    e.preventDefault();
  }
});

function setError(element, message) {
  // element.textContent = message;
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.textContent = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
}

function setSuccess(element) {
  const inputControl = element.parentElement;
  const successDisplay = inputControl.querySelector(".success");

  if (successDisplay) {
    successDisplay.textContent = "";
  }
  inputControl.classList.add("success");
  inputControl.querySelector(".error").textContent = "";
  inputControl.classList.remove("error");
}

function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.toLowerCase());
}

function validateInputs() {
  let isValid = true;

  const usernameVal = username.value.trim(); //removes spaces before and after the string
  const passwordVal = password.value.trim();
  const password2Val = password2.value.trim();
  const emailVal = email.value.trim();

  if (usernameVal === "") {
    setError(username, "Username field is required");
    isValid = false;
  } else {
    setSuccess(username);
  }

  if (emailVal === "") {
    setError(email, "Email field is required");
    isValid = false;
  } else if (!isValidEmail(emailVal)) {
    setError(email, "Provide a valid email address");
    isValid = false;
  } else {
    setSuccess(email);
  }

  if (passwordVal === "") {
    setError(password, "Password field is required");
    isValid = false;
  } else if (passwordVal.length < 8) {
    setError(password, "password must be at least 8 characters");
    isValid = false;
  } else {
    setSuccess(password);
  }

  if (password2Val === "") {
    setError(password2, "Password Confirmation is required");
    isValid = false;
  } else if (password2Val !== passwordVal) {
    setError(password2, "Passwords do not match");
    isValid = false;
  } else {
    setSuccess(password2);
  }

  return isValid;
}
