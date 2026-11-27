(() => {
  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    const updateBackToTop = () => {
      backToTop.classList.toggle("is-visible", window.scrollY > 360);
    };
    window.addEventListener("scroll", updateBackToTop, { passive: true });
    updateBackToTop();
    backToTop.addEventListener("click", () => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
    });
  }

  const indicator = document.querySelector("#pull-indicator");
  const status = document.querySelector("#refresh-status");
  if (!indicator || !status) return;

  const threshold = 78;
  let startY = 0;
  let pulling = false;
  let armed = false;

  const resetPull = () => {
    pulling = false;
    armed = false;
    indicator.classList.remove("is-visible", "is-armed", "is-refreshing");
    indicator.style.removeProperty("--pull-distance");
    status.textContent = "Pull down to refresh";
  };

  window.addEventListener("touchstart", (event) => {
    if (event.touches.length !== 1 || window.scrollY > 1) return;
    if (event.target.closest("a, button, input, textarea, select, [contenteditable='true']")) return;
    startY = event.touches[0].clientY;
    pulling = true;
  }, { passive: true });

  window.addEventListener("touchmove", (event) => {
    if (!pulling || event.touches.length !== 1) return;
    const distance = event.touches[0].clientY - startY;
    if (distance <= 0 || window.scrollY > 1) {
      resetPull();
      return;
    }

    if (distance > 6 && event.cancelable) event.preventDefault();
    indicator.classList.add("is-visible");
    indicator.style.setProperty("--pull-distance", `${Math.min(80, Math.max(44, distance * 0.58))}px`);
    armed = distance >= threshold;
    indicator.classList.toggle("is-armed", armed);
    status.textContent = armed ? "Release to refresh" : "Pull down to refresh";
  }, { passive: false });

  window.addEventListener("touchend", () => {
    if (!pulling) return;
    if (!armed) {
      resetPull();
      return;
    }
    pulling = false;
    indicator.classList.add("is-refreshing");
    status.textContent = "Refreshing…";
    window.setTimeout(() => window.location.reload(), 120);
  }, { passive: true });

  window.addEventListener("touchcancel", resetPull, { passive: true });
})();
