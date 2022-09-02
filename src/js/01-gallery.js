import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const cardsMurkup = createGalleryCards(galleryItems);

gallery.insertAdjacentHTML("afterbegin", cardsMurkup);


function createGalleryCards(galleryItems) {
	return galleryItems.map(({ preview, original, description }) => {
		return `<div class="gallery__item">
	<a class="gallery__link" href="${original}">
	  <img
		 class="gallery__image"
		 src="${preview}"
		 data-source="${original}"
		 alt="${description}"
	  />
	</a>
 </div>`
	}).join('');
};

gallery.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
	event.preventDefault();

	if (!event.target.classList.contains("gallery__image")) {
		return;
	}

	addOriginalImgToModal(event.target.dataset.source);
}

function addOriginalImgToModal(originalImageLink) {
	const instance = basicLightbox.create(`
    <img src="${originalImageLink}" width="800" height="600">
`)

	instance.show();

	closeByKeybord(instance);

}

function closeByKeybord(instance) {
	document.addEventListener("keydown", (e) => {
		if (e.code == "Escape") {
			instance.close()
		}
	}, { once: true });
}


