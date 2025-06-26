import { setBoardDataList } from '../dom/data.js';
import { addClass, removeClass } from '../utils/attribute.js';
import { toggleBoardTabClass } from '../dom/render.js';
import { getNode } from '../utils/getNode.js';
import { renderPage } from '../../router.js';
import { sessionStorageUtil } from '../utils/sessionStorageUtil.js';

export const handleMenuIsActive = e => {
  const menu = document.querySelectorAll('.menu >li');
  const pick = e.target;
  if (pick.tagName !== 'LI') return;
  menu.forEach(li => {
    removeClass(li, 'is-menu-active');
  });
  addClass(pick, 'is-menu-active');
};

export const handleBoardButton = e => {
  const pick = e.target;
  if (pick.closest('button')) {
    if (pick.id === 'group-recruitment') {
      setBoardDataList('groupBoard');
      toggleBoardTabClass('groupBoard');
    } else {
      setBoardDataList('freeBoard');
      toggleBoardTabClass('freeBoard');
    }
  }
};

export const handleClickLogout = () => {
  console.log('log');
  sessionStorageUtil.removeSession();
  renderPage('/home');
};
