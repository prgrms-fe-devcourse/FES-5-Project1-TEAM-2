import { getNode } from '../../lib/utils/getNode.js';
import { handleBoardDelete, handleBoardListClick } from './handler.js';

/**
 * @description 이벤트 binding 함수
 */
export const eventBinding = () => {
  const boardContent = getNode('.board-list-ul'); //게시판 리스트
  const deleteButton = getNode('.delete-button'); //삭제버튼
  //게시판 리스트 클릭이벤트
  boardContent.addEventListener('click', handleBoardListClick);
  //삭제 버튼 클릭이벤트
  deleteButton.addEventListener('click', handleBoardDelete);
};
