import { galleryItems } from './gallery-items.js';

// Change code below this line


console.log(galleryItems);
const gallery = document.querySelector('.gallery');

galleryItems.forEach((item) => {
 
    const markup = `
    <a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" title="${item.description}"/>
    </a>`

    gallery.innerHTML += markup;

 
});


var lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });
