import { getNode } from '../../lib/utils/getNode.js';

import { handleListItem, handleTapClick } from './handler.js';

export const listEventBind = () => {
  const buttonGroup = getNode('.button-group');
  const listItem = getNode('.list');
  buttonGroup.addEventListener('click', handleTapClick);
  listItem.addEventListener('click', handleListItem);
};
