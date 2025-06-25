import { elements } from './dom.js';
import { handleLogin } from './handlers.js';

/**
 * 로그인 컨드롤러
 */
export const loginController = {
  eventBinding() {
    elements.loginBtn.addEventListener('click', handleLogin);
  },

  init() {
    this.eventBinding();
  },
};
