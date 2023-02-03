import axios from 'axios';

const API_KEY = '31659671-7f58f923186c72e7c5776eca1';
const BASE_URL = 'https://pixabay.com/api/';

export default function getImages(inquiry, page) {
  return axios.get(
    `${BASE_URL}?q=${inquiry}&key=${API_KEY}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`
  );
}
