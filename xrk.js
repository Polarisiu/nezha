(function () {
  const observer = new MutationObserver(function (_, obs) {
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

    /* ====== 关键修复点 ====== */
    container.style.position = "relative";
    container.style.overflow = "visible";   // ⭐ 不裁剪
    container.style.zIndex = "2";            // ⭐ 压过背景

    /* ====== 移除旧图 ====== */
    const existingImg = container.querySelector(".custom-float-img");
    if (existingImg) existingImg.remove();

    /* ====== 新图 ====== */
    const img = document.createElement("img");
    img.src =
      "https://cdn.nodeimage.com/i/y33odRCwiMZBiRqSjifM6zd2IbqeYQCF.webp";

    img.className = "custom-float-img";
    img.style.position = "absolute";
    img.style.right = "8px";
    img.style.top = "-80px";
    img.style.width = "90px";
    img.style.zIndex = "999";               // ⭐ 保底
    img.style.pointerEvents = "none";       // 不挡点击（强烈建议）

    container.appendChild(img);
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
})();
