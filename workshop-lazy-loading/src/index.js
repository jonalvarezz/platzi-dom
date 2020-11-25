import { registerImage } from "./lazy";
import { createImageNodes } from "./utils";

// Cargue las imagenes existentes cuando cargue la página
const allImages = document.querySelectorAll("img[data-src]");
allImages.forEach(registerImage);

// Agregar nuevas imagenes
const imageContainer = document.querySelector("#images");
const button = document.querySelector("button");
button.addEventListener("click", () => {
  const [node, image] = createImageNodes();
  registerImage(image);
  imageContainer.append(node);
});
