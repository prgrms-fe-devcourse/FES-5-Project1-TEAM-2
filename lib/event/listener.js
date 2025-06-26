import { handleBoardButton, handleClickLogin } from './handler.js';

export const bindingEvent = () => {
  // const nav = document.querySelector('.menu');
  // nav.addEventListener('click', handleMenuIsActive);

  const boardButtons = document.querySelector('.buttonBox');
  boardButtons.addEventListener('click', handleBoardButton);

  const loginButton = document.querySelector('#login-button');
  loginButton.addEventListener('click', handleClickLogin);
};
