import { createImagesList } from "./js/render-functions.js";
import { getImages } from "./js/pixabay-api.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', sendUserRequest);

function sendUserRequest(e) {
    e.preventDefault();
    const userData = e.target.elements.request.value.trim();
    getImages(userData)
        .then(data => {
            loader.classList.toggle('is-visible');
            if (data.total !== 0) {
                const markup = createImagesList(data);
                gallery.insertAdjacentHTML('beforeend', markup);
            } else { alert('Sorry, there are no images matching your search query. Please try again!'); }
        })
        .catch((error) => console.log(error));
    form.reset();
}