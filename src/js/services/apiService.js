//for LoadMore Button
import axios from 'axios';

// import PNotify from '@pnotify/core/dist/PNotify.js';
// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/core/dist/Material.css';
// import { defaults, success, error } from '@pnotify/core';
// defaults.styling = 'material';
// defaults.icons = 'material';

const baseUrl =
  'https://pixabay.com/api/?key=18157949-2d9c9122479d48318346a38d9&image_type=photo&';

// axios.defaults.baseURL = baseUrl;

export default {
  page: 1,
  query: '',
  fetchImages() {
    const requestParams = `q=${this.query}&page=${this.page}&per_page=12`;

    return axios
      .get(baseUrl + requestParams)
      .then(parsedResponce => {
        this.incrementPage();

        // success({
        //   text: "I'm a success.",
        //   delay: 2000,
        //   closer: false,
        //   sticker: false,
        // })
        return parsedResponce.data.hits;
      })
      .catch(console.warn);
  },
  get searchQuery() {
    return this.query;
  },
  set searchQuery(string) {
    this.query = string;
  },
  incrementPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },
};
