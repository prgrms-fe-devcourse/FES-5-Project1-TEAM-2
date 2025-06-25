import { postWrite } from './api.js';
import { renderWriteCategory, renderWriteTitle, renderTabButton } from './dom.js';

renderWriteCategory();
renderWriteTitle();
renderTabButton();

const button = document.querySelector('.submit-button');
/**
 * api request body 생성
 * @param {void}
 * @returns {void}
 */
const getWriteRequestBody = () => {
  const titleValue = document.querySelector('#write-title input').value;
  const categoryValue = document.querySelector('#write-category input').value;
  const textAreaValue = document.querySelector('textarea').value;
  const now = new Date().toLocaleString().trim();

  return {
    id: 1,
    category: categoryValue,
    title: titleValue,
    contents: textAreaValue,
    writer: '유저이름',
    createdAt: now,
    updatedAt: now,
  };
};

/**
 * 정보 전송
 * @param {void}
 * @returns {void}
 */
const handleSubmitButton = async e => {
  e.preventDefault();
  const requestBody = getWriteRequestBody();
  const data = await postWrite('freeBoard', requestBody);
};

button.addEventListener('click', handleSubmitButton);
