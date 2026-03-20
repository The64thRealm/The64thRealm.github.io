// ============================================================
//  inject-nav.js — drop this on every page, don't edit it
//  It reads SITE_PAGES from pages.js and auto-builds:
//    • the sidebar nav links
//    • the page cards grid on the home page
// ============================================================

(function () {
  // ── Sidebar nav links ──────────────────────────────────────
  // Looks for <nav id="site-nav"> and fills it with links.
  // The current page's link gets the "active" class.
  const nav = document.getElementById("site-nav");
  if (nav && typeof SITE_PAGES !== "undefined") {
    // always add home first
    const homePath = "index.html";
    const currentPath = location.pathname;
    const isHome = currentPath.endsWith("/") || currentPath.endsWith("index.html");

    const homeLink = document.createElement("a");
    homeLink.href = homePath;
    homeLink.textContent = "home";
    if (isHome) homeLink.classList.add("active");
    nav.appendChild(homeLink);

    SITE_PAGES.forEach(page => {
      const a = document.createElement("a");
      a.href = page.href;
      a.textContent = page.name;
      if (!page.external && currentPath.includes(page.href.split("/")[0])) {
        a.classList.add("active");
      }
      if (!page.external) nav.appendChild(a);
    });
  }

  // ── Page cards (home page only) ───────────────────────────
  // Looks for <div id="page-cards"> and fills it with cards.
  const grid = document.getElementById("page-cards");
  if (grid && typeof SITE_PAGES !== "undefined") {
    SITE_PAGES.forEach(page => {
      const a = document.createElement("a");
      a.href = page.href;
      a.className = "card";
      if (page.external) a.target = "_blank";
      a.innerHTML = `
        <span class="card-emoji">${page.emoji}</span>
        <span class="card-name">${page.name}</span>
        <p class="card-desc">${page.desc}</p>
      `;
      grid.appendChild(a);
    });
  }
})();
