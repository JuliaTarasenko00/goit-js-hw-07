import { galleryItems } from './gallery-items.js';
// Change code below this line

const ulEl = document.querySelector('.gallery');

const galleryEl = gallery(galleryItems);

ulEl.insertAdjacentHTML('beforeend', galleryEl);

const imgEl = document.querySelector('.gallery__image');

function gallery(galleryItems) {
    return galleryItems.map(({ original,preview, description }) => {
        return   `<li class="gallery__item">
        <a class="gallery__link" href='${original}'>
        <img class="gallery__image" src ='${preview}' data-source='${original} 
        alt='${description}''/></a></li>`;
    }).join("");
}
 
ulEl.addEventListener('click', onClickImg);
function onClickImg(ev) {
    ev.preventDefault();
    if(ev.target.nodeName !== imgEl.nodeName){
        return
    }
    const instance = basicLightbox.create(`
    <img src= ${ev.target.dataset.source} width="800" height="600">`)
    instance.show()
    
    ulEl.addEventListener('keydown', (ev) => {
    if(ev.code === 'Escape' || ev.code === 'Enter') {
        instance.close();
       ulEl.removeEventListener('keydown', onClickImg);
    }
    })
} 
console.log(galleryItems);
