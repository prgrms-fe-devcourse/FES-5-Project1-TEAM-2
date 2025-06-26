import { getNode } from '../../lib/utils/getNode.js';
import { handleListItem, handleWriteButton, handleTapClick } from './handler.js';

export const listEventBind = () => {
  const buttonGroup = getNode('.button-group');
  const writeBtn = getNode('#write-button');
  const listItem = getNode('.list');

  buttonGroup.addEventListener('click', handleTapClick);
  writeBtn.addEventListener('click', handleWriteButton);
  listItem.addEventListener('click', handleListItem);
};
