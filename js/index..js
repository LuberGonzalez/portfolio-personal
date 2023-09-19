import { slider } from "./helpers/slider.js"; 

// toggle icon navbar
const $menuIcon = document.querySelector(".bx-menu");
const $navbar = document.querySelector(".menu-float");
const $menu = document.querySelector('.main-menu');
// scroll sections
const $sections = document.querySelectorAll(".section");
const $navLinks = document.querySelectorAll(".menu-float-link");

$menuIcon.addEventListener("click", () => {
  $menuIcon.classList.toggle("bx-x");
  $navbar.classList.toggle("active");
  $menu.classList.toggle("active");
});

window.onscroll = () => {
  // Sticky header
  const $header = document.querySelector(".main-header");

  if ($header) {
    $header.classList.toggle("sticky", window.scrollY > 100);
  } else {
    console.error("NO existe el Header");
  }

  if ($sections.length > 0) {
    $sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 100;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        // active navbar links

        if ($navLinks.length > 0) {
          $navLinks.forEach((link) => {
            link.classList.remove("active");
            const linkToActivate = document.querySelector(
              `.menu-float-link[href*=${id}]`
            );
            if (linkToActivate) {
              linkToActivate.classList.add("active");

              // Activa o desactiva la animación según el estado de isAnimationActive
              sec.classList.add("show-animate");

              // Remove toggle icon and navbar when clicking navbar links (scroll)
              $menuIcon.classList.remove("bx-x");
              $navbar.classList.remove("active");
              $menu.classList.remove('active');
            } else {
              console.error(
                `No se encontró un enlace para la sección con id ${id}`
              );
            }
          });
        } else {
          console.error("No hay enlaces");
        }
      } else {
        // Usar de nuevo la animacion
        sec.classList.remove("show-animate");
      }
    });
  } else {
    // Handle the case where no sections were found
    console.error("No se hizo nafa");
  }
  // Animation footer on scroll
  // const $footer = document.querySelector(".footer");

  $footer.classList.toggle(
    "show-animate",
    this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight
  );
};

document.addEventListener('DOMContentLoaded', () => {
  slider();
});