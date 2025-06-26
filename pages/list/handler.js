import { renderBoardList, toggleBoardTabClass } from './dom.js';

const handleButtonActive = button => {
  if (button) {
    toggleBoardTabClass(button.id);
  }
};

export const handleListItem = e => {
  console.log(e.target.closest('li'));
};

export const handleTapClick = e => {
  const button = e.target.closest('button');
  handleButtonActive(button);

  const endPoint = button.dataset.value;
  renderBoardList(endPoint);
};
