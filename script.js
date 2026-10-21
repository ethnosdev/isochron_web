/**
 * Isochron Landing Page
 * Theme toggling, download configuration, and interactive preview enhancements
 */

// Global Configuration
const CONFIG = {
  // Direct download URL for the macOS installer DMG
  downloadUrl: "https://github.com/ethnosdev/isochron/releases/download/v2.0.0/Isochron.dmg",
  version: "2.0.0",
};

document.addEventListener("DOMContentLoaded", () => {
  initVersionDisplay();
  initThemeToggle();
});

/**
 * Populate version placeholders across the page
 */
function initVersionDisplay() {
  const versionElements = document.querySelectorAll(".js-version");
  versionElements.forEach((el) => {
    el.textContent = CONFIG.version;
  });
}

/**
 * Initialize theme management (System adaptive + manual user preference)
 */
function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;

  const currentTheme = localStorage.getItem("theme");

  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }

  toggleBtn.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark" ||
      (!document.documentElement.hasAttribute("data-theme") &&
       window.matchMedia("(prefers-color-scheme: dark)").matches);

    const newTheme = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });

  // Listen to system changes if user hasn't explicitly set a preference
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      document.documentElement.removeAttribute("data-theme");
    }
  });
}


