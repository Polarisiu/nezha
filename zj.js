(function () {
  const isDesktop = window.matchMedia(
    "(hover: hover) and (pointer: fine)"
  ).matches;
  if (!isDesktop) return;

  const IMG_URL =
    "https://cdn.nodeimage.com/i/y33odRCwiMZBiRqSjifM6zd2IbqeYQCF.webp";

  const observer = new MutationObserver((_, obs) => {
    const xpath =
      "/html/body/div/div/main/div[2]/section[1]/div[4]/div";

    const card = document.evaluate(
      xpath,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;

    if (!card) return;
    obs.disconnect();

    card.style.position = "relative";
    card.style.overflow = "visible";

    if (card.querySelector(".apple-corner-char")) return;

    const img = document.createElement("img");
    img.className = "apple-corner-char";
    img.src = IMG_URL;

    /* ===== 右上角挂件定位 ===== */
    img.style.position = "absolute";
    img.style.top = "-58px";        // 顺着圆角露出
    img.style.right = "-14px";
    img.style.width = "96px";

    /* ===== 质感 ===== */
    img.style.zIndex = "9999";
    img.style.pointerEvents = "none";
    img.style.filter =
      "drop-shadow(0 10px 18px rgba(0,0,0,.28))";
    img.style.transition =
      "transform .4s cubic-bezier(.22,.61,.36,1)";

    card.appendChild(img);

    /* ===== hover 微动（高级） ===== */
    card.addEventListener("mouseenter", () => {
      img.style.transform = "translateY(-6px)";
    });
    card.addEventListener("mouseleave", () => {
      img.style.transform = "translateY(0)";
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
})();
