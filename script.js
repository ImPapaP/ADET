// Wire the small navigation and theme interactions after the document is ready.
const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
const themeButton = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const themeLabel = document.querySelector(".theme-label");
const yearLabel = document.querySelector("#current-year");

// Keep the mobile menu state, button label, and expanded state in sync.
function setMenuOpen(isOpen) {
  header.dataset.menuOpen = String(isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
}

menuButton.addEventListener("click", () => {
  setMenuOpen(header.dataset.menuOpen !== "true");
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    setMenuOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuOpen(false);
  }
});

// Toggle the page theme and expose its current state to assistive technology.
themeButton.addEventListener("click", () => {
  const isDark = document.documentElement.dataset.theme !== "dark";
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  themeButton.setAttribute("aria-pressed", String(isDark));
  themeIcon.textContent = isDark ? "☼" : "◐";
  themeLabel.textContent = isDark ? "Light mode" : "Dark mode";
});

// Keep the copyright year current without requiring a yearly content edit.
yearLabel.textContent = String(new Date().getFullYear());
