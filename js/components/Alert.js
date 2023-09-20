export function Alert(props) {
  const { message, type } = props;

  const $alert = document.createElement("div");

  $alert.classList.add("alert-container");

  $alert.innerHTML = `
    <div class="alert alert-${type} fade">
        <p>${message}</p>
        <button class="close-btn">&times;</button>
    </div>
    `;
  return $alert;
}
