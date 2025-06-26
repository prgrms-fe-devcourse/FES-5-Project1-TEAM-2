import { handleBoardButton, handleClickLogout } from './handler.js';

export const bindingEvent = () => {
  // const nav = document.querySelector('.menu');
  // nav.addEventListener('click', handleMenuIsActive);

  const boardButtons = document.querySelector('.buttonBox');
  boardButtons.addEventListener('click', handleBoardButton);

  const logoutButton = document.querySelector('#logout-button');
  logoutButton.addEventListener('click', handleClickLogout);
};
