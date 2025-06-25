import { renderWriteCategory, renderWriteTitle, renderTabButton } from './dom.js';
import { handleSubmitButton } from './controller.js';

renderWriteCategory();
renderWriteTitle();
renderTabButton();

const button = document.querySelector('.submit-button');

button.addEventListener('click', handleSubmitButton);
