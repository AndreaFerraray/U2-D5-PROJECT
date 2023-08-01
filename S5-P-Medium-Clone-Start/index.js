// script.js

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 1000) {
    navbar.classList.add("white");
  } else {
    navbar.classList.remove("white");
  }
});
