import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "goit-js-hw-11";

/**
 * @param {string} query
 * @returns {Promise<Object>} 
 */
export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  };

  return axios.get(BASE_URL, { params }).then((response) => response.data);
}