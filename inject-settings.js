// ============================================================
//  inject-nav.js — drop this on every page
//  It reads SITE_PAGES from pages.js and auto-builds:
//    • the sidebar nav links
//    • the page cards grid on the home page
//    • the site settings
// ============================================================

document.getElementById('status-text').textContent = SITE_STATUS;

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
  const pageGrid = document.getElementById("page-cards");
  if (pageGrid && typeof SITE_PAGES !== "undefined") {
    SITE_PAGES.forEach(page => {
      const a = document.createElement("a");
      a.href = page.href;
      a.className = "card";
      a.innerHTML = `
        <span class="card-emoji">${page.emoji}</span>
        <span class="card-name">${page.name}</span>
        <p class="card-desc">${page.desc}</p>
      `;
      pageGrid.appendChild(a);
    });
  }

  const externalLinksGrid = document.getElementById("external-cards");
  if (externalLinksGrid && typeof EXTERNAL_LINKS !== "undefined") {
    EXTERNAL_LINKS.forEach(page => {
      const a = document.createElement("a");
      a.href = page.href;
      a.className = "card";
      a.innerHTML = `
        <span class="card-emoji">${page.emoji}</span>
        <span class="card-name">${page.name}</span>
        <p class="card-desc">${page.desc}</p>
      `;
      externalLinksGrid.appendChild(a);
    });
  }
})();
