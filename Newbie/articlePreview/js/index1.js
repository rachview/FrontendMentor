const shareBtn = document.querySelector("#share");
const shareList = document.querySelector("#share-list");
const footer = document.querySelector("#footer");

shareBtn.addEventListener("click", () => {
  if (!footer.classList.contains("active")) {
    footer.classList.add("active");
    shareList.classList.remove("hidden");
  } else {
    footer.classList.remove("active");
    shareList.classList.add("hidden");
  }
});
