import { registerImage } from "./lazy";

// Cargue las imagenes existentes cuando cargue la página
const allImages = document.querySelectorAll("img[data-src]");
allImages.forEach(registerImage);
