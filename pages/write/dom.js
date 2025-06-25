import { getNode } from '../../lib/utils/getNode.js';

/**
 * 카테고리, 제목 태그 생성
 * @param {string} label
 * @returns {HTMLDivElement} 태그 생성
 */
const createInputTags = label => {
  const placeholder = label === 'Category' ? '카테고리를 입력해 주세요.' : '제목을 입력해 주세요.';

  return `
      <h1 class="label">${label}</h1>
      <input type="text" placeholder="${placeholder}" />
    `;
};

/**
 *  write, preview 버튼 생성
 * @param {string} label
 * @returns {HTMLDivElement} 태그 생성
 */
const createTabButton = label => {
  return `<button id="write-${label}-button" type="button" class="${label === 'Write' ? 'is-button-active' : ''}">${label}</button>`;
};

/**
 * 카테고리 태그 렌더링
 * @returns {void}  반환값 없음
 */
export const renderWriteCategory = () => {
  const category = getNode('#write-category');
  category.insertAdjacentHTML('beforeend', createInputTags('Category'));
};

/**
 * 제목 태그 렌더링
 * @returns {void}  반환값 없음
 */

export const renderWriteTitle = () => {
  const title = getNode('#write-title');
  title.insertAdjacentHTML('beforeend', createInputTags('Title'));
};

/**
 * write, preview 버튼 렌더링
 * @returns {void}  반환값 없음
 */
export const renderTabButton = () => {
  const buttonBox = getNode('.button-box');
  buttonBox.insertAdjacentHTML('beforeend', createTabButton('Write'));
  buttonBox.insertAdjacentHTML('beforeend', createTabButton('Preview'));
};
