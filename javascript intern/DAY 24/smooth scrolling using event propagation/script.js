"use strict";

//-------------------------now using event propagation

document.querySelector(".nav-menu").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav-link")) {
    const targetElement = document.querySelector(e.target.getAttribute("href"));
    targetElement.scrollIntoView({
      behavior: "smooth",
    });
  }
});
