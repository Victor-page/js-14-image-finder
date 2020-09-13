import PNotify from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import { defaults, success, error, Stack } from '@pnotify/core';
defaults.styling = 'material';
defaults.icons = 'material';

const myStack = new Stack({
  dir1: 'up',
  firstpos1: 0,
  spacing1: 0,
});

export { error, myStack };
