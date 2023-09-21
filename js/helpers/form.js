import { ALERT_TYPE_DANGER } from "./constants.js";
import { removeAlert } from "./efects.js";
import { fetchCustom } from "./fetch.js";
function removeSpacesAroundText(text) {
  return text.trim();
}

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

function validateName(name) {
  // Patrón que permite letras mayúsculas, minúsculas, espacios y apóstrofes
  const pattern = /^[A-Za-zÁ-ÿ\s']+$/;

  // Comprueba si el nombre coincide con el patrón
  if (pattern.test(name)) {
    return true; // El nombre es válido
  } else {
    return false; // El nombre no es válido
  }
}

function validateSpanishPhoneNumber(phoneNumber) {
  // Pattern for Spanish phone numbers
  const pattern = /^(6|7|8|9)\d{8}$/;

  // Check if the phone number matches the pattern
  if (pattern.test(phoneNumber)) {
    return true; // The phone number is valid
  } else {
    return false; // The phone number is not valid
  }
}

function validateLength({ value, maxLength, minLength, fieldName }) {
  console.log(value);
  if (value.length < minLength) {
    return `El campo "${fieldName}" debe tener al menos ${minLength} caracteres.`;
  } else if (value.length > maxLength) {
    return `El campo "${fieldName}" no debe exceder los ${maxLength} caracteres.`;
  } else {
    return null; // La longitud es válida
  }
}

export async function validationForm(e) {
  e.preventDefault();

  const $form = e.target;

  const $contact = e.target.parentElement;

  const nameInput = $form.elements.name;
  const emailInput = $form.elements.email;
  const phoneInput = $form.elements.phone;
  const affairInput = $form.elements.affair;
  const messageTextarea = $form.elements.message;

  let nameValue = nameInput.value;
  let emailValue = emailInput.value;
  let phoneValue = phoneInput.value;
  let affairValue = affairInput.value;
  let messageValue = messageTextarea.value;

  if (validateName(nameValue)) {
    console.log("El nombre es válido.");
  } else {
    console.error("El nombre no es válido.");
    removeAlert({
      container: $contact,
      message: "El nombre no es válido.",
      type: ALERT_TYPE_DANGER,
    });
    return;
  }

  const validationLengthName = validateLength({
    value: nameValue,
    maxLength: 50,
    minLength: 2,
    fieldName: "Nombre",
  });

  if (validationLengthName) {
    removeAlert({
      container: $contact,
      message: validationLengthName,
      type: ALERT_TYPE_DANGER,
    });
    return;
  } else {
    // La longitud es válida, continúa con tu lógica
  }

  nameValue = removeSpacesAroundText(nameValue);

  if (isValidEmail(emailValue)) {
    console.log("El correo electrónico es válido.");
  } else {
    console.error("El correo electrónico no es válido.");

    removeAlert({
      container: $contact,
      message: "El correo electrónico no es válido",
      type: ALERT_TYPE_DANGER,
    });

    return;
  }

  const validationLengthEmail = validateLength({
    value: emailValue,
    maxLength: 50,
    minLength: 10,
    fieldName: "Correo",
  });

  if (validationLengthEmail) {
    removeAlert({
      container: $contact,
      message: validationLengthEmail,
      type: ALERT_TYPE_DANGER,
    });
    return;
  } else {
    // La longitud es válida, continúa con tu lógica
  }

  emailValue = removeSpacesAroundText(emailValue);

  if (validateSpanishPhoneNumber(phoneValue)) {
    console.log("Si el telefono es valido");
  } else {
    console.error("No es valido el telefono, no es de la region");

    removeAlert({
      container: $contact,
      message: "No es valido el telefono, no es de la region",
      type: ALERT_TYPE_DANGER,
    });
    return;
  }

  const validationLengthPhone = validateLength({
    value: phoneValue,
    maxLength: 9,
    minLength: 9,
    fieldName: "Telefono Movil",
  });

  if (validationLengthPhone) {
    removeAlert({
      container: $contact,
      message: validationLengthPhone,
      type: ALERT_TYPE_DANGER,
    });
    return;
  } else {
    // La longitud es válida, continúa con tu lógica
  }

  phoneValue = removeSpacesAroundText(phoneValue);

  const validationLengthAffair = validateLength({
    value: affairValue,
    maxLength: 30,
    minLength: 5,
    fieldName: "Asunto",
  });

  if (validationLengthAffair) {
    removeAlert({
      container: $contact,
      message: validationLengthAffair,
      type: ALERT_TYPE_DANGER,
    });

    return;
  } else {
    // La longitud es válida, continúa con tu lógica
  }

  affairValue = removeSpacesAroundText(affairValue);

  const validationLengthMessage = validateLength({
    value: messageValue,
    maxLength: 255,
    minLength: 5,
    fieldName: "Mensaje",
  });

  if (validationLengthMessage) {
    removeAlert({
      container: $contact,
      message: validationLengthMessage,
      type: ALERT_TYPE_DANGER,
    });
    return;
  } else {
    // La longitud es válida, continúa con tu lógica
  }

  messageValue = removeSpacesAroundText(messageValue);

  await fetchCustom($form);
}
