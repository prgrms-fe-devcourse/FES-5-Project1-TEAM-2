import { apiService } from '../../lib/api/service.js';
import { renderBoard, renderBoardDetail } from './render.js';

/**
 * @description 게시글 목록 데이터를 가져온다.
 * @param {string} endpoint
 */
export const getBoardList = async endpoint => {
  const response = await apiService.get(endpoint);
  renderBoard(response);
};

/**
 * @description 게시글 상세 정보 데이터를 가져온다
 * @param {string} boardId
 * @param {string} endpoint
 */
export const getBoardDetailData = async (boardId, endpoint) => {
  const response = await apiService.get(endpoint);
  const selectedBoardData = response.find(boardData => String(boardData.id) === String(boardId));
  renderBoardDetail(selectedBoardData);
};

/**
 * @description 게시글 정보를 제거한다.
 * @param {string} boardId
 * @param {string} endpoint
 */
export const deleteBoardData = async (boardId, endpoint) => {
  const response = await apiService.delete(`${endpoint}/${boardId}`);
  console.log(response);
};
