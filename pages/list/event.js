import { getNode } from '../../lib/utils/getNode.js';

import { handleButtonActive, handleListItem } from './handler.js';

export const listEventBind = () => {
  const buttonGroup = getNode('.button-group');
  const listItem = getNode('.list');
  buttonGroup.addEventListener('click', handleButtonActive);
  listItem.addEventListener('click', handleListItem);
};
