import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const cardsMurkup = createGalleryCards(galleryItems);

gallery.insertAdjacentHTML("afterbegin", cardsMurkup);


function createGalleryCards(galleryItems) {
	return galleryItems.map(({ preview, original, description }) => {
		return `<a class="gallery__item" href="${original}"}> 
		<img class="gallery__image" src="${preview}" alt="${description}"/>
	 </a>`
	}).join('');
};

gallery.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
	event.preventDefault();
}

var lightbox = new SimpleLightbox('.gallery a', {
	scrollZoom: false,
	captionSelector: 'img',
	captionType: 'attr',
	captionsData: 'alt',
	captionPosition: 'bottom',
	captionDelay: 300,
});

