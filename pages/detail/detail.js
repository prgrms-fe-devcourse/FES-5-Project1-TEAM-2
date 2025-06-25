import { getBoardList } from './getData.js';
import { eventBinding } from './listener.js';

document.addEventListener('DOMContentLoaded', () => {
  // 게시판
  getBoardList('freeBoard');
  eventBinding();
});
