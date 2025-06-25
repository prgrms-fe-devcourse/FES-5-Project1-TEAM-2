import { apiService } from '../../lib/api/service.js';
import { getNode } from '../../lib/utils/getNode.js';

const createBoardItem = (category, title, date) => {
  return `
  <li class="post-item">
          <span class="badge">${category}</span>
          <span class="post-title">${title}</span>
          <span class="post-date">${date}</span>
        </li>`;
};

/**
 * @description 게시글 목록 데이터를 가져온다.
 * @param {string} endpoint
 */
export const getBoardList = async endpoint => {
  try {
    const response = await apiService.get(endpoint);
    setBoardList(response);
  } catch (error) {
    // showToast({ message: error, duration: 3000, type: 'fail' });
    throw error;
  }
};

const setBoardList = boardList => {
  const postHTML = boardList.map(item => createBoardItem(item.category, item.title, item.createdAt)).join('');

  const listBox = getNode('.list');

  listBox.insertAdjacentHTML('beforeend', postHTML);
};
const buttonGroup = getNode('.button-group');
export const toggleBoardTabClass = className => {
  const freeBoardBtn = getNode('#free-button');
  const groupBoardBtn = getNode('#group-button');
  if (className === 'group-button') {
    freeBoardBtn.classList.remove('button-active');
    groupBoardBtn.classList.add('button-active');
  } else {
    groupBoardBtn.classList.remove('button-active');
    freeBoardBtn.classList.add('button-active');
  }
};
const handleButtonActive = e => {
  const button = e.target.closest('button');
  if (button) {
    toggleBoardTabClass(button.id);
  }
};

buttonGroup.addEventListener('click', handleButtonActive);

getBoardList('freeBoard');
