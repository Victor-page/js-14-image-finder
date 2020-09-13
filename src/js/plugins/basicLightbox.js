import * as basicLightbox from 'basiclightbox';
import refs from '../refs';

refs.imageList.addEventListener('click', clickByPhotoHandler);

function clickByPhotoHandler(e) {
  const instance = basicLightbox.create(
    `<img style="z-index: 2;" src="${e.target.dataset.largeImage}">`,
  );
  instance.show();
}
