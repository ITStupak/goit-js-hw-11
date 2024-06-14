import { getImages } from "./js/pixabay-api.js";
import { createImagesList } from "./js/render-functions.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', sendUserRequest);
            
function sendUserRequest(e) {
    e.preventDefault();
    const userData = e.target.elements.request.value.trim();
    if (userData !== '') {
        gallery.innerHTML = '';
        const loader = document.querySelector('.loader');
        loader.style.display = 'block';
        getImages(userData)
            .then(data => {
                if (data.total !== 0) {
                    const markup = createImagesList(data);
                    gallery.insertAdjacentHTML('beforeend', markup);
                    
                    const imageLoadPromises = Array.from(gallery.querySelectorAll('img')).map(image =>
                    new Promise(resolve => {
                        image.onload = resolve;
                    })
                    );
                    return Promise.all(imageLoadPromises);

                } else { alert('Sorry, there are no images matching your search query. Please try again!'); }
            })
            .then(() => loader.style.display = 'none')
            .catch((error) => {
                console.log(error);
                loader.style.display = 'none';
            })
        form.reset();
    } else { alert('Enter your Request!') }
}
