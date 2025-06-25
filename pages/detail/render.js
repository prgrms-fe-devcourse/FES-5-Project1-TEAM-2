import { getNode } from '../../lib/utils/getNode.js';
import { createBoard } from './create.js';
import { replaceMarkDown } from '../../lib/utils/markDownReplace.js';

/**
 * @description 게시판 배열데이터를 dom요소에 추가한다.
 * @param {array} boardList
 */
export const renderBoard = boardList => {
  const communityBox = getNode('.board-list-ul');
  const postHTML = boardList.map(item => createBoard(item)).join('');

  communityBox.innerHTML = postHTML;
};

/**
 * @description 게시판 상세정보를 화면에 rendering한다.
 * @param {object} BoardData
 */
export const renderBoardDetail = BoardData => {
  const category = getNode('.category');
  const title = getNode('.board-detail-title');
  const writer = getNode('.writer');
  const writeDate = getNode('.writeDate');
  const content = getNode('.contents');
  const detailContent = getNode('.board-detail-content');

  detailContent.setAttribute('data-id', BoardData.id);
  category.textContent = BoardData.category;
  title.textContent = BoardData.title;
  writer.textContent = BoardData.writer;
  writeDate.textContent = BoardData.createdAt;
  content.innerHTML = replaceMarkDown(BoardData.contents);
};
