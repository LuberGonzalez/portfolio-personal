const BACKSPACE_KEY = "Backspace";
const DELETE_KEY = "Delete";

function limitFieldLength(e, maxLength) {
  const field = e.target;
  if (
    field.value.length >= maxLength &&
    e.key !== BACKSPACE_KEY &&
    e.key !== DELETE_KEY
  ) {
    e.preventDefault();
  }
}

function restrictInputToLettersAndSingleSpace(e) {
  const inputValue = e.key;

  if (!/^[a-zA-Z\s]*$/.test(inputValue)) {
    e.preventDefault();
  }
}

function restrictInputToNumbers(e) {
  const inputValue = e.key;

  if (inputValue === DELETE_KEY || inputValue === BACKSPACE_KEY) {
    return;
  }

  if (!/^\d$/.test(inputValue)) {
    e.preventDefault();
  }
}

export function keyboard(e) {
  if (e.target.matches("#name")) {
    limitFieldLength(e, 50);
  }
  if (e.target.matches("#email")) {
    limitFieldLength(e, 50);
  }
  if (e.target.matches("#phone")) {
    limitFieldLength(e, 9);
  }
  if (e.target.matches("#affair")) {
    limitFieldLength(e, 30);
  }
  if (e.target.matches("#message")) {
    limitFieldLength(e, 255);
  }

  if (e.target.matches("[data-string]")) {
    restrictInputToLettersAndSingleSpace(e);
  }

  if (e.target.matches("[data-number]")) {
    restrictInputToNumbers(e);
  }
}
