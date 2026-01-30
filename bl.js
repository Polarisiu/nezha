(function () {
  if (document.getElementById("apple-glass-style")) return;

  const style = document.createElement("style");
  style.id = "apple-glass-style";
  style.textContent = `
/* ===== Apple Glass FINAL ===== */
:root {
  --glass-light: rgba(255,255,255,.22);
  --glass-dark: rgba(0,0,0,.32);
}

/* ===== 服务器卡片玻璃 ===== */
.server-inline-list .rounded-lg.bg-card\\/70,
.server-inline-list .bg-card\\/70.p-4.rounded-\\[10px\\] {
  position: relative;
  overflow: visible !important;          /* ⭐ 关键 */
  border-radius: 1rem;

  background: var(--glass-light);
  backdrop-filter: blur(14px) saturate(160%);
  -webkit-backdrop-filter: blur(14px) saturate(160%);

  border: 1px solid rgba(255,255,255,.18);
  box-shadow:
    0 10px 32px rgba(0,0,0,.12),
    inset 0 1px 0 rgba(255,255,255,.35);

  transition: background .3s ease, box-shadow .3s ease;
}

/* ===== 深色模式 ===== */
.dark .server-inline-list .rounded-lg.bg-card\\/70 {
  background: var(--glass-dark);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255,255,255,.08);
}

/* ===== hover 轻微抬升 ===== */
.server-inline-list .rounded-lg.bg-card\\/70:hover {
  box-shadow:
    0 14px 44px rgba(0,0,0,.18),
    inset 0 1px 0 rgba(255,255,255,.45);
}

/* ===== 减少透明度兼容 ===== */
@media (prefers-reduced-transparency: reduce) {
  .server-inline-list .rounded-lg.bg-card\\/70 {
    backdrop-filter: none !important;
    background: #f3f4f6;
  }
  .dark .server-inline-list .rounded-lg.bg-card\\/70 {
    background: #1f2937;
  }
}
`;
  document.head.appendChild(style);
})();
