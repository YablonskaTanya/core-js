import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", onModalShow);

const markup = galleryItems
  .map((item) => {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a>
</li>`;
  })
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

let lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});

function onModalShow(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
}
