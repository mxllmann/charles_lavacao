// Função para rolagem suave da página

export default function smoothScrollTo(targetY, duration = 1000) {
    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime = null;
  
    function animation(currentTime) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
  
      // Ease in/out para uma transição suave
      const ease = (t) =>
        t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = ease(progress);
  
      window.scrollTo(0, startY + distance * easedProgress);
  
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }
  
    requestAnimationFrame(animation);
  }
  