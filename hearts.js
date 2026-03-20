// hearts.js — drop this on any page to get floating hearts
// Requires this CSS to be present on the page (or in a shared stylesheet):
//
//   .heart {
//     position: fixed;
//     color: #f06292;
//     pointer-events: none;
//     z-index: 0;
//     animation: floatUp linear infinite;
//     user-select: none;
//   }
//   @keyframes floatUp {
//     0%   { transform: translateY(0) translateX(0); opacity: 0; }
//     10%  { opacity: 1; }
//     90%  { opacity: 1; }
//     100% { transform: translateY(-100vh) translateX(var(--drift, 0px)); opacity: 0; }
//   }

(function () {
  // Inject the required CSS automatically so you don't have to add it manually
  const style = document.createElement('style');
  style.textContent = `
    .heart {
      position: fixed;
      color: #f06292;
      pointer-events: none;
      z-index: 0;
      animation: floatUp linear infinite;
      user-select: none;
    }
    @keyframes floatUp {
      0%   { transform: translateY(0) translateX(0); opacity: 0; }
      10%  { opacity: 1; }
      90%  { opacity: 1; }
      100% { transform: translateY(-100vh) translateX(var(--drift, 0px)); opacity: 0; }
    }
  `;
  document.head.appendChild(style);

  const count = 22;
  for (let i = 0; i < count; i++) {
    const el = document.createElement('span');
    el.className = 'heart';
    el.textContent = '♡';
    const size     = 10 + Math.random() * 18;
    const left     = Math.random() * 100;
    const duration = 8  + Math.random() * 14;
    const delay    = -(Math.random() * duration);
    const drift    = (Math.random() - 0.5) * 80;
    const opacity  = 0.08 + Math.random() * 0.12;
    el.style.cssText = `left:${left}vw;bottom:-2rem;font-size:${size}px;opacity:${opacity};animation-duration:${duration}s;animation-delay:${delay}s;--drift:${drift}px;`;
    document.body.appendChild(el);
  }
})();
