import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const getGallery = document.querySelector("div.gallery");

const addList = galleryItems
  .map(
    ({ description, original, preview }) => `<a class="gallery__link">
<img class="gallery__image" data-source="${original}" alt="${description}" src="${preview}" >
</a>`
  )
  .join("");
getGallery.insertAdjacentHTML("afterbegin", addList);

getGallery.addEventListener("click", (e) => {
  e.preventDefault();
  const element = e.target.dataset.source;
  console.log(e);
  const instance = basicLightbox.create(`
    <img src="${element}" width="800" height="600">
    
`);

  instance.show();
});
