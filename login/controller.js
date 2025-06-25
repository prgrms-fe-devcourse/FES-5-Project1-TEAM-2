import { elements } from './dom.js';
import { handleLogin } from './handlers.js';

/**
 * 로그인 컨드롤러
 */
export const loginController = {
  eventBinding() {
    elements.loginForm.addEventListener('submit', handleLogin);
  },

  init() {
    this.eventBinding();
  },
};
