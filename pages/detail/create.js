/**
 * @description 게시판 목록 태그를 만드는 함수
 * @param {*} data
 * @returns
 */
export const createBoard = data => {
  return /* html */ `
  <li class="board-contents" >
    <a href="#" data-id="${data.id}" class="board-title">${data.title}</a>
  </li>
  `;
};
