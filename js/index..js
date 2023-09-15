// toggle icon navbar
const $menuIcon = document.querySelector(".bx-menu");
const $navbar = document.querySelector(".main-menu");

// scroll sections
const $sections = document.querySelectorAll(".section");
const $navLinks = document.querySelectorAll(".main-menu-link");

$menuIcon.addEventListener("click", () => {
  $menuIcon.classList.toggle("bx-x");
  $navbar.classList.toggle("active");
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
              `.main-menu-link[href*=${id}]`
            );
            if (linkToActivate) {
              linkToActivate.classList.add("active");

              // Remove toggle icon and navbar when clicking navbar links (scroll)
              $menuIcon.classList.remove("bx-x");
              $navbar.classList.remove("active");
            } else {
              console.error(
                `No se encontró un enlace para la sección con id ${id}`
              );
            }
          });
        } else {
          console.error("No hay enlaces");
        }
      }
    });
  } else {
    // Handle the case where no sections were found

    console.error("No se hizo n");
  }

  // Animation footer on scroll
};
