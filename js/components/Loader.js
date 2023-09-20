export function Loader() {
  const $loader = document.createElement("div");

  $loader.classList.add("loader-container");
  $loader.id = "loader";

  $loader.innerHTML = `
      <div class="loader"></div>
      `;
  return $loader;
}
