// export function slider() {
//   const $prevButton = document.querySelector(".bx-chevron-left");
//   const $nextButton = document.querySelector(".bx-chevron-right");
//   const $slides = document.querySelectorAll(".slider-slide");

//   let index = 0;

//   document.addEventListener("click", (e) => {
//     if (e.target === $prevButton) {
//       e.preventDefault();
//       $slides[index].classList.remove("active");
//       index--;

//       if (index < 0) {
//         index = $slides.length - 1;
//       }
//       $slides[index].classList.add("active");
//     }

//     if (e.target === $nextButton) {
//       e.preventDefault();
//       $slides[index].classList.remove("active");
//       index++;

//       if (index >= $slides.length) {
//         index = 0;
//       }

//       $slides[index].classList.add("active");
//     }
//   });
// }


export function slider() {
    const $prevButton = document.querySelector(".bx-chevron-left");
    const $nextButton = document.querySelector(".bx-chevron-right");
    const $slides = document.querySelectorAll(".slider-slide");
  
    let index = 0;
    let intervalId; // Variable para almacenar el ID del intervalo
  
    // Función para avanzar al siguiente proyecto
    function nextProject() {
      $slides[index].classList.remove("active");
      index++;
  
      if (index >= $slides.length) {
        index = 0;
      }
  
      $slides[index].classList.add("active");
    }
  
    // Función para retroceder al proyecto anterior
    function prevProject() {
      $slides[index].classList.remove("active");
      index--;
  
      if (index < 0) {
        index = $slides.length - 1;
      }
  
      $slides[index].classList.add("active");
    }
  
    // Agrega event listeners para los botones de navegación
    $prevButton.addEventListener("click", (e) => {
      e.preventDefault();
      prevProject();
    });
  
    $nextButton.addEventListener("click", (e) => {
      e.preventDefault();
      nextProject();
    });
  
    // Función para cambiar automáticamente cada 10 segundos
    function autoSlide() {
      intervalId = setInterval(() => {
        nextProject();
      }, 5000); // 5 segundos
    }
  
    // Inicia la reproducción automática cuando se carga la página
    autoSlide();
  
    // Detiene la reproducción automática cuando se hace clic en cualquier elemento del slider
    $slides.forEach((slide) => {
      slide.addEventListener("click", () => {
        clearInterval(intervalId);
      });
    });
  }
  