import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api.js";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from "./js/render-functions.js";

const form = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");

const toastBase = {
  theme: "dark",
  position: "topRight",
  timeout: 5000,
  closeOnClick: true,
};

form.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const query = searchInput.value.trim();

  if (!query) {
    iziToast.warning({
      ...toastBase,
      title: "Warning",
      message: "Please enter a search keyword.",
    });
    return;
  }

  clearGallery();

  showLoader();

  getImagesByQuery(query)
    .then((data) => {
      hideLoader();

      const images = data.hits;

      if (images.length === 0) {
        iziToast.error({
          ...toastBase,
          title: "No results",
          message:
            "Sorry, there are no images matching your search query. Please try again!",
        });
        return;
      }

      createGallery(images);
    })
    .catch(() => {
      hideLoader();

      iziToast.error({
        ...toastBase,
        title: "Error",
        message:
          "Something went wrong. Please check your connection and try again.",
      });
    });
}