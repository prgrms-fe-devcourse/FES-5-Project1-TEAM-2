import { renderWriteCategory, renderWriteTitle, renderTabButton } from './dom.js';
import { handleSubmitButton } from './controller.js';
import { getNode } from '../../lib/utils/getNode.js';
import { removeClass, addClass } from '../../lib/utils/attribute.js';

renderWriteCategory();
renderWriteTitle();
renderTabButton();

const submitButton = getNode('.submit-button');
submitButton.addEventListener('click', handleSubmitButton);

const tabButtons = getNode('.button-box');
/**
 *
 * @param {void}
 * @returns {void}
 */

/**
 * 버튼 클릭시 css 이동
 * @param {void}
 * @returns {void}
 */
const handleWriteButton = e => {
  const buttons = document.querySelectorAll('.button-box >button');
  const clickedBtn = e.target;

  if (clickedBtn.tagName !== 'BUTTON') return;
  buttons.forEach(btn => {
    removeClass(btn, 'is-button-active');
  });
  addClass(clickedBtn, 'is-button-active');

  console.log(buttons);
};
tabButtons.addEventListener('click', handleWriteButton);
