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

export function validationForm(e) {
  e.preventDefault();

  const $form = e.target;

  // Accede a los elementos del formulario por su atributo "name"
  const nameInput = $form.elements.name;
  const emailInput = $form.elements.email;
  const phoneInput = $form.elements.phone;
  const affairInput = $form.elements.affair;
  const messageTextarea = $form.elements.message;

  // Puedes acceder a los valores de los campos de esta manera
  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  const phoneValue = phoneInput.value;
  const affairValue = affairInput.value;
  const messageValue = messageTextarea.value;

  // Realiza la validación u otras operaciones con los valores aquí
  console.log("Nombre:", nameValue);
  console.log("Email:", emailValue);
  console.log("Número de Teléfono:", phoneValue);
  console.log("Asunto:", affairValue);
  console.log("Mensaje:", messageValue);

  if (validateName(nameValue)) {
    console.log("El nombre es válido.");
  } else {
    console.error("El nombre no es válido.");
  }

  const validationLengthName = validateLength({
    value: nameValue,
    maxLength: 50,
    minLength: 2,
    fieldName: "Nombre",
  });

  if (validationLengthName) {
    alert(validationLengthName); // Muestra el mensaje de validación con el nombre del campo
    return;
  } else {
    // La longitud es válida, continúa con tu lógica
  }

  if (isValidEmail(emailValue)) {
    console.log("El correo electrónico es válido.");
  } else {
    console.error("El correo electrónico no es válido.");
  }

  const validationLengthEmail = validateLength({
    value: emailValue,
    maxLength: 50,
    minLength: 10,
    fieldName: "Correo",
  });

  if (validationLengthEmail) {
    alert(validationLengthEmail); // Muestra el mensaje de validación con el nombre del campo
    return;
  } else {
    // La longitud es válida, continúa con tu lógica
  }

  if (validateSpanishPhoneNumber(phoneValue)) {
    console.log("Si el telefono es valido");
  } else {
    console.error("No es valido el telefono, no es de la region");
  }

  const validationLengthPhone = validateLength({
    value: phoneValue,
    maxLength: 9,
    minLength: 9,
    fieldName: "Telefono Movil",
  });

  if (validationLengthPhone) {
    alert(validationLengthPhone); // Muestra el mensaje de validación con el nombre del campo
    return;
  } else {
    // La longitud es válida, continúa con tu lógica
  }

  const validationLengthAffair = validateLength({
    value: affairValue,
    maxLength: 30,
    minLength: 5,
    fieldName: "Asunto",
  });

  if (validationLengthAffair) {
    alert(validationLengthAffair); // Muestra el mensaje de validación con el nombre del campo
    return;
  } else {
    // La longitud es válida, continúa con tu lógica
  }

  const validationLengthMessage = validateLength({
    value: messageValue,
    maxLength: 255,
    minLength: 5,
    fieldName: "Mensaje",
  });

  if (validationLengthAffair) {
    alert(validationLengthAffair); // Muestra el mensaje de validación con el nombre del campo
    return;
  } else {
    // La longitud es válida, continúa con tu lógica
  }
}
