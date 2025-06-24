import { handleBoardButton, handleMenuIsactive } from './handler.js';

export const bindingEvent = () => {
  const nav = document.querySelector('.menu');
  nav.addEventListener('click', handleMenuIsactive);

  const boardButtons = document.querySelector('.buttonBox');
  boardButtons.addEventListener('click', handleBoardButton);
};
