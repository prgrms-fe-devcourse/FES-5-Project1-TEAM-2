import { getNode } from '../../lib/utils/getNode.js';
import { handleBoardListClick } from './handler.js';

/**
 * @description 이벤트 binding 함수
 */
export const eventBinding = () => {
  const boardContent = getNode('.board-list-ul');
  boardContent.addEventListener('click', handleBoardListClick);
};
