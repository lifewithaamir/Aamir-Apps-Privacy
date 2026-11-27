(() => {
  const apps = [
    {
      name: "WhatsWeb Pro",
      slug: "whatsweb-pro",
      description: "An independent WhatsApp Web companion with optional on-device notification history and utility controls.",
      publishedAt: "2026-11-27",
      icon: "./assets/whatsweb-pro-icon.png",
      policy: "./apps/whatsweb-pro/",
    },
  ];
  const pageSize = 6;
  const list = document.querySelector("#app-list");
  const pagination = document.querySelector("#pagination");
  const emptyState = document.querySelector("#empty-state");
  const year = document.querySelector("#year");

  if (year) year.textContent = String(new Date().getFullYear());
  if (!list || !pagination || !emptyState) return;

  const sorted = [...apps].sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize));
  const requestedPage = Number.parseInt(new URLSearchParams(location.search).get("page") || "1", 10);
  const page = Number.isFinite(requestedPage) ? Math.min(totalPages, Math.max(1, requestedPage)) : 1;
  const visibleApps = sorted.slice((page - 1) * pageSize, page * pageSize);

  if (visibleApps.length === 0) {
    emptyState.hidden = false;
    return;
  }

  const dateFormatter = new Intl.DateTimeFormat(undefined, { year: "numeric", month: "short", day: "numeric" });
  for (const app of visibleApps) {
    const card = document.createElement("a");
    card.className = "app-card";
    card.href = app.policy;
    card.setAttribute("aria-label", `Read the ${app.name} privacy policy`);

    const top = document.createElement("div");
    top.className = "app-card-top";

    const icon = document.createElement("img");
    icon.className = "app-card-icon";
    icon.src = app.icon;
    icon.alt = `${app.name} app icon`;
    icon.width = 64;
    icon.height = 64;
    icon.loading = "lazy";

    const titleBlock = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = app.name;
    const date = document.createElement("p");
    date.className = "app-card-date";
    date.textContent = `Policy updated ${dateFormatter.format(new Date(`${app.publishedAt}T00:00:00`))}`;
    titleBlock.append(title, date);
    top.append(icon, titleBlock);

    const description = document.createElement("p");
    description.className = "app-card-description";
    description.textContent = app.description;

    const action = document.createElement("span");
    action.className = "app-card-action";
    action.textContent = "View privacy policy →";
    card.append(top, description, action);
    list.append(card);
  }

  if (totalPages > 1) {
    pagination.hidden = false;
    const addPageLink = (label, targetPage, current = false, disabled = false) => {
      if (disabled) {
        const span = document.createElement("span");
        span.className = "page-link";
        span.setAttribute("aria-disabled", "true");
        span.textContent = label;
        pagination.append(span);
        return;
      }
      const link = document.createElement("a");
      link.className = "page-link";
      link.href = targetPage === 1 ? "./" : `?page=${targetPage}`;
      link.textContent = label;
      if (current) {
        link.setAttribute("aria-current", "page");
        link.setAttribute("aria-label", `Page ${targetPage}, current page`);
      } else {
        link.setAttribute("aria-label", `Go to page ${targetPage}`);
      }
      pagination.append(link);
    };

    addPageLink("Previous", page - 1, false, page === 1);
    for (let number = 1; number <= totalPages; number += 1) {
      addPageLink(String(number), number, number === page);
    }
    addPageLink("Next", page + 1, false, page === totalPages);
  }
})();
