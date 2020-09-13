import InfiniteScroll from 'infinite-scroll';

import apiService from '../services/apiService';
import imageListItemsTemplate from '../../templates/image-list-items.hbs';

import { error, myStack } from './pnotify';

import masonry from './masonry';

const infScrollInstance = new InfiniteScroll(
  document.querySelector('#gallery'),
  {
    history: false,
    responseType: 'text',
    path() {
      return `https://cors-anywhere.herokuapp.com/https://pixabay.com/api/?key=18157949-2d9c9122479d48318346a38d9&image_type=photo&q=${apiService.query}&page=${this.pageIndex}&per_page=12`;
    },
  },
);

infScrollInstance.on('load', (response, path) => {
  if (apiService.query !== '') {
    const answer = JSON.parse(response);
    const images = answer.hits;
    // if (apiService.query !== '') {
    //   insertListItems(images);
    // }
    const markup = imageListItemsTemplate(images);
    // const joinedMarkup = markup.join('');
    const proxyEl = document.createElement('div');
    proxyEl.innerHTML = markup;

    const parsedItems = proxyEl.querySelectorAll('.photo-card');

    infScrollInstance.appendItems(parsedItems);

    masonry(images);
  }
});

infScrollInstance.on('error', function (err, path) {
  console.log(err);
  error({
    text: `${err}. Please, reload the page and try again.`,
    hide: false,
    closer: false,
    sticker: false,
    stack: myStack,
    width: '100%',
  });
});

export default infScrollInstance;
