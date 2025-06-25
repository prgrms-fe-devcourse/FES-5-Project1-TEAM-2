import { elements } from './dom.js';

/**
 * 로그인 핸들러
 */
export const handleLogin = () => {
  const email = elements.emailInput.value;
  const password = elements.passwordInput.value;

  console.log(email, password);
};
