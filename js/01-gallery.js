import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const getGallery = document.querySelector("div.gallery");

const addList = galleryItems
  .map(
    ({
      description,
      original,
      preview,
    }) => `<div class="gallery-item"><a class="gallery__link" href="${original}">
<img class="gallery__image" 
src="${preview}" 
data-source="${original}" 
alt="${description}"  >
</a></div>`
  )
  .join("");
getGallery.insertAdjacentHTML("afterbegin", addList);

getGallery.addEventListener("click", (e) => {
  e.preventDefault();
  const element = e.target.dataset.source;
  if (e.target.classList.contains("gallery")) return;
  const instance = basicLightbox.create(`
    <img src="${element}" width="800" height="600">
    
`);

  instance.show();
});
