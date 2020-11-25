const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadImage);
});

const isIntersecting = (intersectionEntry) => intersectionEntry.isIntersecting;

const loadImage = (intersectionEntry) => {
  const imgNode = intersectionEntry.target;
  imgNode.src = imgNode.dataset.src;
  observer.unobserve(imgNode);
};

export const registerImage = (image) => {
  observer.observe(image);
};
