import apiService from './services/apiService';
// import imageListItemsTemplate from '../templates/image-list-items.hbs';

import infScrollInstance from './plugins/infiniteScroll';

import refs from './refs';

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
// refs.loadMoreBtn.addEventListener('click', loadMoreBtnHandler);

function searchFormSubmitHandler(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const input = form.elements.query;

  clearListItems();

  infScrollInstance.pageIndex = 1; //reset

  //for LoadMore Button:
  // apiService.resetPage();
  apiService.searchQuery = input.value;

  // apiService
  //   .fetchImages()
  //   .then(images => {
  //     insertListItems(images);
  //   })
  //   .catch(error => {
  //     console.warn(error);
  //   });

  input.value = '';
  infScrollInstance.loadNextPage();
}

// function loadMoreBtnHandler() {
//   apiService
//     .fetchImages()
//     .then(insertListItems)
//     .catch(error => {
//       console.warn(error);
//     });
// }

//for load more button too
// function insertListItems(items) {
//   const markup = imageListItemsTemplate(items);

//   refs.imageList.insertAdjacentHTML('beforeend', markup);
// }

function clearListItems() {
  refs.imageList.innerHTML = '';
}

// msnry
// import Masonry from 'masonry-layout';
// import imagesLoaded from 'imagesloaded';

// import imageListItemsTemplate from '../templates/image-list-items.hbs';

//imagesLoaded('.grid').on('progress', function () {
//  masonryInstance.layout();
//});

// setInterval(() => {
//   const item1 = makeGridItem(
//     'https://pixabay.com/get/50e7d3474c4faa0df7c5d57ccf2932791c3bd7f852547840732d7ed79148_640.jpg',
//   );
//   const item2 = makeGridItem(
//     'https://pixabay.com/get/50e7d347434faa0df7c5d57ccf2932791c3bd7f852547840732d7ed79148_640.jpg',
//   );

//   document.querySelector('.grid').append(item1, item2);

//   masonryInstance.addItems([item1, item2]);

//   imagesLoaded('.grid').on('progress', () => {
//     masonryInstance.layout();
//   });
// }, 6000);

// const masonryInstance = new Masonry('.grid', {
//   itemSelector: '.photo-card',
//   columnWidth: 160,
//   // gutter: 2,
//   transitionDuration: '0.3s',
//   percentPosition: true,
// });
//what comes:
// fetch(
//   'https://pixabay.com/api/?key=18157949-2d9c9122479d48318346a38d9&image_type=photo&q=cat',
// )
//   .then(res => res.json())
//   .then(({ hits }) => {
//     const elements = hits.map(hit => makeGridItem(hit.webformatURL));
//     document.querySelector('.grid').append(...elements);
//     console.log([elements]);
//     masonryInstance.appended([elements]);

//     imagesLoaded('.grid').on('progress', function () {
//       masonryInstance.layout();
//     });
//   });
