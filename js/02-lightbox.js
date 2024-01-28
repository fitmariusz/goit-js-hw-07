import { galleryItems } from './gallery-items.js';

function addJsFile() {

    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href="https://cdn.jsdelivr.net/npm/simplelightbox@2.14.2/dist/simple-lightbox.min.css"
    document.getElementsByTagName("head")[0].appendChild(link);
   
    var script = document.createElement('script');
    script.async = true;
    script.src = "https://cdn.jsdelivr.net/npm/simplelightbox@2.14.2/dist/simple-lightbox.min.js";
    document.getElementsByTagName("body")[0].appendChild(script);
}

addJsFile()
const ulGallery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
    const divBoxImage = document.createElement("div");
    divBoxImage.setAttribute('class', 'gallery__item');
    const aImage = document.createElement('a');
    aImage.setAttribute('class', 'gallery__link');
    aImage.href = item.original;
    const image = document.createElement('img');
    image.setAttribute('class', 'gallery__image');
    image.src=item.preview;
    image.alt=item.description;
    aImage.append(image);
    divBoxImage.append(aImage);
    ulGallery.append(divBoxImage);
});


ulGallery.addEventListener("click", (event) => {
    event.preventDefault();
    
    let gallery = new SimpleLightbox('.gallery a');
    gallery.on('show.simplelightbox', function () {
    // Do something…
    });

});
