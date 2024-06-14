import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

function createImage({ largeImageURL, webformatURL, tags, comments, downloads, likes, views }) {
  return `<li class="gallery-item">
    <a class="gallery-link" href=${largeImageURL}>
      <img
        class="gallery-image"
        src=${webformatURL}
        alt=${tags}
      />
    </a>
    <ul class="gallery-text">
      <li class="gallery-text-property">
        <p class="gallery-text-dscr">Likes</p>
        <p class="gallery-text-count">${likes}</p>
      </li>
      <li class="gallery-text-property">
        <p class="gallery-text-dscr">Views</p>
        <p class="gallery-text-count">${views}</p>
      </li>
      <li class="gallery-text-property">
        <p class="gallery-text-dscr">Comments</p>
        <p class="gallery-text-count">${comments}</p>
      </li>
      <li class="gallery-text-property">
        <p class="gallery-text-dscr">Downloads</p>
        <p class="gallery-text-count">${downloads}</p>
      </li>
    </ul> 
  </li>`;   
};

export function createImagesList(data) {
  const arr = data.hits;
  return arr.map(createImage).join('');
};

const lightbox = new SimpleLightbox('.gallery-item a', {
    captions: true,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    animationSpeed: 300,
    widthRatio: 1,
    heightRatio: 0.95,
    disableRightClick: true,
});