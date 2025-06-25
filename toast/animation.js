/**
 * toast 표시 애니메이션
 * @param {number} duration
 */
export const alertAnimation = duration => {
  const alert = document.querySelector('.alert');
  const progressBar = document.querySelector('.progress-bar');
  const tl = gsap.timeline();

  tl.set(alert, {
    opacity: 0,
    visibility: 'visible',
    y: -50,
    scale: 0.8,
  })
    .set(progressBar, { width: '100%' })
    .to(alert, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.4,
      ease: 'back.out(1.7)',
    })
    .to(
      progressBar,
      {
        width: '0%',
        duration: duration / 1000,
        ease: 'none',
      },
      0.4
    )
    .to(alert, {
      opacity: 0,
      y: -50,
      scale: 0.8,
      duration: 0.3,
      onComplete: () => {
        gsap.set(alert, { visibility: 'hidden' });
      },
    });
};
