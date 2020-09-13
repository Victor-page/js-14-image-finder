import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

import refs from '../refs';

function masonry(images) {
  imagesLoaded(refs.imageList, function () {
    const msnry = new Masonry(refs.imageList, {
      itemSelector: '.photo-card',
      gutter: 10,
      percentPosition: true,
      transitionDuration: '0.2s',
      stagger: 30,
    });

    refs.searchBtn.addEventListener('click', function () {
      const fragment = document.createDocumentFragment();

      fragment.append(...images);

      // append elements to container
      refs.imageList.append(fragment);
      // add and lay out newly appended elements
      msnry.appended(images);
    });
  });
}

export default masonry;
