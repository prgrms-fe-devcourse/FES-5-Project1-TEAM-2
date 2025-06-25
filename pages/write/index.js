import { renderWriteCategory, renderWriteTitle, renderTabButton } from './dom.js';
import { handleSubmitButton } from './controller.js';
import { getNode } from '../../lib/utils/getNode.js';

renderWriteCategory();
renderWriteTitle();
renderTabButton();

const submitButton = getNode('.submit-button');
submitButton.addEventListener('click', handleSubmitButton);
