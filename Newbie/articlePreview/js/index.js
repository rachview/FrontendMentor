//This function checks what size the window is before it triggers the events.
// Never would of figured it out without: Marko Ilic: https://css-tricks.com/working-with-javascript-media-queries/

window.addEventListener("load", checkMediaQuery);
window.addEventListener("resize", checkMediaQuery);

function checkMediaQuery() {
  if (window.innerWidth > 1440) {
    desktop();
  }
  if (window.innerWidth < 1439) {
    mobile();
  }
}

function mobile() {
  const shareBtn = document.querySelector("#share");
  const mobileBtnActive = document.querySelector("#share-active");
  const activeMobile = document.querySelector(".active");
  const inactiveMobile = document.querySelector(".container-footer");
  //This is for the mobile
  shareBtn.addEventListener("click", () => {
    activeMobile.classList.toggle("hidden");
    inactiveMobile.classList.toggle("hidden");
  });

  mobileBtnActive.addEventListener("click", () => {
    activeMobile.classList.toggle("hidden");
    inactiveMobile.classList.toggle("hidden");
  });
}

function desktop() {
  const shareBtn = document.querySelector("#share");
  const activeDesktop = document.querySelector(".active-modal");
  const shareImg = document.querySelector("#share-img");
  //This is for the desktop
  shareBtn.addEventListener("mouseover", () => {
    shareImg.src = "./img/icon-sharewhite.svg";
    activeDesktop.classList.remove("hidden");
    setTimeout(() => {
      activeDesktop.classList.add("hidden");
      shareImg.src = "./img/icon-share.svg";
    }, 1000);
  });
}
