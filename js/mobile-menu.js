document.addEventListener("DOMContentLoaded", () => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const navListRef = document.querySelector(".r-m-navigation-list");
  const headerRef = document.querySelector(".r-m-header");
  const navigationRef = document.querySelector(".r-m-navigation");

  menuBtnRef.addEventListener("click", () => {
    menuBtnRef.classList.toggle("is-open");
    navListRef.classList.toggle("is-open");
    headerRef.classList.toggle("is-open");
    navigationRef.classList.toggle("is-open");
  });

  document.querySelectorAll(".r-m-navigation-link").forEach((n) =>
    n.addEventListener("click", () => {
      navListRef.classList.remove("is-open");
      menuBtnRef.classList.remove("is-open");
      headerRef.classList.remove("is-open");
      navigationRef.classList.remove("is-open");
    })
  );
});

function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  const buttonImg = element.querySelector(".r-m-toggle-button img");

  answer.classList.toggle("open");

  if (answer.classList.contains("open")) {
    buttonImg.classList.add("rotated");
  } else {
    buttonImg.classList.remove("rotated");
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("cookie-popup");
  const acceptButton = document.getElementById("accept-cookies");
  const declineButton = document.getElementById("decline-cookies");

  if (!localStorage.getItem("cookiesAccepted")) {
    popup.style.display = "block";
  }

  acceptButton.onclick = function () {
    localStorage.setItem("cookiesAccepted", "true");
    popup.style.display = "none";
  };

  declineButton.onclick = function () {
    localStorage.setItem("cookiesAccepted", "false");
    popup.style.display = "none";
  };
});
