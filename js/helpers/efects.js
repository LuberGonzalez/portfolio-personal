import { Alert } from "../components/Alert.js";

export function fadeOutAndRemove(node, delay = 0) {
  if (!node || !node.parentNode) {
    return;
  }

  node.style.transition = `opacity ${delay / 1000}s ease`;
  node.style.opacity = 0;

  setTimeout(() => {
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    }
  }, delay);
}

export function removeAlert(props) {
  const { container, message, type } = props;

  let alertNode = Alert({
    message,
    type,
  });

  container.appendChild(alertNode);
  setTimeout(() => {
    fadeOutAndRemove(alertNode, 5000);
  }, 2000);
}
