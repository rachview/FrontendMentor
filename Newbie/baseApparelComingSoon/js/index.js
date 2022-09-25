const submitBtn = document.querySelector("#email-btn");
const errorEl = document.querySelector("#error-el");
const labelEl = document.querySelector("#label-el");
const inputEl = document.querySelector("#email-el");
const form = document.querySelector("form");

form.addEventListener("submit", validate);
submitBtn.addEventListener("click", validate);

function validate(e) {
  //Prevents default
  e.preventDefault();
  //Assign the value of the input box
  //Trim removes empty spaces
  const inputValue = inputEl.value.trim();

  if (!isEmail(inputValue)) {
    errorEl.classList.remove("hidden");
    labelEl.classList.remove("hidden");
  } else {
    errorEl.classList.add("hidden");
    labelEl.classList.add("hidden");
  }
}

//Checks email string
function isEmail(inputEl) {
  //Testing with regex
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEl);
}

//
