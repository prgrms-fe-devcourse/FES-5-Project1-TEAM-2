import { toggleBoardTabClass } from './dom.js';

export const handleButtonActive = e => {
  const button = e.target.closest('button');
  if (button) {
    toggleBoardTabClass(button.id);
  }
};

export const handleListItem = e => {
  console.log(e.target.closest('li'));
};
