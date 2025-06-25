import { getNode } from '../../lib/utils/getNode.js';
import { deleteBoardData, getBoardDetailData } from './controller.js';

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

/**
 * @description 게시글 삭제 버튼 click이벤트 핸들러
 * @param {*} e
 */
export const handleBoardDelete = e => {
  e.preventDefault();
  const deleteBtn = e.target.closest('a');
  const boardDetail = getNode('.board-detail-content');
  if (deleteBtn) {
    const boardId = boardDetail.getAttribute('data-id');
    if (confirm('정말 삭제하시겠습니까?')) {
      deleteBoardData(boardId, 'freeBoard');
    }
  }
};
