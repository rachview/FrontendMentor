//Divs
const card = document.querySelector(".card");
const cardThanks = document.querySelector(".card-thankyou");
// Buttons and Rating Labels
const submit = document.querySelector(".submit-btn");
const userRating = document.getElementById("user-rating");
const btnRating = document.querySelectorAll(".buttons");

//A timer to flip back to the rating card
function timer() {
  setTimeout(() => {
    cardThanks.classList.add("hidden");
    card.classList.remove("hidden");
  }, 2000);
}

//This changes the card state on click (from rating card to the thank you card)
submit.addEventListener("click", () => {
  //A fail check if nothing is clicked
  if (userRating.innerHTML === "") {
    userRating.innerHTML = "5";
  }
  //Change cards
  cardThanks.classList.remove("hidden");
  card.classList.add("hidden");
  //Timer
  timer();
});

//This gets the rating label number and passes it into the span element of the thank you card
btnRating.forEach((rating) => {
  rating.addEventListener("click", () => {
    userRating.innerHTML = rating.innerHTML;
  });
});
