(function () {
  if (document.getElementById("nav-glass-style")) return;

  const style = document.createElement("style");
  style.id = "nav-glass-style";
  style.type = "text/css";
  style.textContent = `
a.flex.items-center.gap-1.text-sm.font-medium.opacity-50 {
  background-color: rgba(255, 255, 255, 0.01) !important;
  backdrop-filter: blur(5px) saturate(100%);
  -webkit-backdrop-filter: blur(5px) saturate(100%);
  border-radius: 9999px !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  padding: 6px 12px !important;
  margin-left: 0.5rem !important;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: none !important;
  opacity: 1 !important;
  color: #6c757d !important; 
}

/* 暗色模式 */
.dark a.flex.items-center.gap-1.text-sm.font-medium.opacity-50 {
  background-color: rgba(30, 30, 30, 0.2) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  color: #adb5bd !important;
}

/* 悬停（浅色） */
a.flex.items-center.gap-1.text-sm.font-medium.opacity-50:hover {
  color: #000000 !important;
}

/* 悬停（暗色） */
.dark a.flex.items-center.gap-1.text-sm.font-medium.opacity-50:hover {
  color: #FFFFFF !important;
}

/* 高光划过 */
a.flex.items-center.gap-1.text-sm.font-medium.opacity-50::after {
  content: '';
  position: absolute;
  top: 0;
  left: -150%;
  width: 100%;
  height: 100%;
  transform: skewX(-30deg);
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.1) 45%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.1) 55%,
    rgba(255, 255, 255, 0) 100%
  );
  transition: left 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}

/* hover 触发高光 */
a.flex.items-center.gap-1.text-sm.font-medium.opacity-50:hover::after {
  left: 150%;
}
`;
  document.head.appendChild(style);
})();
