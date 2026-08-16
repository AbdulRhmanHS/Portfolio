// DONE: Apply the dark theme
// DONE: Trigger the hamburger menu

// --- Dark theme ---
const toggleBtn = document.getElementById("theme-toggle");
const htmlEl = document.documentElement;

const savedTheme = localStorage.getItem("theme") || "light";
htmlEl.setAttribute("data-theme", savedTheme);
updateButton(savedTheme);

toggleBtn.addEventListener("click", () => {
  const currentTheme = htmlEl.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  htmlEl.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateButton(newTheme);
});

function updateButton(theme) {
  const themeIcon = toggleBtn.querySelector("i");
  const isDark = theme === "dark";

  if (themeIcon) {
    themeIcon.className = isDark
      ? "fa-solid fa-sun fa-fw"
      : "fa-solid fa-moon fa-fw";
  }

  toggleBtn.setAttribute(
    "aria-label",
    isDark ? "Switch to light theme" : "Switch to dark theme",
  );
}

// --- Hamburger menu ---
const menuBtn = document.getElementById("menu-toggle");
const topBar = document.querySelector(".top-bar");
const overlay = document.getElementById("menu-overlay");

function toggleMenu() {
  topBar.classList.toggle("mini");
  overlay.classList.toggle("is-active");
  const isOpen = topBar.classList.contains("mini");
  menuBtn.setAttribute("aria-expanded", isOpen);
}

menuBtn.addEventListener("click", toggleMenu);

overlay.addEventListener("click", toggleMenu);
