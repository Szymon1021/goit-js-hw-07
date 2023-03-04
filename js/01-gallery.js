import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

galleryItems.forEach((item) => {
    
    const markup = `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`

    gallery.innerHTML += markup;

});
 
gallery.onclick = (e) => {
  e.preventDefault();

     const modal = document.querySelector('script.div.basicLightbox--visible');
  console.log(modal)

 const instance = basicLightbox.create(`
		<img width="1400" height="900" src="${e.target.dataset.source}">
	`).show();

;

}

