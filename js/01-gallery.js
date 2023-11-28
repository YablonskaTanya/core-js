import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", onModalShow);

console.log(galleryItems);

const markup = galleryItems
  .map((item) => {
    return `<li>
    <a href="large-image.jpg">
    <img src="${item.preview}" alt="${item.description}"  data-source="${item.original}"/>
    </a>

</li>`;
  })
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

function onModalShow(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const sourceData = e.target.getAttribute("data-source");

  const instance = basicLightbox.create(
    `<img src="${sourceData}" width="800" height="600">`
    // {
    //   onShow: () => {
    //     gallery.addEventListener("keydown", onCloseModalByEsc);
    //   },
    //   onClose: () => {
    //     gallery.removeEventListener("keydown", onCloseModalByEsc);
    //   },
    // }
  );

  // function onCloseModalByEsc(e) {
  //   console.log("e.code :>> ", e.code);
  //   if (e.code === "Escape") {
  //     instance.close();
  //   }
  // }

  instance.show();

  gallery.addEventListener("keydown", onCloseModalByEsc);

  function onCloseModalByEsc(e) {
    console.log("e.code :>> ", e.code);
    if (e.code === "Escape") {
      instance.close();
      gallery.removeEventListener("keydown", onCloseModalByEsc);
    }
  }
}
