(function () {
  if (document.getElementById("glass-layer-fix")) return;

  const style = document.createElement("style");
  style.id = "glass-layer-fix";
  style.textContent = `
/* ===== 玻璃真正生效的方式：伪元素 ===== */
.server-inline-list .rounded-lg.bg-card\\/70,
.server-inline-list .bg-card\\/70.p-4.rounded-\\[10px\\] {
  position: relative;
  background: transparent !important;
  overflow: visible !important;
}

/* 玻璃层 */
.server-inline-list .rounded-lg.bg-card\\/70::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;

  border-radius: 1rem;
  background: rgba(255,255,255,.22);
  backdrop-filter: blur(14px) saturate(160%);
  -webkit-backdrop-filter: blur(14px) saturate(160%);

  border: 1px solid rgba(255,255,255,.18);
  box-shadow:
    0 10px 32px rgba(0,0,0,.12),
    inset 0 1px 0 rgba(255,255,255,.35);
}

/* 内容层抬高 */
.server-inline-list .rounded-lg.bg-card\\/70 > * {
  position: relative;
  z-index: 1;
}

/* 深色模式 */
.dark .server-inline-list .rounded-lg.bg-card\\/70::before {
  background: rgba(0,0,0,.32);
  border: 1px solid rgba(255,255,255,.08);
}
`;
  document.head.appendChild(style);
})();
