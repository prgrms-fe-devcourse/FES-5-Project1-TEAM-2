import { getBoardDetailData } from './getData.js';

/**
 * @description 게시판 목록 click이벤트 핸들러
 * @param {*} e
 */
export const handleBoardListClick = e => {
  e.preventDefault();
  const content = e.target.closest('a');
  if (content) {
    const boardId = content.getAttribute('data-id');
    getBoardDetailData(boardId, 'freeBoard');
  }
};
