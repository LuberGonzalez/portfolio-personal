export function slider() {
  const $prevButton = document.querySelector(".bx-chevron-left");
  const $nextButton = document.querySelector(".bx-chevron-right");
  const $slides = document.querySelectorAll(".slider-slide");

  let index = 0;
  let intervalId; // Variable para almacenar el ID del intervalo
  let isMouseMoving = false; // Variable para rastrear el movimiento del mouse

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
    restartAutoSlide();
  });

  $nextButton.addEventListener("click", (e) => {
    e.preventDefault();
    nextProject();
    restartAutoSlide();
  });

  // Función para cambiar automáticamente cada 5 segundos
  function autoSlide() {
    intervalId = setInterval(() => {
      nextProject();
    }, 5000); // 5 segundos
  }

  // Función para reiniciar el autoslide
  function restartAutoSlide() {
    clearInterval(intervalId);
    autoSlide();
  }

  // Inicia la reproducción automática manualmente
  function startAutoSlide() {
    autoSlide();
  }

  // Detecta el movimiento del mouse
  document.addEventListener("mousemove", () => {
    isMouseMoving = true;
    restartAutoSlide();
  });

  // Función para comprobar si no hay interacción del usuario y luego iniciar el autoslide
  function checkMouseMovement() {
    if (!isMouseMoving) {
      autoSlide();
    }
    isMouseMoving = false; // Reinicia el estado del movimiento del mouse
  }

  // Inicia la comprobación de movimiento del mouse después de un período de tiempo inactivo
  setTimeout(checkMouseMovement, 10000); // 10 segundos de inactividad

  // Detiene la reproducción automática cuando se hace clic en cualquier elemento del slider
  $slides.forEach((slide) => {
    slide.addEventListener("click", () => {
      clearInterval(intervalId);
      checkMouseMovement(); // Comprueba el movimiento del mouse después del clic
    });
  });

  // Llama a la función para iniciar la reproducción automática después de configurar los event listeners
  startAutoSlide();
}