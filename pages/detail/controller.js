import { apiService } from '../../lib/api/service.js';
import { showToast } from '../../toast/index.js';
import { renderBoard, renderBoardDetail } from './render.js';

/**
 * @description 게시글 목록 데이터를 가져온다.
 * @param {string} endpoint
 */
export const getBoardList = async endpoint => {
  try {
    const response = await apiService.get(endpoint);
    renderBoard(response);
  } catch (error) {
    showToast({ message: error, duration: 3000, type: 'fail' });
    throw error;
  }
};

/**
 * @description 게시글 상세 정보 데이터를 가져온다
 * @param {string} boardId
 * @param {string} endpoint
 */
export const getBoardDetailData = async (boardId, endpoint) => {
  try {
    const response = await apiService.get(endpoint);
    const selectedBoardData = response.find(boardData => String(boardData.id) === String(boardId));
    renderBoardDetail(selectedBoardData);
  } catch (error) {
    showToast({ message: error, duration: 3000, type: 'fail' });
    throw error;
  }
};

/**
 * @description 게시글 정보를 제거한다.
 * @param {string} boardId
 * @param {string} endpoint
 */
export const deleteBoardData = async (boardId, endpoint) => {
  try {
    const response = await apiService.delete(`${endpoint}/${boardId}`);
    showToast({ message: '게시글이 삭제되었습니다.', duration: 3000, type: 'success' });
  } catch (error) {
    showToast({ message: error, duration: 3000, type: 'fail' });
    throw error;
  }
};
