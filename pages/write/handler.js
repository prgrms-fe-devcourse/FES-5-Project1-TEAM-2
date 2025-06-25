import { getNode } from '../../lib/utils/getNode.js';
import { getWriteRequestBody } from './setData.js';
import { removeClass, addClass } from '../../lib/utils/attribute.js';
import { replaceMarkDown } from '../../lib/utils/markDownReplace.js';

/**
 * 글 작성 후 서버에게 정보 전달
 * @param {void}
 * @returns {void}
 */
export const handleSubmitButton = async e => {
  e.preventDefault();
  const requestBody = getWriteRequestBody();
  await apiService.post('freeBoard', requestBody);
};

/**
 * write, preview 버튼 css class 상태 변경 함수
 * @param {void}
 * @returns {void}
 */
const onChangeButtonCssClass = (nodeList, node) => {
  nodeList.forEach(btn => {
    removeClass(btn, 'is-button-active');
  });
  addClass(node, 'is-button-active');
};

/**
 * write, preview 버튼 hidden 상태 변경 함수
 * @param {void}
 * @returns {void}
 */
const onChangeButtonHidden = (textArea, preview) => {
  textArea.hidden = !textArea.hidden;
  preview.hidden = !preview.hidden;
};

/**
 * write, preview 버튼 핸들링 함수
 * @param {void}
 * @returns {void}
 */
export const handleWriteButton = e => {
  const buttons = document.querySelectorAll('.button-box >button');
  const textArea = getNode('textArea');
  const clickedBtn = e.target;
  const preview = getNode('.preview');

  if (clickedBtn.tagName !== 'BUTTON') return;
  onChangeButtonCssClass(buttons, clickedBtn);

  if (clickedBtn.id === 'write-Preview-button') {
    onChangeButtonHidden(textArea, preview);
    preview.innerHTML = replaceMarkDown(textArea.value);
  } else {
    onChangeButtonHidden(textArea, preview);
  }
};
