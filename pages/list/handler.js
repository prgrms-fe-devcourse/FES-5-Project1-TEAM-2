import { renderBoardList, toggleBoardTabClass } from './dom.js';
import { renderPage } from "../../router.js";


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

export const handleWriteButton = e => {
  const writeBtn = e.target.closest('#write-button');
  if(writeBtn){
    e.preventDefault();
      renderPage('/write'); 
  }
}

