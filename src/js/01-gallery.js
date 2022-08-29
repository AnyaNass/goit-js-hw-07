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

	const originalImageLink = event.target.dataset.source

	addOriginalImgToModal(originalImageLink);

}

function addOriginalImgToModal(originalImageLink) {
	const instance = basicLightbox.create(`
    <img src="${originalImageLink}" width="800" height="600">
`)

	instance.show();

	const visible = instance.visible();

	if (visible) {
		closeByKeybord(instance);
	}
}



function closeByKeybord(modal) {
	document.addEventListener("keydown", () => {
		if (event.keyCode == 27) {
			modal.close()
		}
	})
}


