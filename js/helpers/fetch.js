import { Loader } from "../components/Loader.js";
import {
  ALERT_TYPE_DANGER,
  ALERT_TYPE_SUCCESS,
  FORM_SUBMIT_URL,
} from "./constants.js";
import { removeAlert } from "./efects.js";

function handleTimeoutError(container) {
  console.log(container);
  console.error(
    "La solicitud se ha cancelado debido a un tiempo de espera excedido"
  );

  removeAlert({
    container,
    message:
      "La solicitud se ha cancelado debido a un tiempo de espera excedido intente nuevamente disculpe las molestias",
    type: ALERT_TYPE_DANGER,
  });
}

export async function fetchCustom(form) {
  const formData = new FormData(form);
  const $contact = document.querySelector(".contact");
  const $loader = Loader();

  document.body.appendChild($loader);

  // Crea una instancia de AbortController
  const abortController = new AbortController();
  const signal = abortController.signal;

  // Establece un temporizador para abortar la solicitud después de 30 segundos
  const timeoutId = setTimeout(() => {
    abortController.abort();
    handleTimeoutError();
  }, 30000);

  try {
    const response = await fetch(FORM_SUBMIT_URL, {
      method: "POST",
      body: formData,
      signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error("Error en la solicitud");
    }

    const htmlResponse = await response.text(); // Obtén la respuesta como texto HTML
    console.log("Respuesta del servidor (HTML):", htmlResponse);

    $loader.classList.add("loader-hidden");

    removeAlert({
      container: $contact,
      message:
        "Se realizo el envio del correo con exito, pronto me pondre en contato contigo muchas gracias",
      type: ALERT_TYPE_SUCCESS,
    });

    form.reset();
  } catch (error) {
    console.error("Error:", error);
    // Manejo de errores aquí (puede mostrar un mensaje de error al usuario)

    if (error.name === "AbortError") {
      // La solicitud fue abortada debido al tiempo límite
      $loader.classList.add("loader-hidden");
      handleTimeoutError($contact);
    }
  }
}
