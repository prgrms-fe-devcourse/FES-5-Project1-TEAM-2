import { alertAnimation } from './animation.js';

const configType = {
  success: { icon: '🙆‍♀️', color: 'dodgerblue' },
  info: { icon: '💁🏻‍♀️', color: 'green' },
  fail: { icon: '🙅‍♀️', color: '#9b0e17' },
};

/**
 * 토스트 알림을 표시 함수
 *
 * @param {Object} options - 토스트 옵션
 * @param {string} options.message - 표시할 메시지
 * @param {number} options.duration - 표시 시간 (밀리초)
 * @param {string} options.type - 토스트 타입 ('success', 'fail', 'info')
 */
export const showToast = ({ message, duration = 3000, type = 'success' }) => {
  const { icon, color } = configType[type];
  const container = document.querySelector('.alert');

  const alertIcon = document.querySelector('.alert .icon');
  const alertMessage = document.querySelector('.alert .message');

  container.style.backgroundColor = color;

  alertMessage.textContent = message;
  alertIcon.textContent = icon;

  alertAnimation(duration);
};
