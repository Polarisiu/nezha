(function () {
  const observer = new MutationObserver((_, obs) => {
    const xpath =
      "/html/body/div/div/main/div[2]/section[1]/div[4]/div";

    const container = document.evaluate(
      xpath,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;

    if (!container) return;

    obs.disconnect();

    /* ===== 1️⃣ 允许溢出 ===== */
    container.style.position = "relative";
    container.style.overflow = "visible";

    /* ===== 2️⃣ 压低背景层 ===== */
    const bgLayer = container.querySelector(
      '[class*="bg"], [class*="backdrop"], [class*="absolute"]'
    );
    if (bgLayer) {
      bgLayer.style.zIndex = "0";
    }

    /* ===== 3️⃣ 内容层抬高 ===== */
    container.querySelectorAll("*").forEach(el => {
      if (el !== bgLayer) {
        el.style.position ||= "relative";
        el.style.zIndex ||= "2";
      }
    });

    /* ===== 4️⃣ 插入小人 ===== */
    const old = container.querySelector(".float-character");
    if (old) old.remove();

    const img = document.createElement("img");
    img.src =
      "https://cdn.nodeimage.com/i/y33odRCwiMZBiRqSjifM6zd2IbqeYQCF.webp";
    img.className = "float-character";

    img.style.position = "absolute";
    img.style.right = "10px";
    img.style.top = "-90px";        // 🔥 往上浮
    img.style.width = "95px";
    img.style.zIndex = "9999";      // 🔥 永远最上
    img.style.pointerEvents = "none";

    container.appendChild(img);
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
})();
