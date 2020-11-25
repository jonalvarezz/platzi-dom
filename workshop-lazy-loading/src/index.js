import { registerImage } from "./lazy";

const allImages = document.querySelectorAll("img[data-src]");

allImages.forEach(registerImage);
