const form = document.querySelector("#form");
const thankyou = document.querySelector(".thankyou");
const continueBtn = document.querySelector("#btn-continue");
///Cards
const displayCardName = document.getElementById("card-display--name");
const displayCardNum = document.getElementById("card-display--num");
const displayCardMM = document.getElementById("card-display--month");
const displayCardYY = document.getElementById("card-display--year");
const displayCardCvc = document.getElementById("card-display--cvc");
////Inputs
const cardName = document.getElementById("card-name");
const cardNum = document.getElementById("card-num");
const cardMM = document.getElementById("card-date--month");
const cardYY = document.getElementById("card-date--year");
const cardCvc = document.getElementById("card-cvc");

//Input display change
form.addEventListener("input", inputDisplay);

function inputDisplay() {
  displayCardName.innerHTML = cardName.value.trim();
  displayCardNum.innerHTML = cardNum.value.trim();
  displayCardMM.innerHTML = cardMM.value.trim();
  displayCardYY.innerHTML = cardYY.value.trim();
  displayCardCvc.innerHTML = cardCvc.value.trim();
}

//Add submit event to form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

//Add click event to continue button
continueBtn.addEventListener("click", () => {
  thankyou.classList.remove("show-toggle");
  clearAll();
});

//Clear forms after submit
function clearAll() {
  displayCardName.innerHTML = "Jane Appleseed";
  displayCardNum.innerHTML = "0000 0000 0000 0000";
  displayCardMM.innerHTML = "00";
  displayCardYY.innerHTML = "00";
  displayCardCvc.innerHTML = "000";
  cardName.value = "";
  cardNum.value = "";
  cardMM.value = "";
  cardYY.value = "";
  cardCvc.value = "";
}

function checkInputs() {
  const nameValue = cardName.value.trim();
  const numValue = cardNum.value.trim();
  const monthValue = cardMM.value.trim();
  const yearValue = cardYY.value.trim();
  const cvcValue = cardCvc.value.trim();

  let count = 0;
  const creditRegex = /\d{1,4}/g;

  //Card Name
  if (nameValue === "") {
    setErrorFor(cardName, "Field cannot be empty");
  } else if (!isLetter(nameValue)) {
    setErrorFor(cardName, "Must contain A-Z");
  } else {
    setSuccessFor(cardName);
    count++;
  }
  //Card Number
  if (numValue === "") {
    setErrorFor(cardNum, "Field cannot be empty");
  } else if (!isCreditCard(numValue)) {
    setErrorFor(cardNum, "Must contain 16 numbers (include spaces)");
  } else {
    setSuccessFor(cardNum);
    count++;
  }
  //Card MM and YY
  if (monthValue === "" && yearValue === "") {
    setErrorExpireFor(cardMM, "Fields cannot be empty");
    setErrorExpireFor(cardYY, "Fields cannot be empty");
  } else if (yearValue === "") {
    setErrorExpireFor(cardYY, "Year cannot be empty");
  } else if (!isNum(yearValue)) {
    setErrorExpireFor(cardYY, "Year must contain 0-9");
  } else if (yearValue.length !== 2) {
    setErrorExpireFor(cardYY, "Year must contain 2 numbers");
  } else if (monthValue === "") {
    setErrorExpireFor(cardMM, "Month cannot be empty");
  } else if (!isNum(monthValue)) {
    setErrorExpireFor(cardMM, "Month must contain 0-9");
  } else if (monthValue.length !== 2) {
    setErrorExpireFor(cardYY, "Month must contain 2 numbers");
  } else {
    setSuccessExpireFor(cardMM);
    setSuccessExpireFor(cardYY);
    count++;
  }

  //Card CVC
  if (cvcValue === "") {
    setErrorFor(cardCvc, "Field cannot be empty");
  } else if (!isNum(cvcValue)) {
    setErrorFor(cardCvc, "Must contain 0-9");
  } else if (cvcValue.length !== 3) {
    setErrorFor(cardCvc, "Must contain 3 numbers");
  } else {
    setSuccessFor(cardCvc);
    count++;
  }

  //Check to see if it reaches 4, and show the thankyou card
  if (count === 4) {
    thankyou.classList.add("show-toggle");
  }
}

//Error: Empty
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  //add error message inside of small
  small.innerText = message;

  //add error class;
  formControl.className = "form-control invalid";
}
//Error for the Month and Year
function setErrorExpireFor(input, message) {
  const formControl = input.parentElement.parentElement;
  const small = formControl.querySelector("small");

  //add error message inside of small
  small.innerText = message;

  //add error class;
  formControl.className = "form-control invalid";
}

//Is this a number?
function isNum(num) {
  return /[0-9]/.test(num);
}

//Is this a character?
function isLetter(letter) {
  return /[a-zA-Z]/.test(letter);
}

//Is creditcard?
function isCreditCard(num) {
  return /(?<!\d)\d{16}(?!\d)|(?<!\d[ _-])(?<!\d)\d{4}(?:[_ -]\d{4}){3}(?![_ -]?\d)/gm.test(
    num
  );
}

//Success
function setSuccessFor(input) {
  const formControl = input.parentElement; //.form control div

  //add success class
  formControl.className = "form-control success";
}

//Success for Month and Year
function setSuccessExpireFor(input) {
  const formControl = input.parentElement.parentElement; //.form control div

  //add success class
  formControl.className = "form-control success";
}
