<script>
(function () {
  /* ====== 配置 ====== */
  const SITE_START_TIME = new Date("2024-01-01T00:00:00"); // ← 改成你的建站时间
  const VISITOR_KEY = "bm_site_visits";

  const quotes = [
    "真正的强大，是温柔而坚定。",
    "Talk is cheap. Show me the code. — Linus Torvalds",
    "Stay hungry, stay foolish. — Steve Jobs",
    "简单，是终极的复杂。",
    "不要等待机会，而要创造机会。"
  ];

  /* ====== 访客统计（前端） ====== */
  let visits = parseInt(localStorage.getItem(VISITOR_KEY) || "0", 10);
  visits++;
  localStorage.setItem(VISITOR_KEY, visits);

  /* ====== 运行时长 ====== */
  function getUptime() {
    let diff = Math.floor((Date.now() - SITE_START_TIME.getTime()) / 1000);
    const days = Math.floor(diff / 86400);
    diff %= 86400;
    const hours = Math.floor(diff / 3600);
    diff %= 3600;
    const minutes = Math.floor(diff / 60);
    return `${days} 天 ${hours} 小时 ${minutes} 分`;
  }

  const el = document.getElementById("bm-status");
  if (!el) return;

  let quoteIndex = 0;

  function render() {
    el.innerHTML = `
      ⏱ 运行：<strong>${getUptime()}</strong>
      &nbsp;｜&nbsp;
      👥 访问：<strong>${visits}</strong>
      &nbsp;｜&nbsp;
      💬 ${quotes[quoteIndex % quotes.length]}
    `;
    quoteIndex++;
  }

  render();
  setInterval(render, 15000); // 15 秒换一句名言
})();
</script>
