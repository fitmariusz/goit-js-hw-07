

import { galleryItems } from './gallery-items.js';
// Change code below this line
function addJsFile() {

    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css"
    document.getElementsByTagName("head")[0].appendChild(link);
   
    var script = document.createElement('script');
    script.async = true;
    script.src = "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js";
    document.getElementsByTagName("body")[0].appendChild(script);
}

addJsFile()
const ulGallery = document.querySelector(".gallery");

const arrayDiv=galleryItems.map((item) => {
    // // const ulImage=getElementsByClassName('gallery')
    const divBoxImage = document.createElement("div");
    divBoxImage.setAttribute('class', 'gallery__item');
    const aImage = document.createElement('a');
    aImage.setAttribute('class', 'gallery__link');
    const image = document.createElement('img');
    image.setAttribute('class', 'gallery__image');
    image.src=item.preview;
    image.alt=item.description;
    image.dataset.href=item.original;
    aImage.append(image);
    divBoxImage.append(aImage);
    console.log(divBoxImage);
    return divBoxImage;
});
ulGallery.append(...arrayDiv);

ulGallery.addEventListener("click", (event) => {
    event.preventDefault();
    
    const lightbox = basicLightbox.create(`
    <img src="${event.target.dataset.href}" width="800" height="600">
    `);

    lightbox.show();

    document.addEventListener("keydown", event => {
        if (event.key === 'Escape') {
            lightbox.close();
        }
    });
});

