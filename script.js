// ------------------
// PART 1: EVENT HANDLING
// ------------------
const clickBtn = document.getElementById("clickBtn");
const message = document.getElementById("message");

clickBtn.addEventListener("click", () => {
  message.textContent = "Button was clicked!";
});

// ------------------
// PART 2: INTERACTIVE ELEMENTS
// ------------------

// Light/Dark Mode
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
const counter = document.getElementById("counter");
document.getElementById("increment").addEventListener("click", () => {
  count++;
  counter.textContent = count;
});
document.getElementById("decrement").addEventListener("click", () => {
  count--;
  counter.textContent = count;
});

// Collapsible FAQ
const faqQuestion = document.querySelector(".faq-question");
const faqAnswer = document.querySelector(".faq-answer");

faqQuestion.addEventListener("click", () => {
  faqAnswer.style.display =
    faqAnswer.style.display === "block" ? "none" : "block";
});

// ------------------
// PART 3: FORM VALIDATION
// ------------------
const form = document.getElementById("signupForm");
const formSuccess = document.getElementById("formSuccess");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop page refresh

  let valid = true;

  // Name validation
  const nameInput = document.getElementById("name");
  const nameError = nameInput.nextElementSibling;
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation
  const emailInput = document.getElementById("email");
  const emailError = emailInput.nextElementSibling;
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = "Enter a valid email";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation
  const passwordInput = document.getElementById("password");
  const passwordError = passwordInput.nextElementSibling;
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // If all valid
  if (valid) {
    formSuccess.textContent = "Form submitted successfully!";
    form.reset();
  }
});
