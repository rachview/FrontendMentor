const numEl = document.querySelector("#num-el");
const notify = document.querySelectorAll("#notify");
const markAllRead = document.querySelector("#markread-el");
let sum = 0;

notify.forEach((number) => {
  //Set numEl inner HTML as sum.
  numEl.innerHTML = sum;
  //Mark all as read
  markAllRead.addEventListener("click", () => {
    if (number.classList.contains("unread")) {
      number.classList.remove("unread");
      sum--;
      numEl.innerHTML = sum;
    }
  });
  // Check to see if has unread class, remove it and display sum
  if (number.classList.contains("unread")) {
    sum++;
    number.addEventListener("click", () => {
      number.classList.remove("unread");
      sum--;
      numEl.innerHTML = sum;
    });
  }
  //Toggle message-open class when clicked on
  if (number.classList.contains("message-open")) {
    number.addEventListener("click", () => {
      number.classList.toggle("message-open");
      number.classList.toggle("message-close");
    });
    //Just for fun to make the commented image do something
  } else if (number.classList.contains("message-close")) {
    number.addEventListener("click", () => {
      number.classList.toggle("message-open");
      number.classList.toggle("message-close");
    });
  }
});
