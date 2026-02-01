import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector("#gallery");
const loaderWrapper = document.querySelector("#loader-wrapper");

const lightbox = new SimpleLightbox(".gallery__item a", {
  captionsGetter: false,
  overlayOpacity: 0.85,
});



/**
 * @param {Array<Object>} images
 */
export function createGallery(images) {
  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <li class="gallery__item">
          <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" />
            <div class="card-stats">
              <span>
                <span class="stat-label">Likes</span>
                <span class="stat-value">${likes}</span>
              </span>
              <span>
                <span class="stat-label">Views</span>
                <span class="stat-value">${views}</span>
              </span>
              <span>
                <span class="stat-label">Comments</span>
                <span class="stat-value">${comments}</span>
              </span>
              <span>
                <span class="stat-label">Downloads</span>
                <span class="stat-value">${downloads}</span>
              </span>
            </div>
          </a>
        </li>`)
    .join("");

  galleryEl.insertAdjacentHTML("beforeend", markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = "";
}

export function showLoader() {
  loaderWrapper.classList.add("active");
}

export function hideLoader() {
  loaderWrapper.classList.remove("active");
}