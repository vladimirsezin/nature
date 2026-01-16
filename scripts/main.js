const menu = document.getElementById("burger");
const burgerMenu = document.getElementById("burger__menu");
const header = document.getElementById("header");

menu.addEventListener("click", function () {
  // Переключаем активный класс
  burgerMenu.classList.toggle("active");
  menu.classList.toggle("active");

  // Меняем фон header
  if (burgerMenu.classList.contains("active")) {
    header.style.backgroundImage = "none";
    header.style.backgroundColor = "#4C3F3F";
  } else {
    header.style.backgroundImage = "";
    header.style.backgroundColor = "";
  }
});
document.querySelectorAll(".navbar__link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});
