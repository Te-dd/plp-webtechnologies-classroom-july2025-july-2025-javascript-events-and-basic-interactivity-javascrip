// 🚀 Part 1: Event Handling
const clickBtn = document.getElementById("clickBtn");
const clickMessage = document.getElementById("clickMessage");
clickBtn.addEventListener("click", () => {
  clickMessage.textContent = "Button was clicked! 🎉";
});

const typingInput = document.getElementById("typingInput");
const typingMessage = document.getElementById("typingMessage");
typingInput.addEventListener("input", () => {
  typingMessage.textContent = "You typed: " + typingInput.value;
});

// 🚀 Part 2: Interactive Elements
// Light/Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let count = 0;
const counter = document.getElementById("counter");
document.getElementById("increment").onclick = () => {
  count++;
  counter.textContent = count;
};
document.getElementById("decrement").onclick = () => {
  count--;
  counter.textContent = count;
};

// FAQ Toggle
const faqQuestion = document.querySelector(".faq-question");
const faqAnswer = document.querySelector(".faq-answer");
faqQuestion.addEventListener("click", () => {
  faqAnswer.style.display = faqAnswer.style.display === "none" ? "block" : "none";
});

// 🚀 Part 3: Form Validation
const form = document.getElementById("myForm");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop form from submitting
  let valid = true;

  // Validate Name
  if (nameField.value.trim() === "") {
    nameError.textContent = "Name is required!";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Validate Email (basic regex)
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailRegex.test(emailField.value.trim())) {
    emailError.textContent = "Enter a valid email!";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Validate Password (at least 6 characters)
  if (passwordField.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters!";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // If all valid
  if (valid) {
    formMessage.textContent = "Form submitted successfully ✅";
    formMessage.style.color = "green";
  } else {
    formMessage.textContent = "Please fix errors above ❌";
    formMessage.style.color = "red";
  }
});
