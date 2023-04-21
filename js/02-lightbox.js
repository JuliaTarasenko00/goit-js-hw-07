import { galleryItems } from './gallery-items.js';
// Change code below this line
const options = {
    captionPosition: 'alt',
    captionDelay: 250,

  };

const ulEl = document.querySelector('.gallery');

galleryItems.forEach(({ original, preview, description }) =>{
    const liEl = document.createElement('li');
    liEl.classList.add('gallery__item');
    
const link = document.createElement('a');
    link.classList.add('gallery__link');
    link.href = original;
    
const imgEl = document.createElement('img');
    imgEl.classList.add('gallery__image');
    imgEl.src = preview;
    imgEl.alt = description;

    link.append(imgEl);
    liEl.append(link);
    ulEl.append(liEl);
});

new SimpleLightbox('.gallery a', options);

console.log(galleryItems);
