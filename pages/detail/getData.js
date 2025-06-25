import { getApiData } from '../../lib/api/getApi.js';
import { renderBoard, renderBoardDetail } from './render.js';

/**
 * @description 게시글 목록 데이터를 가져온다.
 * @param {string} endpoint
 */
export const getBoardList = async endpoint => {
  const response = await getApiData(endpoint);
  renderBoard(response);
};

/**
 * @description 게시글 상세 정보 데이터를 가져온다
 * @param {string} boardId
 * @param {string} endpoint
 */
export const getBoardDetailData = async (boardId, endpoint) => {
  const response = await getApiData(endpoint);
  const selectedBoardData = response.find(boardData => boardData.id === Number(boardId));
  renderBoardDetail(selectedBoardData);
};
