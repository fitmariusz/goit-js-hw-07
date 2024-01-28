import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from 'basiclightbox'






// Change code below this line

const ulGallery = document.querySelector(".gallery");

console.log(ulGallery);

galleryItems.forEach((item) => {
    // // const ulImage=getElementsByClassName('gallery')
    const divBoxImage = document.createElement("div");
    divBoxImage.setAttribute('class', 'gallery__item');
    const aImage = document.createElement('a');
    aImage.setAttribute('class', 'gallery__link');
    const image = document.createElement('img');
    image.setAttribute('class', 'gallery__image');
    image.setAttribute('src', item.preview);
    image.setAttribute('alt', item.description);
    image.setAttribute('href', item.original);
    aImage.append(image);
    divBoxImage.append(aImage);
    ulGallery.append(divBoxImage);
});


ulGallery.addEventListener("click", (event) => {
  event.preventDefault();

  const lightbox = basicLightbox.create(`
    <img src="${event.target.href}" width="800" height="600">
  `);

  lightbox.show();
});


// ulGallery.addEventListener("click", clickImage);

// function clickImage(event) {

//     console.log('test');
    

// // const instance = basicLightbox.create(`
// //     <img src="assets/images/image.png" width="800" height="600">
// // `)

// // instance.show()
// }










// const createElement = document.querySelector('[data-create]');
// const destroyElement = document.querySelector('[data-destroy]');
// const divBox = document.getElementById("boxes");
// const valueInput = document.querySelector('input');
// valueInput.value = 1;


// function createBox()
// {
//   const startSize = 30;
//   const stepSize = 10;
//   for (let i = 0; i < valueInput.value; i++) {
//     const box = document.createElement("div");
//     const randomColor = getRandomHexColor();

//     box.style.backgroundColor = randomColor;
//     box.setAttribute('class', `divBox`);
//     box.style.height = `${startSize + startSize * i}px`;
//     box.style.width = `${startSize + stepSize * i}px`;
//     divBox.append(box);
//   }
// }

// function destroyBox() {
//   const divs = document.querySelectorAll(".divBox");
//   divs.forEach(div => { 
//     div.remove();
//   });
// }

// createElement.addEventListener("click", () => {
//   destroyBox();
//   createBox();

// });
 
// destroyElement.addEventListener("click", () => {
//   destroyBox();
// });

console.log(galleryItems);
