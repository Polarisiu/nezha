(function () {
  const isMobile = window.innerWidth <= 768;

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

    if (card.querySelector(".corner-char")) return;

    const img = document.createElement("img");
    img.className = "corner-char";
    img.src = IMG_URL;

    img.style.position = "absolute";
    img.style.top = isMobile ? "-36px" : "-58px";
    img.style.right = isMobile ? "-6px" : "-14px";
    img.style.width = isMobile ? "64px" : "96px";

    img.style.zIndex = "9999";
    img.style.pointerEvents = "none";
    img.style.filter =
      "drop-shadow(0 10px 18px rgba(0,0,0,.28))";

    card.appendChild(img);

    /* hover 只在桌面启用 */
    if (!isMobile) {
      img.style.transition =
        "transform .4s cubic-bezier(.22,.61,.36,1)";
      card.addEventListener("mouseenter", () => {
        img.style.transform = "translateY(-6px)";
      });
      card.addEventListener("mouseleave", () => {
        img.style.transform = "translateY(0)";
      });
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
})();
