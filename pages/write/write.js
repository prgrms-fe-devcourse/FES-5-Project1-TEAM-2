import { renderWriteCategory, renderWriteTitle, renderTabButton } from './dom.js';
import { handleSubmitButton } from './controller.js';
import { getNode } from '../../lib/utils/getNode.js';
import { removeClass, addClass } from '../../lib/utils/attribute.js';
import { replaceMarkDown } from '../../lib/utils/markDownReplace.js';

renderWriteCategory();
renderWriteTitle();
renderTabButton();

const submitButton = getNode('.submit-button');
submitButton.addEventListener('click', handleSubmitButton);

const tabButtons = getNode('.button-box');

/**
 * write, preview 버튼 css 핸들링
 * @param {void}
 * @returns {void}
 */
const handleWriteButton = e => {
  const buttons = document.querySelectorAll('.button-box >button');
  const textArea = getNode('textArea');
  const clickedBtn = e.target;
  const preview = getNode('.preview');

  if (clickedBtn.tagName !== 'BUTTON') return;
  buttons.forEach(btn => {
    removeClass(btn, 'is-button-active');
  });
  addClass(clickedBtn, 'is-button-active');
  console.log(textArea.value);

  if (clickedBtn.id === 'write-Preview-button') {
    textArea.hidden = true;
    preview.hidden = false;
    preview.innerHTML = replaceMarkDown(textArea.value);
  } else {
    textArea.hidden = false;
    preview.hidden = true;
  }
};
tabButtons.addEventListener('click', handleWriteButton);
