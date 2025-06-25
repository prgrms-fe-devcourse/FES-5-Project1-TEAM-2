import { apiClient } from './apiClient.js';
import { API_URL } from './config.js';
import { elements } from './dom.js';

/**
 * 로그인 핸들러
 */
export const handleLogin = async e => {
  e.preventDefault();
  const email = elements.emailInput.value;
  const password = elements.passwordInput.value;

  try {
    const res = await apiClient.post(`${API_URL}/login`, {
      email: email,
      password: password,
    });

    console.log(res);
  } catch {}
};

/**
 * 회원가입 핸들러
 */
export const handleRegister = async () => {
  const email = elements.emailInput.value;
  const password = elements.passwordInput.value;

  try {
    const res = await apiClient.post(`${API_URL}/register`, {
      email: email,
      password: password,
    });
    console.log(res);
  } catch {}
};
