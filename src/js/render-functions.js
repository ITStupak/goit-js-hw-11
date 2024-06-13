
function createImage({ largeImageURL, previewURL, id, comments, downloads, likes, views }) {
  return `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img
            class="gallery-image"
            src="${largeImageURL}"
            data-source="${largeImageURL}"
            alt="${id}"
          />
        </a>
        <div class="gallery-text">
          <div class="text-property">
            <p class="text-dscr">Likes</p>
            <p class="text-count">${likes}</p>
          </div>
          <div class="text-property">
            <p class="text-dscr">Views</p>
            <p class="text-count">${views}</p>
          </div>
          <div class="text-property">
            <p class="text-dscr">Comments</p>
            <p class="text-count">${comments}</p>
          </div>
          <div class="text-property">
            <p class="text-dscr">Downloads</p>
            <p class="text-count">${downloads}</p>
          </div>
        </div>
    </li>`    
}

export function createImagesList(data) {
  const arr = data.hits;
  return arr.map(createImage).join('');
}