import { apiService } from '../../lib/api/service.js';
import { getNode } from '../../lib/utils/getNode.js';

/**
 * api request body 생성
 * @param {void}
 * @returns {void}
 */
const getWriteRequestBody = () => {
  const titleValue = getNode('#write-title input').value;
  const categoryValue = getNode('#write-category input').value;
  const textAreaValue = getNode('textarea').value;
  const now = new Date().toLocaleString().trim();

  return {
    category: categoryValue,
    title: titleValue,
    contents: textAreaValue,
    writer: '유저이름',
    createdAt: now,
    updatedAt: now,
  };
};

/**
 * 글 작성 후 서버에게 정보 전달
 * @param {void}
 * @returns {void}
 */
export const handleSubmitButton = async e => {
  e.preventDefault();
  const requestBody = getWriteRequestBody();
  await apiService.post('freeBoard', requestBody);
};
